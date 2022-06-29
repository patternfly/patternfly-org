const path = require('path');
const glob = require('glob');
const ts = require('typescript');
const versions = require('../../versions.json');

// matches webpack.base.config.js
const defaultDeclarations = `
declare module '\\*.png' {
  const content: string;
  export default content;
}
declare module '\\*.jpg' {
  const content: string;
  export default content;
}
declare module '\\*.jpeg' {
  const content: string;
  export default content;
}
declare module '\\*.webp' {
  const content: string;
  export default content;
}
declare module '\\*.gif' {
  const content: string;
  export default content;
}
declare module '\\*.svg' {
  const content: string;
  export default content;
}
`;

const reactStylesDir = path.join(require.resolve('@patternfly/react-styles/package.json'), '../');
const reactStyles = glob.sync(path.join(reactStylesDir, 'css/**/*.d.ts'))
  .map(f => f.replace(reactStylesDir, '@patternfly/react-styles/').replace(/\.d.ts$/, ''));
const files = {
  'imports.ts': ['react', '@reach/router']
      .concat(Object.keys(versions.Releases[0].versions))
      .concat(reactStyles)
      .filter(p => p !== '@patternfly/patternfly')
      .map(p => `import '${p}';`)
      .join('\n'),
  'declarations.d.ts': defaultDeclarations
};

const compilerOptions = {
  target: 'ES2017',
  noEmit: true,
  skipLibCheck: true,
  jsx: 'react',
  esModuleInterop: true
};
const pfPackageRegex = /@patternfly\/([^\/]+)\/dist\/.*/;

const compilerHost = ts.createCompilerHost(compilerOptions);
compilerHost.readFile = fname => {
  if (files[fname]) {
    // console.log('readFile', fname, files[fname].text);
    return files[fname];
  }
  return ts.sys.readFile(fname);
};
compilerHost.useCaseSensitiveFileNames = () => false; // saves 200ms on startup

const program = ts.createProgram(
  Object.keys(files),
  compilerOptions,
  compilerHost
);
const defaultImportsFile = program.getSourceFile('imports.ts');
const typechecker = ts.createTypeChecker(program, true);

let fileCounter = 0;
function typecheck(fname, text) {
  fname += fileCounter++; // Needs a new fname to bust diagnostics cache per-file :(
  files[fname] = text;
  const sourceFile = ts.createSourceFile(
    fname,
    text,
    ts.ScriptTarget.ES2017,
    true,
    ts.ScriptKind.TSX
  );
  sourceFile.resolvedModules = defaultImportsFile.resolvedModules;
  // Fix @patternfly/react-* imports so types resolve
  sourceFile.statements
    .filter(s => s.moduleSpecifier && s.moduleSpecifier.text.match(pfPackageRegex))
    .forEach(s => {
      s.moduleSpecifier.text = s.moduleSpecifier.text.replace(pfPackageRegex, (_, m) => `@patternfly/${m}`);
      // Copied from a test file with `import { CogIcon } from '@patternfly/react-icons';`
      if (!s.importClause.namedBindings) {
        s.importClause.namedBindings = {
          flags: 0,
          modifierFlagsCache: 0,
          kind: 265,
          transformFlags: 0,
          elements: [{
            flags: 0,
            modifierFlagsCache: 0,
            kind: 266,
            transformFlags: 0,
            propertyName: undefined,
            name: s.importClause.name
          }]
        };
        s.importClause.name = undefined;
      }
    });
  ts.bindSourceFile(sourceFile, compilerOptions);

  const allDiagnostics = [...typechecker.getDiagnostics(sourceFile)];
  return allDiagnostics.map(diagnostic => {
    if (diagnostic.file) {
      let { line, character } = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start);
      let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
      return {
        line,
        character: character + 1,
        message
      };
    } else {
      return {
        message: ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")
      };
    }
  });
}

module.exports = {
  typecheck
};

