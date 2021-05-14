//Exporting Modules
const express = require('express');
const app = express();
const api = require('./routes/api');

//Routes
app.use('/api', api);

//Open HTTP connection
app.listen(3000, () => {
  console.log('HTTP server run successfully!');
});

