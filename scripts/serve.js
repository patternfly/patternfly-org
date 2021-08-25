const express = require('express');

const app = express();
const port = 5000;

const serveDir = process.argv[2];
app.use(express.static(serveDir));

app.listen(port, () => console.log(`Serving ${serveDir} at http://localhost:${port}`));
