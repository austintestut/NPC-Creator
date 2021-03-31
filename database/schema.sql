 \c postgres;

 DROP DATABASE IF EXISTS npcs;

CREATE DATABASE npcs;

\c npcs;

CREATE TABLE allNPCs (
  id SERIAL,
  name VARCHAR(50),
  race VARCHAR(50),
  demeanor VARCHAR(50)
);

-- Must be postgres user with SUPERUSER privileges (try: $ su postgres):
-- psql -d postgres < database/schema.sql
