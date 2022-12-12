CREATE DATABASE `api-pol` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `api-pol`.`users` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `role` VARCHAR(45) NULL,
  `occupation` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


  