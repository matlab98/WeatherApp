create database sky;
use sky;

CREATE TABLE CIUDAD
(
    id int NOT NULL IDENTITY (1,1) PRIMARY KEY,
  ciudad VARCHAR
    (255) NOT NULL,
latitud VARCHAR
    (255) NOT NULL,
longitud VARCHAR
    (255) NOT NULL
);