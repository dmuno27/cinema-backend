-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cinema_db
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_programming_id` int NOT NULL,
  `room_seat_id` int NOT NULL,
  `customer_name` varchar(45) NOT NULL,
  `customer_email` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_booking_movie_programming1_idx` (`movie_programming_id`),
  KEY `fk_booking_room_seat1_idx` (`room_seat_id`),
  CONSTRAINT `fk_booking_movie_programming1` FOREIGN KEY (`movie_programming_id`) REFERENCES `movie_programming` (`id`),
  CONSTRAINT `fk_booking_room_seat1` FOREIGN KEY (`room_seat_id`) REFERENCES `room_seat` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,7,5,'MIGUEL FELIPE','FELIPEGARXON@HOTMAIL.COM','2025-02-23 22:14:21','ACTIVO');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `movie_rating_id` int NOT NULL,
  `time` time NOT NULL,
  `movie_genre_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_movie_clasification_idx` (`movie_rating_id`),
  KEY `fk_movie_movie_genre1_idx` (`movie_genre_id`),
  CONSTRAINT `fk_movie_clasification` FOREIGN KEY (`movie_rating_id`) REFERENCES `movie_rating` (`id`),
  CONSTRAINT `fk_movie_movie_genre1` FOREIGN KEY (`movie_genre_id`) REFERENCES `movie_genre` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,'Captain America: Brave New World',1,'02:00:00',1,'2025-02-23 20:19:25','2025-02-23 20:19:25','ACTIVO');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_genre`
--

DROP TABLE IF EXISTS `movie_genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_genre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_genre`
--

LOCK TABLES `movie_genre` WRITE;
/*!40000 ALTER TABLE `movie_genre` DISABLE KEYS */;
INSERT INTO `movie_genre` VALUES (1,'ACCIÓN'),(2,'AVENTURA'),(3,'COMEDIA'),(4,'DRAMA'),(5,'FANTASÍA'),(6,'TERROR'),(7,'ROMANCE'),(8,'CIENCIA FICCIÓN');
/*!40000 ALTER TABLE `movie_genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_programming`
--

DROP TABLE IF EXISTS `movie_programming`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_programming` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_id` int NOT NULL,
  `movie_id` int NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `created_at` datetime NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_movie_programming_room1_idx` (`room_id`),
  KEY `fk_movie_programming_movie1_idx` (`movie_id`),
  CONSTRAINT `fk_movie_programming_movie1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`),
  CONSTRAINT `fk_movie_programming_room1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_programming`
--

