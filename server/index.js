const express = require("express");
const path = require("path");
const axios = require("axios");
const passport = require('passport');
const cookieSession = require('cookie-session');
const auth = require('./authentication');
const db = require("../database/db.js");
const { allNames } = require("./nameData.js");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.use(
  cookieSession({
    name: 'microphone-session',
    keys: [`${process.env.COOKIE_KEY}`],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.status(200).send("root");
});

app.get('/google', auth.authScope);

app.get('/google/callback', auth.googleAuth, auth.loggedinRedirect);

app.get('/user', auth.authCheck, auth.sendUser);

app.get('/loggedin', auth.authCheck, auth.homeRedirect);

app.get('/logout', auth.logout);

app.get("/name/:name_style", (req, res) => {
  let npcName =
    allNames[req.params.name_style][Math.floor(Math.random() * 1000)];
  if (req.params.name_style === "dragon") {
    npcName = npcName.substring(0, npcName.indexOf(","));
  }
  res.status(200).send(npcName);
});

app.get("/npcs", (req, res) => {
  db.getAllNPCs()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send("err getting NPCs --server");
    });
});

app.post("/npcs", (req, res) => {
  db.addNPC(req.body.name, req.body.race, req.body.demeanor, req.body.quality)
    .then((data) => {
      res.status(201).send("NPC added!");
    })
    .catch((err) => {
      res.status(404).send("err adding NPC --server");
    });
});

app.put("/npcs", (req, res) => {
  db.updateNPC(
    req.body.id,
    req.body.name,
    req.body.race,
    req.body.demeanor,
    req.body.notes,
    req.body.quality
  )
    .then((response) => {
      res.status(201).send("NPC updated");
    })
    .catch((err) => {
      res.status(404).send("err updating NPC --server");
    });
});

app.put("/npcs/delete", (req, res) => {
  db.deleteNPC(req.body.id)
    .then((response) => {
      res.status(200).send("NPC deleted");
    })
    .catch((err) => {
      res.status(404).send("err deleting NPC --server");
    });
});

app.listen(port, () => {
  console.log(`NPC Creator listening on local port ${port}`);
});
