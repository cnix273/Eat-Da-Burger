CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);