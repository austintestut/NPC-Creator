const express = require('express');
const path = require('path');
const axios = require('axios');
const { TOKEN } = require('../config.js');
const db = require('../database/db.js');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('root');
});

app.get('/name/:name_style', (req, res) => {
  // axios request for name
  axios.get(`https://api.fungenerators.com/name/generate?category=${req.params.name_style}&limit=1`,
  {
    headers: {
      "X-FunGenerators-Api-Secret": TOKEN
    }
  })
  .then((data) => {
    let npcName = data.data.contents.names[0]
    if (req.params.name_style === 'dragon') {
      npcName = npcName.substring(0, npcName.indexOf(','));
    }
    res.status(200).send(npcName);
  })
  .catch((err) => {
    console.log(err);
    res.status(404).send('err getting name');
  })
});

app.get('/npcs', (req, res) => {
  db.getAllNPCs()
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(404).send('err getting NPCs --server');
  })
});

app.post('/npcs', (req, res) => {
  db.addNPC(req.body.name, req.body.race, req.body.demeanor, req.body.quality)
  .then((data) => {
    res.status(201).send('NPC added!');
  })
  .catch((err) => {
    console.log(err);
    res.status(404).send('err adding NPC --server');
  })
});

app.put('/npcs', (req, res) => {
  db.updateNPC(req.body.id, req.body.name, req.body.race, req.body.demeanor, req.body.notes, req.body.quality)
  .then((response) => {
    res.status(201).send('NPC updated');
  })
  .catch((err) => {
    console.log(err);
    res.status(404).send('err updating NPC --server');
  })
});

app.put('/npcs/delete', (req, res) => {
  db.deleteNPC(req.body.id)
  .then((response) => {
    res.status(200).send('NPC deleted');
  })
  .catch((err) => {
    console.log(err);
    res.status(404).send('err deleting NPC --server');
  })
});

app.listen(port, () => {
  console.log(`NPC Creator listening on local port ${port}`);
});