const postgres = require('postgres');
require('dotenv').config();

const sql = postgres({
  host: process.env.DB_IP,
  port: 5432,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: { rejectUnauthorized: false }
});

const getAllNPCs = async () => {
  return await sql`SELECT * FROM npcs`;
};

const addNPC = async (name, race, demeanor, quality) => {
  return await sql`INSERT INTO npcs (name, race, demeanor, notes, quality) VALUES (${name}, ${race}, ${demeanor}, '', ${quality})`;
};

const updateNPC = async (id, name, race, demeanor, notes, quality) => {
  return await sql`UPDATE npcs SET name=${name}, race=${race}, demeanor=${demeanor}, notes=${notes}, quality=${quality} WHERE id=${id}`;
};

const deleteNPC = async (id) => {
  return await sql`DELETE FROM npcs WHERE id=${id}`;
};

const addUser = async (id, name) => {
  return await sql`INSERT INTO users (google_id, user_name) VALUES (${id}, ${name})`;
}

module.exports = {
  getAllNPCs: getAllNPCs,
  addNPC: addNPC,
  updateNPC: updateNPC,
  deleteNPC: deleteNPC
}