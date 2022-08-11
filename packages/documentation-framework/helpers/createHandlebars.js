const Handlebars = require('handlebars');

const createHandlebars = nodes => {
  const instance = Handlebars.create();

  // Add helpers
  instance.registerHelper('concat', (...params) => {
    // Ignore the object appended by handlebars.
    if (typeof params[params.length - 1] === 'object') {
      params.pop();
    }
    return params.join('');
  });

  // Add partials
  nodes.forEach(({ fields }) => instance.registerPartial(
    fields.name, // Partial name
    fields.partial // Partial template
  ));

  return instance;
}

module.exports = {
  createHandlebars
}
