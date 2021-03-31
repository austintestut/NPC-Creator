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

const updateNPC = async (id, name, race, demeanor) => {
  return await sql`UPDATE allNPCs SET name=${name}, race=${race}, demeanor=${demeanor} WHERE id=${id}`;
};

const deleteNPC = async (id) => {
  console.log('hello from db')
  return await sql`DELETE FROM allNPCs WHERE id=${id}`;
};

module.exports = {
  getAllNPCs: getAllNPCs,
  addNPC: addNPC,
  updateNPC: updateNPC,
  deleteNPC: deleteNPC
}