module.exports = {
  plugins: [
    // Convienently change <head> based on JS
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        // name is used in the app install prompt
        name: 'PatternFly 4',
        // short_name is used on the user's home screen, launcher, or other places where space may be limited
        short_name: 'PatternFly 4',
        // The background_color property is used on the splash screen when the application is first launched
        background_color: '#151515',
        // The theme_color sets the color of the tool bar, and may be reflected in the app's preview in task switchers.
        theme_color: '#151515',
        // Opens the web app to look and feel like a standalone native app
        display: 'standalone',
        // icon used for splash screen, on home screen
        icon: require.resolve('gatsby-theme-patternfly-org/images/patternfly-logo.svg')
      },
    },
  ]
}
