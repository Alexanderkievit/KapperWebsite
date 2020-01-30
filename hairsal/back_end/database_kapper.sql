DROP DATABASE kappersapp;
DROP USER 'Alexander'@'localhost';

CREATE DATABASE kappersapp;

USE kappersapp;

CREATE USER 'Alexander'@'localhost' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON * . * TO 'Alexander'@'localhost';

CREATE TABLE afspraak (
	id_afspraak INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	keuze_behandeling VARCHAR(50) NOT NULL,
	keuze_kapper VARCHAR(50) NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	telefoonnummer INTEGER NOT NULL,
	datum_tijd DATETIME NOT NULL
);