LOCK TABLES `movie_programming` WRITE;
/*!40000 ALTER TABLE `movie_programming` DISABLE KEYS */;
INSERT INTO `movie_programming` VALUES (7,2,1,'2025-02-23','13:00:00','2025-02-23 22:08:33','ACTIVO'),(8,2,1,'2025-02-23','15:00:00','2025-02-23 22:08:33','ACTIVO'),(9,2,1,'2025-02-24','18:00:00','2025-02-23 22:08:33','ACTIVO'),(10,2,1,'2025-02-23','18:00:00','2025-02-23 22:08:33','ACTIVO'),(11,2,1,'2025-02-24','13:00:00','2025-02-23 22:08:33','ACTIVO'),(12,2,1,'2025-02-24','15:00:00','2025-02-23 22:08:33','ACTIVO'),(13,2,1,'2025-02-25','13:00:00','2025-02-23 22:08:33','ACTIVO'),(14,2,1,'2025-02-25','15:00:00','2025-02-23 22:08:33','ACTIVO'),(15,2,1,'2025-02-25','18:00:00','2025-02-23 22:08:33','ACTIVO');
/*!40000 ALTER TABLE `movie_programming` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_rating`
--

DROP TABLE IF EXISTS `movie_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_rating` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rating_type_id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_movie_rating_rating_type1_idx` (`rating_type_id`),
  CONSTRAINT `fk_movie_rating_rating_type1` FOREIGN KEY (`rating_type_id`) REFERENCES `rating_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_rating`
--

LOCK TABLES `movie_rating` WRITE;
/*!40000 ALTER TABLE `movie_rating` DISABLE KEYS */;
INSERT INTO `movie_rating` VALUES (1,1,'G','Para todos los públicos'),(2,1,'PG','Se sugiere supervisión de los padres'),(3,1,'PG-13','Se sugiere supervisión de los padres para menores de 13 años'),(4,1,'R','Restringida, los menores de 17 años deben ir acompañados de un adulto'),(5,1,'X','No se admiten menores de 17 años'),(6,1,'NC-17','Para mayores de 18 años'),(7,2,'SU','Para todos los públicos'),(8,2,'A','Contenido para adolescentes y niños'),(9,2,'BO','Con supervisión de los padres'),(10,2,'17','Para mayores de 17 años'),(11,2,'D','Contenido para adultos'),(12,2,'21','Para mayores de 21 años');
/*!40000 ALTER TABLE `movie_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating_type`
--

DROP TABLE IF EXISTS `rating_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating_type`
--

LOCK TABLES `rating_type` WRITE;
/*!40000 ALTER TABLE `rating_type` DISABLE KEYS */;
INSERT INTO `rating_type` VALUES (1,'AGE'),(2,'CONTENT');
/*!40000 ALTER TABLE `rating_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `capacity` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (2,'SALA A',50,'2025-02-23 21:08:29','2025-02-23 21:08:29','ACTIVO');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_seat`
--

DROP TABLE IF EXISTS `room_seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_seat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_id` int NOT NULL,
  `row` char(1) NOT NULL,
  `seat` int NOT NULL,
  `created_at` datetime NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_room_seat_room1_idx` (`room_id`),
  CONSTRAINT `fk_room_seat_room1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_seat`
--

LOCK TABLES `room_seat` WRITE;
/*!40000 ALTER TABLE `room_seat` DISABLE KEYS */;
INSERT INTO `room_seat` VALUES (1,2,'A',1,'2025-02-23 21:08:29','ACTIVO'),(2,2,'A',2,'2025-02-23 21:08:29','ACTIVO'),(3,2,'A',3,'2025-02-23 21:08:29','ACTIVO'),(4,2,'A',4,'2025-02-23 21:08:29','ACTIVO'),(5,2,'A',5,'2025-02-23 21:08:29','ACTIVO'),(6,2,'A',6,'2025-02-23 21:08:29','ACTIVO'),(7,2,'A',7,'2025-02-23 21:08:29','ACTIVO'),(8,2,'A',8,'2025-02-23 21:08:29','ACTIVO'),(9,2,'B',1,'2025-02-23 21:08:29','ACTIVO'),(10,2,'B',2,'2025-02-23 21:08:29','ACTIVO'),(11,2,'B',3,'2025-02-23 21:08:29','ACTIVO'),(12,2,'B',4,'2025-02-23 21:08:29','ACTIVO'),(13,2,'B',5,'2025-02-23 21:08:29','ACTIVO'),(14,2,'B',6,'2025-02-23 21:08:29','ACTIVO'),(15,2,'B',7,'2025-02-23 21:08:29','ACTIVO'),(16,2,'B',8,'2025-02-23 21:08:29','ACTIVO'),(17,2,'B',9,'2025-02-23 21:08:29','ACTIVO'),(18,2,'B',10,'2025-02-23 21:08:29','ACTIVO'),(19,2,'B',11,'2025-02-23 21:08:29','ACTIVO'),(20,2,'C',1,'2025-02-23 21:08:29','ACTIVO'),(21,2,'C',2,'2025-02-23 21:08:29','ACTIVO'),(22,2,'C',3,'2025-02-23 21:08:29','ACTIVO'),(23,2,'C',4,'2025-02-23 21:08:29','ACTIVO'),(24,2,'C',5,'2025-02-23 21:08:29','ACTIVO'),(25,2,'C',6,'2025-02-23 21:08:29','ACTIVO'),(26,2,'C',7,'2025-02-23 21:08:29','ACTIVO'),(27,2,'C',8,'2025-02-23 21:08:29','ACTIVO'),(28,2,'C',9,'2025-02-23 21:08:29','ACTIVO'),(29,2,'C',10,'2025-02-23 21:08:29','ACTIVO'),(30,2,'C',11,'2025-02-23 21:08:29','ACTIVO'),(31,2,'C',12,'2025-02-23 21:08:29','ACTIVO'),(32,2,'C',13,'2025-02-23 21:08:29','ACTIVO'),(33,2,'C',14,'2025-02-23 21:08:29','ACTIVO');
/*!40000 ALTER TABLE `room_seat` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-23 17:53:48
