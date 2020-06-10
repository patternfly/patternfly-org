const reactDocgen = require('react-docgen');
const ts = require('typescript');

function isSource(node) {
  if (!node || node.relativePath.includes('/example'))
    return false;

  return true;
}

function isComponentCode(node) {
  return node && (isTSX(node) || isJSX(node)) && isSource(node);
}

function isTSX(node) {
  return (
    node.internal.mediaType === `application/typescript` ||
    node.internal.mediaType === `text/tsx` ||
    node.extension === 'tsx'
  );
}

function isJSX(node) {
  return node.internal.mediaType === `application/javascript` || node.internal.mediaType === `text/jsx`;
}

function flattenProps(props) {
  const res = [];
  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      value.name = key;
      res.push(value);
    });
  }

  return res;
}

const annotations = [
  {
    regex: /@deprecated/,
    name: 'deprecated',
    type: 'Boolean'
  },
  {
    regex: /@hide/,
    name: 'hide',
    type: 'Boolean'
  },
  {
    regex: /@beta/,
    name: 'beta',
    type: 'Boolean'
  },
  {
    regex: /@propType (\w+|['"](.+)['"])\s*/,
    name: 'annotatedType',
    type: 'String'
  },
];

function addAnnotations(prop) {
  // Prop looks like this: {
  //   "beta": null,
  //   "required": false,
  //   "name": "className",
  //   "description": "Additional css classes",
  //   "defaultValue": {
  //     "value": "''"
  //   },
  //   "tsType": {
  //     "name": "string",
  //     "raw": null
  //   },
  //   "type": null
  // },
  if (prop.description) {
    annotations.forEach(({ regex, name }) => {
      const match = prop.description.match(regex);
      if (match) {
        console.log(prop.description.replace(regex, ''))
        prop.description = prop.description.replace(regex, '').trim();
        prop[name] = match[2] || match[1] || true;
      }
    })
  }

  return prop;
}

function addComponentMetadata(node, sourceText) {
  let parsedComponents = null;
  try {
    parsedComponents = reactDocgen.parse(
      sourceText,
      reactDocgen.resolver.findAllExportedComponentDefinitions,
      null,
      { filename: node.absolutePath }
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    // console.warn('No component found in', node.absolutePath);
  }

  (parsedComponents || [])
    .filter(parsed => parsed && parsed.displayName) // TabContent.tsx is being a pain so check for parsed.displayName
    .forEach(parsed => {
      // TODO: also find interfaces it extends to map back to interface metadata in other files
      const metadataNode = {
        name: parsed.displayName,
        relativePath: node.relativePath,
        description: parsed.description,
        props: flattenProps(parsed.props).map(addAnnotations),
        path: node.relativePath,
        basePath: node.relativePath.split('/')[0],
        id: createNodeId(`${node.id}react-docgen${node.relativePath}`),
        children: [],
        parent: node.id,
        internal: {
          contentDigest: createContentDigest(node),
          type: `ComponentMetadata`
        }
      };
      actions.createNode(metadataNode);
      actions.createParentChildLink({ parent: node, child: metadataNode });
    });
}

function addInterfaceMetadata(node, sourceText) {
  const node = ts.createSourceFile(
    'ouia.d.ts',   // fileName
    sourceText,
    ts.ScriptTarget.Latest // langugeVersion
  );
  
  function getText(node) {
    return sourceText.substring(node.pos, node.end);
  }
  
  node.statements
    .filter(statement => statement.kind === ts.SyntaxKind.InterfaceDeclaration)
    .forEach(statement => {
      console.log('interface', statement.name.escapedText);
  
      // TODO: Create nodes
      statement.members.map(member => ({
        name: member.name.escapedText,
        description: member.jsDoc
          ? member.jsDoc.map(doc => doc.comment).join('\n')
          : null,
        required: member.questionToken === undefined,
        type: getText(member.type).trim()
      }));
    });
}

// Docs https://www.gatsbyjs.org/docs/actions/#createNode
async function onCreateNode({ node, actions, loadNodeContent, createNodeId, createContentDigest }) {
  if (!isComponentCode(node) && !isDTS(node)) return;

  const sourceText = await loadNodeContent(node);
  addComponentMetadata(node, sourceText);
  addInterfaceMetadata(node, sourceText);
}

exports.onCreateNode = onCreateNode;

// Add types fetched in `mdx.js` query in case no files are passed to infer from
exports.createSchemaCustomization = ({ actions }) => {
  const typeDefs = `
    type TypeType @noInfer {
      name: String
    }
    type TsType @noInfer {
      name: String
      raw: String
    }
    type defaultValue @noInfer {
      value: String
    }
    type PropsType @noInfer {
      beta: Boolean
      name: String!
      description: String
      required: Boolean
      type: TypeType
      tsType: TsType
      defaultValue: defaultValue
      ${annotations.map(({ name, type }) => `${name}: ${type}`).join('\n')}
    }
    type ComponentMetadata implements Node @noInfer {
      name: String!
      description: String
      props: [PropsType]
    }
  `;
  actions.createTypes(typeDefs);
}
