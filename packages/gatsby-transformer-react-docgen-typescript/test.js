const fs = require('fs');
const sourcePath = require.resolve('@patternfly/react-core/src/helpers/ouia.ts');
const sourceText = fs.readFileSync(sourcePath, 'utf8');
const ts = require('typescript');
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

    statement.members.map(member => ({
      name: member.name.escapedText,
      description: member.jsDoc
        ? member.jsDoc.map(doc => doc.comment).join('\n')
        : null,
      required: member.questionToken === undefined,
      type: getText(member.type).trim()
    }));
  });


// console.dir(node.statements.map(statement => ts.SyntaxKind[statement.kind]));

// const interfaceRegex = /interface (\w+)\s*{([^}]*?)}/gi;

// const interfaces = {};
// let result;
// while((result = interfaceRegex.exec(sourceText)) !== null) {
//   interfaces[result[1]] = result[2]
//     .split(';')
//     .map(res => res.trim())
//     .filter(Boolean)
//     .map()
//   console.log('interface', result);
// }
