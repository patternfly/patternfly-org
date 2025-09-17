export function normalizeColor(color) {
  color = color.toUpperCase();
  if (color.startsWith('#')) {
    const hex = color.substr(1);
    return hex.length === 3 ? hex.split('').map(char => char.repeat(2)).join('') : hex;
  }
}

function normalizeLuminance(val) {
  val = parseInt(val, 16) / 255;
  return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
}

function getRelativeLuminance(color) {
  // https://www.w3.org/TR/WCAG21/relative-luminance.xml
  const r = normalizeLuminance(color.substr(0, 2));
  const g = normalizeLuminance(color.substr(2, 2));
  const b = normalizeLuminance(color.substr(4, 2));
  return (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
}

export function getContrastRatio(c1, c2) {
  // https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
  c1 = normalizeColor(c1);
  c2 = normalizeColor(c2);

  const l1 = getRelativeLuminance(c1);
  const l2 = getRelativeLuminance(c2);

  return (l1 + 0.05) / (l2 + 0.05);
}

export function tokenName(cssVar) {
  return cssVar.substr(8).replace(/-+/g, '_');
}
