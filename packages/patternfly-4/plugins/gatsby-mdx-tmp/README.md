Temporarily copied this plugin from node_modules to fix the issue:
https://github.com/ChristopherBiscardi/gatsby-mdx/issues/288

Temp fix by adding this code block to gatsby/on-create-node.js
```
if (node.internal.owner === "gatsby-transformer-react-docgen") {
  return;
}
```