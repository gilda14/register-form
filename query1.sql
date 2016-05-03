CREATE DATABASE db_Student
USE db_info;
CREATE TABLE IF NOT EXISTS users (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(30) NOT NULL,
    LastName  VARCHAR(50) NOT NULL,
    Age        int(10) NOT NULL,
    Email      VARCHAR(100) NOT NULL,
    Country_Id  VARCHAR(50) NOT NULL,
    Phone  int(10) NOT NULL,
    Date  date NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1;