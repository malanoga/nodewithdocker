'use strict';

const express = require('express');
const path = require('path');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/hello/', (req, res) => {
    res.send('Hello World');
  });
  app.get('/hello', (req, res) => {
    res.send('Hello World');
  });
  app.get('/mojhtml/', (req, res) => {
    res.sendFile(path.join(__dirname+'/mojhtml.html'));
  });
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);