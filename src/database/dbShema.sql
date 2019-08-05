CREATE SCHEMA `fit_journal`;

USE `fit_journal`;

CREATE TABLE user_type (
	id INT NOT NULL PRIMARY KEY,
    rol VARCHAR(10) NOT NULL
);

CREATE TABLE user_profile (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
	first_name VARCHAR(100),
    rol INT,
    sex TINYINT,
    user_status TINYINT,
    FOREIGN KEY (rol) REFERENCES user_type(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE records (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    weight DECIMAL NOT NULL,
    exercice VARCHAR(200),
	created_on DATETIME NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES user_profile(id) ON DELETE CASCADE ON UPDATE CASCADE
);