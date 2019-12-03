const nextConfig = require('./patternfly-next/gatsby-node');
// Add types that are present in React in case we aren't building the React section
exports.createSchemaCustomization = params => {
  nextConfig.createSchemaCustomization(params);
}
