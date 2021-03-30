const postgres = require('postgres');
const { dbUser, dbPass, dbIP } = require('../config.js');

const sql = postgres({
  host: dbIP,
  port: 5432,
  database: 'npcs',
  username: dbUser,
  password: dbPass
});

const getAllNPCs = async () => {
  return await sql`SELECT * FROM allNPCs`;
};

const addNPC = async (name, race, demeanor) => {
  return await sql`INSERT INTO allNPCs (name, race, demeanor) VALUES (${name}, ${race}, ${demeanor})`;
};

module.exports = {
  getAllNPCs: getAllNPCs,
  addNPC: addNPC
}