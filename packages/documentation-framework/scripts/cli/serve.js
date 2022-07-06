const express = require('express');

function serve(serveDir, { port }) {
  const app = express();

  app.use(express.static(serveDir));

  app.listen(port, () => console.log(`Serving ${serveDir} at http://localhost:${port}`));
}

module.exports = {
  serve
};
