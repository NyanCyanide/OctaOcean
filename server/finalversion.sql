-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: cloud_inventory
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `cpu_instances`
--

DROP TABLE IF EXISTS `cpu_instances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cpu_instances` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cpu` varchar(10) NOT NULL,
  `value` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpu_UNIQUE` (`cpu`),
  UNIQUE KEY `value_UNIQUE` (`value`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cpu_instances`
--

LOCK TABLES `cpu_instances` WRITE;
/*!40000 ALTER TABLE `cpu_instances` DISABLE KEYS */;
INSERT INTO `cpu_instances` VALUES (1,'4 vCPU',4,2),(2,'8 vCPU',8,2),(3,'16 vCPU',16,2),(4,'32 vCPU',32,2),(5,'64 vCPU',64,2),(6,'2 vCPU',2,2);
/*!40000 ALTER TABLE `cpu_instances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `duration_hours`
--

DROP TABLE IF EXISTS `duration_hours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `duration_hours` (
  `id` int NOT NULL,
  `hours` varchar(10) NOT NULL,
  `value` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`hours`),
  UNIQUE KEY `value_UNIQUE` (`value`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `duration_hours`
--

LOCK TABLES `duration_hours` WRITE;
/*!40000 ALTER TABLE `duration_hours` DISABLE KEYS */;
INSERT INTO `duration_hours` VALUES (1,'1 Hour',1),(2,'2 Hours',2),(3,'4 Hours',4),(4,'6 Hours',6),(5,'12 Hours',12),(6,'24 Hours',24);
/*!40000 ALTER TABLE `duration_hours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `duration_months`
--

DROP TABLE IF EXISTS `duration_months`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `duration_months` (
  `id` int NOT NULL AUTO_INCREMENT,
  `months` varchar(15) NOT NULL,
  `value` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `months_UNIQUE` (`months`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `duration_months`
--

LOCK TABLES `duration_months` WRITE;
/*!40000 ALTER TABLE `duration_months` DISABLE KEYS */;
INSERT INTO `duration_months` VALUES (1,'1 Month',1),(2,'2 Months',2),(3,'3 Months',3),(4,'6 Months',6),(5,'12 Months',12);
/*!40000 ALTER TABLE `duration_months` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `acknowledge` tinyint(1) unsigned zerofill NOT NULL,
  `message` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (15,'Hari Om Swarup S A','hariomswarupsa@gmail.com',0,'Nothingistrue'),(16,'Harshit Prakash','harshitsike@googleceo.com',0,'Wonderful website'),(17,'Hemanth Reddy','google@gojosaturo.itadori',0,'This is a awesome website');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `network_speed`
--

DROP TABLE IF EXISTS `network_speed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `network_speed` (
  `id` int NOT NULL AUTO_INCREMENT,
  `speed` varchar(15) NOT NULL,
  `value` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `speed_UNIQUE` (`speed`),
  UNIQUE KEY `value_UNIQUE` (`value`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `network_speed`
--

LOCK TABLES `network_speed` WRITE;
/*!40000 ALTER TABLE `network_speed` DISABLE KEYS */;
INSERT INTO `network_speed` VALUES (1,'25 Mbps',25,2),(2,'50 Mbps',50,3),(3,'100 Mbps',100,4),(4,'200 Mbps',200,5),(5,'500 Mbps',500,6);
/*!40000 ALTER TABLE `network_speed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operating_system`
--

DROP TABLE IF EXISTS `operating_system`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operating_system` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `developer` varchar(20) NOT NULL,
  `price` int NOT NULL,
  `image` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operating_system`
--

LOCK TABLES `operating_system` WRITE;
/*!40000 ALTER TABLE `operating_system` DISABLE KEYS */;
INSERT INTO `operating_system` VALUES (1,'Windows 11','Microsoft',100,'microsoft'),(2,'Windows 10','Microsoft',100,'microsoft'),(3,'Windows 8','Microsoft',100,'microsoft'),(4,'Ubuntu Linux','Linux',100,'linux'),(5,'Kali Linux','Linux',100,'linux'),(6,'Parrot OS','Linux',100,'linux'),(7,'Red Hat','Linux',100,'linux'),(8,'Mac Sierra','Apple',100,'macintosh'),(9,'Mac Mojave','Apple',100,'macintosh'),(10,'Android','Google',100,'android');
/*!40000 ALTER TABLE `operating_system` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ram_instances`
--

DROP TABLE IF EXISTS `ram_instances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ram_instances` (
  `id` int NOT NULL,
  `name` varchar(10) NOT NULL,
  `value` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `value_UNIQUE` (`value`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ram_instances`
--

LOCK TABLES `ram_instances` WRITE;
/*!40000 ALTER TABLE `ram_instances` DISABLE KEYS */;
INSERT INTO `ram_instances` VALUES (1,'8 GB',8,2),(2,'16 GB',16,2),(3,'32 GB',32,2),(4,'64 GB',64,2),(5,'128 GB',128,2),(6,'256 GB',256,2);
/*!40000 ALTER TABLE `ram_instances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storage_instances`
--

DROP TABLE IF EXISTS `storage_instances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storage_instances` (
  `id` int NOT NULL AUTO_INCREMENT,
  `space` varchar(10) NOT NULL,
  `value` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `value_UNIQUE` (`value`),
  UNIQUE KEY `space_UNIQUE` (`space`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storage_instances`
--

LOCK TABLES `storage_instances` WRITE;
/*!40000 ALTER TABLE `storage_instances` DISABLE KEYS */;
INSERT INTO `storage_instances` VALUES (1,'100 GB',100,2),(2,'250 GB',250,2),(3,'500 GB',500,3),(4,'1 TB',1000,4),(5,'2 TB',2000,5),(6,'5 TB',5000,6),(7,'10 TB',10000,7);
/*!40000 ALTER TABLE `storage_instances` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-24 10:31:17
