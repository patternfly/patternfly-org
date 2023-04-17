const fs = require("fs");
const reactDocgen = require("react-docgen");
const ts = require("typescript");

const annotations = [
  {
    regex: /@deprecated/,
    name: "deprecated",
    type: "Boolean",
  },
  {
    regex: /@hide/,
    name: "hide",
    type: "Boolean",
  },
  {
    regex: /@beta/,
    name: "beta",
    type: "Boolean",
  },
  {
    regex: /@propType\s+(.*)/,
    name: "type",
    type: "String",
  },
];

function addAnnotations(prop) {
  if (prop.description) {
    annotations.forEach(({ regex, name }) => {
      const match = prop.description.match(regex);
      if (match) {
        prop.description = prop.description.replace(regex, "").trim();
        if (name) {
          prop[name] = match[2] || match[1] || true;
        }
      }
    });
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

  return (parsedComponents || []).filter(
    (parsed) => parsed && parsed.displayName
  );
}

const getNodeText = (node, sourceText) => {
  if (!node || !node.pos || !node.end) {
    return undefined;
  }

  return sourceText.substring(node.pos, node.end).trim();
};

const buildJsDocProps = (nodes, sourceText) =>
  nodes?.reduce((acc, member) => {
    const name =
      (member.name && member.name.escapedText) ||
      (member.parameters &&
        `[${getNodeText(member.parameters[0], sourceText)}]`) ||
      "Unknown";
    acc[name] = {
      description: member.jsDoc
        ? member.jsDoc.map((doc) => doc.comment).join("\n")
        : null,
      required: member.questionToken === undefined,
      type: {
        raw: getNodeText(member.type, sourceText).trim(),
      },
    };
    return acc;
  }, {});

const getSourceFileStatements = (filename, sourceText) => {
  const { statements } = ts.createSourceFile(
    filename,
    sourceText,
    ts.ScriptTarget.Latest // languageVersion
  );

  return statements;
};

const getInterfaceMetadata = (filename, sourceText) =>
  getSourceFileStatements(filename, sourceText).reduce(
    (metaDataAcc, statement) => {
      if (statement.kind === ts.SyntaxKind.InterfaceDeclaration) {
        metaDataAcc.push({
          displayName: statement.name.escapedText,
          description: statement.jsDoc?.map((doc) => doc.comment).join("\n"),
          props: buildJsDocProps(statement.members, sourceText),
        });
      }

      return metaDataAcc;
    },
    []
  );

const getTypeAliasMetadata = (filename, sourceText) =>
  getSourceFileStatements(filename, sourceText).reduce(
    (metaDataAcc, statement) => {
      if (statement.kind === ts.SyntaxKind.TypeAliasDeclaration) {
        const props = statement.type.types?.reduce((propAcc, type) => {
          if (type.members) {
            propAcc.push(buildJsDocProps(type.members, sourceText));
          }

          return propAcc;
        }, []);

        metaDataAcc.push({
          props,
          displayName: statement.name.escapedText,
          description: statement.jsDoc?.map((doc) => doc.comment).join("\n"),
        });
      }

      return metaDataAcc;
    },
    []
  );

function normalizeProp([
  name,
  { required, annotatedType, type, tsType, description, defaultValue },
]) {
  const res = {
    name,
    type:
      annotatedType ||
      (type && type.name) ||
      (type && (type.raw || type.name)) ||
      (tsType && (tsType.raw || tsType.name)) ||
      "No type info",
    description,
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
  const sourceText = fs.readFileSync(file, "utf8");
  const componentMeta = getComponentMetadata(file, sourceText); // Array of components with props
  const interfaceMeta = getInterfaceMetadata(file, sourceText); // Array of interfaces with props
  const typeAliasMeta = getTypeAliasMetadata(file, sourceText); // Array of type aliases with props
  const propsMetaMap = [...interfaceMeta, ...typeAliasMeta].reduce(function (
    target,
    interfaceOrTypeAlias
  ) {
    target[interfaceOrTypeAlias.displayName] = interfaceOrTypeAlias;
    return target;
  },
  {});

  // Go through each component and check if they have an interface or type alias with a jsDoc description
  // If so copy it over (fix for https://github.com/patternfly/patternfly-react/issues/7612)
  componentMeta.forEach((c) => {
    if (c.description) {
      return c;
    }

    const propsName = `${c.displayName}Props`;
    if (propsMetaMap[propsName]?.description) {
      c.description = propsMetaMap[propsName].description;
    }
  });

  return [...componentMeta, ...interfaceMeta, ...typeAliasMeta].map(
    (parsed) => ({
      name: parsed.displayName,
      description: parsed.description || "",
      props: Object.entries(parsed.props || {})
        .map(normalizeProp)
        .map(addAnnotations)
        .filter((prop) => !prop.hide)
        .sort((p1, p2) => p1.name.localeCompare(p2.name)),
    })
  );
}

module.exports = {
  tsDocgen,
};
