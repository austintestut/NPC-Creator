const express = require('express');
const path = require('path');
const axios = require('axios');
const { TOKEN } = require('../config.js');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('root');
});




app.listen(port, () => {
  console.log(`NPC Creator listening on local port ${port}`);
});