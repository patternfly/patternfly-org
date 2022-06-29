const fs = require('fs');
const reactDocgen = require('react-docgen');
const ts = require('typescript');

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
    regex: /@propType\s+(.*)/,
    name: 'type',
    type: 'String'
  }
];

function addAnnotations(prop) {
  if (prop.description) {
    annotations.forEach(({ regex, name }) => {
      const match = prop.description.match(regex);
      if (match) {
        prop.description = prop.description.replace(regex, '').trim();
        if (name) {
          prop[name] = match[2] || match[1] || true;
        }
      }
    })
  }

  return prop;
}

function getComponentMetadata(filename, sourceText) {
  let parsedComponents = null;
  try {
    parsedComponents = reactDocgen.parse(
      sourceText,
      reactDocgen.resolver.findAllExportedComponentDefinitions,
      null,
      { filename }
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    // console.warn(`No component found in ${filename}:`, err);
  }

  return (parsedComponents || []).filter(parsed => parsed && parsed.displayName);
}

function getInterfaceMetadata(filename, sourceText) {
  const ast = ts.createSourceFile(
    filename,
    sourceText,
    ts.ScriptTarget.Latest // languageVersion
  );
  
  function getText(node) {
    if (!node || !node.pos || !node.end) {
      return undefined;
    }
    return sourceText.substring(node.pos, node.end).trim();
  }

  const interfaces = [];
  
  ast.statements
    .filter(statement => statement.kind === ts.SyntaxKind.InterfaceDeclaration)
    .forEach(statement => {
      const props = statement.members.reduce((acc, member) => {
        const name = (member.name && member.name.escapedText)
          || (member.parameters && `[${getText(member.parameters[0])}]`)
          || 'Unknown';
        acc[name] = {
          description: member.jsDoc
            ? member.jsDoc.map(doc => doc.comment).join('\n')
            : null,
          required: member.questionToken === undefined,
          type: {
            raw: getText(member.type).trim()
          }
        };
        return acc;
      }, {});

      interfaces.push({
        displayName: statement.name.escapedText,
        props
      });
    });
  return interfaces;
}

function normalizeProp([
  name,
  {
    required,
    annotatedType,
    type,
    tsType,
    description,
    defaultValue
  }
]) {
  const res = {
    name,
    type: annotatedType
      || (type && type.name)
      || (type && (type.raw || type.name))
      || (tsType && (tsType.raw || tsType.name))
      || 'No type info',
    description
  };
  if (required) {
    res.required = true;
  }
  if (defaultValue && defaultValue.value) {
    res.defaultValue = defaultValue.value;
  }

  return res;
}

function tsDocgen(file) {
  const sourceText = fs.readFileSync(file, 'utf8');
  const componentMeta = getComponentMetadata(file, sourceText); // Array of components with props
  const interfaceMeta = getInterfaceMetadata(file, sourceText); // Array of interfaces with props

  return componentMeta
    .concat(interfaceMeta)
    .map(parsed => ({
      name: parsed.displayName,
      description: parsed.description || '',
      props: Object.entries(parsed.props || {})
        .map(normalizeProp)
        .map(addAnnotations)
        .filter(prop => !prop.hide)
        .sort((p1, p2) => p1.name.localeCompare(p2.name))
    }));
}

module.exports = {
  tsDocgen
};

