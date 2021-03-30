DROP DATABASE IF EXISTS npcs;

CREATE DATABASE npcs;

\c npcs;

CREATE TABLE allNPCs (
  id SERIAL,
  name VARCHAR(50),
  race VARCHAR(50),
  demeanor VARCHAR(50)
);