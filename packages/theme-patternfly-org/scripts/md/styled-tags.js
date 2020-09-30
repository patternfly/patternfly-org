const visit = require('unist-util-visit');
const { toJSX } = require('./mdx-hast-to-jsx');
const styledMdTags = [
  'p',
  'ul',
  'ul',
  'ul',
  'ol',
  'li',
  'dl',
  'blockquote',
  'small',
  'hr',
  'dt',
  'code',
  'table',
  'img'
];

function styledTags() {
  return tree => {
    visit(tree, 'element', node => {
      if (styledMdTags.includes(node.tagName)) {
        node.properties.className = node.properties.className || '';
        node.properties.className += node.properties.className ? ' ' : '';
        node.properties.className += `ws-${node.tagName}`;
        // Use react-table for tables for responsiveness.
        // <Table cells={[columns]} rows={[rows]}>
        //   <TableHeader />
        //   <TableBody />
        // </Table>
        if (node.tagName === 'table') {
          const thead = node.children.find(thead => thead.tagName === 'thead');
          const theadTr = thead.children.find(tr => tr.tagName === 'tr');
          const colTitles = theadTr.children.filter(th => th.tagName === 'th');
          const tbody = node.children.find(tbody => tbody.tagName === 'tbody');
          const rowsTitles = tbody.children 
            .filter(tr => tr.tagName === 'tr')
            .map(tr => tr.children.filter(td => td.tagName === 'td'));
          
          // Mutate
          node.tagName = 'PatternflyThemeTable';
          // These strings will get injected in mdx-hast-to-jsx
          node.properties.cells = colTitles.map(th => th.children.map(toJSX));
          node.properties.rows = rowsTitles.map(tr => tr.map(td => td.children.map(toJSX)));
          node.children = [
            {
              type: 'element',
              tagName: 'PatternflyThemeTableHeader',
              properties: {},
              children: []
            },
            {
              type: 'element',
              tagName: 'PatternflyThemeTableBody',
              properties: {},
              children: []
            },
          ];
        }
      }
    });
  }
}

module.exports = styledTags;
