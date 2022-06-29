const visit = require('unist-util-visit');

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
        // Match pf-c-table implementation
        // https://pf4.patternfly.org/components/table/html/basic-table/
        if (node.tagName === 'table') {
          node.properties.className += ' pf-c-table pf-m-grid-lg pf-m-compact';
          node.properties.role = 'grid';
          let columnHeaders = [];
          for (let child of node.children) {
            if (child.tagName === 'thead') {
              // Find column headers
              const tr = child.children.find(child => child.tagName === 'tr');
              tr.properties.role = 'row';
              tr.children
                .filter(child => child.tagName === 'th')
                .forEach(th => {
                  th.properties.className = th.properties.className || '';
                  th.properties.className += ' pf-m-wrap';
                  th.properties.role = 'columnheader';
                  th.properties.scope = 'col';
                  let colName = '';
                  visit(th, 'text', node2 => colName += node2.value);
                  columnHeaders.push(colName);
                  // Need to wrap in div for css-grid stuffs
                  th.children = [{
                    type: 'element',
                    tagName: 'div',
                    properties: {},
                    children: th.children
                  }];
                });
            }
            else if (child.tagName === 'tbody') {
              child.properties.role = 'rowgroup';
              child.children
                .filter(tr => tr.tagName === 'tr')
                .forEach(tr => {
                  tr.properties.role = 'row';
                  tr.children
                    .filter(td => td.tagName === 'td')
                    .forEach((td, i) => {
                      td.properties.role = 'cell';
                      if (columnHeaders[i]) {
                        td.properties['data-label'] = columnHeaders[i];
                      }
                      // Need to wrap in div for css-grid stuffs
                      td.children = [{
                        type: 'element',
                        tagName: 'div',
                        properties: {},
                        children: td.children
                      }];
                    });
                });
            }
          }
        }
      }
    });
  }
}

module.exports = styledTags;
