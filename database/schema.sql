\c postgres;

DROP DATABASE IF EXISTS npcs;

CREATE DATABASE npcs;

\c npcs;

CREATE TABLE allNPCs (
  id SERIAL PRIMARY KEY,
  owner_id INT,
  name VARCHAR(50),
  race VARCHAR(50),
  demeanor VARCHAR(50),
  quality VARCHAR,
  notes VARCHAR
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(75)
);

CREATE TABLE users_npcs (
  id SERIAL,
  user_id INT REFERENCES users,
  npc_id INT REFERENCES allNPCs
);

-- Must be postgres user with SUPERUSER privileges (try: $ su postgres):
-- psql -d postgres < database/schema.sql
