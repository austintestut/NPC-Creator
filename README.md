# NPC-Creator
## An NPC generation and storage application for RPG Game Masters
## Summary
NPC-Creator allows the user to generate, save, and update randomized Non-Player Characters. It is perfect for pulling a new persoonality and name out of thin air, then keeping track of the character moving forward.

## Problem
Thinking on the fly is hard. But as an RPG Game Master, this skill is necessary. Coming up with NPCs quickly during a game is essential to the flow, feel, and immersion of the game.

## Solution
NPC-Creator brings the creation of a new fantasy character to the fingertips of everyone, allowing them to be the quick-thinking GM they always dreamed of being. With just a few simple clicks, users can generate, save, and edit custom NPCs quickly, keeping the game immersive and exciting for the players.

## How to Get Started
Navigate to NPC-Creator and click "Add New NPC." Then click the Generate button to generate a new randomized NPC, edit if desired, and click save! Once saved, all NPCs can be viewed and edited by clicking on them.

## How to Get Started (development)
-Create a config.js in the root project folder with module exports of TOKEN, dbUser, dbPass, and dbIP that correspond to a Fun Generators API Key, postgres user, postgres password for that user, and localhost/database IP (respectively).
-Start your postgres server and create the database as outlined in database/schema.sql.
-Run `npm run watch` and `npm start` simultaneously to start the development server at localhost:8080
