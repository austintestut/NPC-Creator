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

const getAllNPCs = async (id) => {
  return await sql`SELECT * FROM npcs WHERE owner_id=${id}`;
};

const addNPC = async (name, ownerID, race, demeanor, quality) => {
  return await sql`INSERT INTO npcs (name, owner_id, race, demeanor, notes, quality) VALUES (${name}, ${ownerID}, ${race}, ${demeanor}, '', ${quality})`;
};

const updateNPC = async (id, name, race, demeanor, notes, quality) => {
  return await sql`UPDATE npcs SET name=${name}, race=${race}, demeanor=${demeanor}, notes=${notes}, quality=${quality} WHERE id=${id}`;
};

const deleteNPC = async (id) => {
  return await sql`DELETE FROM npcs WHERE id=${id}`;
};

const addUser = async (id, name) => {
  return await sql`INSERT INTO users (google_id, user_name) VALUES (${id}, ${name}) RETURNING id`;
};

const findUser = async (id) => {
  if (typeof id === 'number') {
    return await sql`SELECT * FROM users WHERE id=${id}`
  } else {
    return await sql`SELECT * FROM users WHERE google_id=${id}`;
  }
};

module.exports = {
  getAllNPCs,
  addNPC,
  updateNPC,
  deleteNPC,
  addUser,
  findUser,
}