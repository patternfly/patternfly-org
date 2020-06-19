const fs = require('fs');
const sourcePath = require.resolve('@patternfly/react-core/src/components/Wizard/Wizard.tsx');
const sourceText = fs.readFileSync(sourcePath, 'utf8');
const reactDocgen = require('react-docgen');
const ts = require('typescript');
const node = ts.createSourceFile(
  'ouia.d.ts',   // fileName
  sourceText,
  ts.ScriptTarget.Latest // langugeVersion
);

function getText(node) {
  if (!node || !node.pos || !node.end)
    return undefined;
  return sourceText.substring(node.pos, node.end).trim();
}

const interfaces = [];

node.statements
  .filter(statement => statement.kind === ts.SyntaxKind.InterfaceDeclaration)
  .forEach(statement => {
    console.log('interface', statement.name.escapedText);

    const props = statement.members.map(member => ({
      name: (member.name && member.name.escapedText) || member.parameters && `[${getText(member.parameters[0])}]` || 'Unknown',
      description: member.jsDoc
        ? member.jsDoc.map(doc => doc.comment).join('\n')
        : null,
      required: member.questionToken === undefined,
      type: getText(member.type).trim()
    }));
    interfaces.push({name: statement.name.escapedText, props});
  });

console.log('our interfaces', interfaces);

const parsedComponents = reactDocgen.parse(
  sourceText,
  reactDocgen.resolver.findAllExportedComponentDefinitions,
  null,
  { filename: sourcePath }
);
console.log('react-docgen', parsedComponents);
