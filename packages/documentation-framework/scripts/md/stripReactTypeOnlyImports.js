const { parse } = require('@patternfly/ast-helpers');

/**
 * TypeScript-only names that @types/react declares but the `react` package does not
 * export at runtime. Value-importing them breaks strict ESM linking (e.g. Rspack).
 * @see https://github.com/facebook/react/issues/11503
 */
const REACT_TYPE_ONLY_EXPORTS = new Set([
  'AnimationEvent',
  'AriaAttributes',
  'BaseSyntheticEvent',
  'ChangeEvent',
  'ClipboardEvent',
  'ComponentClass',
  'ComponentProps',
  'ComponentPropsWithRef',
  'ComponentPropsWithoutRef',
  'ComponentType',
  'CompositionEvent',
  'CSSProperties',
  'DetailedHTMLProps',
  'Dispatch',
  'DOMAttributes',
  'DragEvent',
  'ElementType',
  'ExoticComponent',
  'FC',
  'FocusEvent',
  'FormEvent',
  'ForwardRefExoticComponent',
  'FunctionComponent',
  'HTMLAttributes',
  'InvalidEvent',
  'JSXElementConstructor',
  'KeyboardEvent',
  'Key',
  'LazyExoticComponent',
  'LegacyRef',
  'MemoExoticComponent',
  'MouseEvent',
  'MutableRefObject',
  'PointerEvent',
  'PropsWithChildren',
  'PropsWithoutRef',
  'PropsWithRef',
  'ReactChangeEvent',
  'ReactChild',
  'ReactElement',
  'ReactFragment',
  'ReactFormEvent',
  'ReactKeyboardEvent',
  'ReactMouseEvent',
  'ReactNode',
  'ReactPointerEvent',
  'ReactPortal',
  'ReactText',
  'Ref',
  'RefAttributes',
  'RefCallback',
  'RefObject',
  'SetStateAction',
  'StyleHTMLAttributes',
  'SVGAttributes',
  'SVGProps',
  'SyntheticEvent',
  'TouchEvent',
  'TransitionEvent',
  'UIEvent',
  'VoidFunctionComponent',
  'VFC',
  'WheelEvent',
]);

function specifierImportedName(spec) {
  if (spec.type !== 'ImportSpecifier') {
    return null;
  }
  const id = spec.imported;
  return id.type === 'Identifier' ? id.name : null;
}

function importDeclarationToSource(decl, specifiers) {
  const srcLiteral = decl.source.raw || JSON.stringify(decl.source.value);
  if (specifiers.length === 0) {
    return '';
  }

  const def = specifiers.find((s) => s.type === 'ImportDefaultSpecifier');
  const ns = specifiers.find((s) => s.type === 'ImportNamespaceSpecifier');
  const named = specifiers.filter((s) => s.type === 'ImportSpecifier');

  if (ns) {
    return `import * as ${ns.local.name} from ${srcLiteral}`;
  }

  const formatNamed = () =>
    named
      .map((sp) => {
        const imp = sp.imported.name;
        const loc = sp.local.name;
        return imp === loc ? loc : `${imp} as ${loc}`;
      })
      .join(', ');

  if (def && named.length) {
    return `import ${def.local.name}, { ${formatNamed()} } from ${srcLiteral}`;
  }
  if (def) {
    return `import ${def.local.name} from ${srcLiteral}`;
  }
  return `import { ${formatNamed()} } from ${srcLiteral}`;
}

function filterReactSpecifiers(decl) {
  if (decl.importKind === 'type') {
    return [];
  }
  return decl.specifiers.filter((spec) => {
    if (spec.type === 'ImportDefaultSpecifier' || spec.type === 'ImportNamespaceSpecifier') {
      return true;
    }
    if (spec.type === 'ImportSpecifier' && spec.importKind === 'type') {
      return false;
    }
    const name = specifierImportedName(spec);
    if (!name) {
      return true;
    }
    return !REACT_TYPE_ONLY_EXPORTS.has(name);
  });
}

/**
 * Removes TypeScript-only specifiers from `import … from 'react'` in MDX import blocks.
 * MDX often provides many import lines in a single node; this handles multi-statement programs.
 */
function stripReactTypeOnlyImports(importSource) {
  const trimmed = importSource.trim();
  if (!trimmed || !trimmed.includes('react')) {
    return importSource;
  }

  const toParse = trimmed.endsWith(';') ? trimmed : `${trimmed};`;
  let ast;
  try {
    ast = parse(toParse);
  } catch {
    return importSource;
  }

  if (!ast.body.length) {
    return importSource;
  }

  const pureImports = ast.body.every((stmt) => stmt.type === 'ImportDeclaration');
  if (!pureImports) {
    return stripSingleImportDeclaration(toParse, trimmed, importSource);
  }

  const parts = [];
  for (const stmt of ast.body) {
    if (stmt.type !== 'ImportDeclaration') {
      continue;
    }
    const mod = stmt.source && stmt.source.value;
    if (mod !== 'react') {
      parts.push(toParse.slice(stmt.start, stmt.end));
      continue;
    }
    const filtered = filterReactSpecifiers(stmt);
    if (filtered.length === 0) {
      continue;
    }
    if (filtered.length === stmt.specifiers.length) {
      parts.push(toParse.slice(stmt.start, stmt.end));
      continue;
    }
    const out = importDeclarationToSource(stmt, filtered);
    if (out) {
      parts.push(out.endsWith(';') ? out : `${out};`);
    }
  }

  if (parts.length === 0) {
    return '';
  }

  return parts.join('\n');
}

/** Previous behavior: one import statement per node. */
function stripSingleImportDeclaration(toParse, trimmed, importSource) {
  if (toParse.length === 0) {
    return importSource;
  }
  let ast;
  try {
    ast = parse(toParse);
  } catch {
    return importSource;
  }
  if (ast.body.length !== 1 || ast.body[0].type !== 'ImportDeclaration') {
    return importSource;
  }
  const decl = ast.body[0];
  if (decl.source.value !== 'react') {
    return importSource;
  }
  if (decl.importKind === 'type') {
    return '';
  }
  const filtered = filterReactSpecifiers(decl);
  if (filtered.length === decl.specifiers.length) {
    return importSource;
  }
  const out = importDeclarationToSource(decl, filtered);
  if (!out) {
    return '';
  }
  const hadSemicolon = /;\s*$/.test(trimmed);
  return hadSemicolon ? `${out};` : out;
}

module.exports = {
  stripReactTypeOnlyImports,
  REACT_TYPE_ONLY_EXPORTS,
};
