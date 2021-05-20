\c postgres;

DROP DATABASE IF EXISTS npc_creator;

CREATE DATABASE npc_creator;

\c npc_creator;

CREATE TABLE npcs (
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
  google_id VARCHAR(50) UNIQUE,
  user_name VARCHAR(75)
);

-- Must be postgres user with SUPERUSER privileges (try: $ su postgres):
-- psql -d postgres < database/schema.sql
