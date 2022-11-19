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
INSERT INTO `cpu_instances` VALUES (1,'4 vCPU',4,2),(2,'8 vCPU',8,3),(3,'16 vCPU',16,4),(4,'32 vCPU',32,6),(5,'64 vCPU',64,8),(6,'2 vCPU',2,12);
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
INSERT INTO `duration_hours` VALUES (1,'1 Hour',1),(2,'2 Hours',2),(3,'4 Hours',4),(4,'6 Hours',6),(5,'12 Hours',12),(6,'24 Hours',24),(7,'48 Hours',48),(8,'96 Hours',96);
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `duration_months`
--

LOCK TABLES `duration_months` WRITE;
/*!40000 ALTER TABLE `duration_months` DISABLE KEYS */;
INSERT INTO `duration_months` VALUES (1,'1 Month',1),(2,'2 Months',2),(3,'3 Months',3),(4,'6 Months',6),(5,'12 Months',12),(6,'24 Months',24),(7,'36 Months',36);
/*!40000 ALTER TABLE `duration_months` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instances_users`
--

DROP TABLE IF EXISTS `instances_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instances_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phno` varchar(10) NOT NULL,
  `operatingsystem` varchar(45) NOT NULL,
  `ram` varchar(45) NOT NULL,
  `cpu` varchar(45) NOT NULL,
  `duration` varchar(45) NOT NULL,
  `purchasevalue` int NOT NULL,
  `card` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instances_users`
--

LOCK TABLES `instances_users` WRITE;
/*!40000 ALTER TABLE `instances_users` DISABLE KEYS */;
INSERT INTO `instances_users` VALUES (1,'Swarup S A','swarupsa@gmail.com','9236483276','Windows 11','16 GB','64 vCPU','48 hours',1104,'9483175631849765'),(2,'Sanjana M B','sanjana@gmail.com','9348756139','Mac Sierra','64 GB','4 vCPU','12 hours',312,'1349075613487965'),(3,'Harshit Prakash','harshithp@gmail.com','9348756923','Android','256 GB','32 vCPU','4 hours',112,'4983726523487965'),(4,'Hemanth Reddy N','hemanth2104@gmail.com','9328479238','Kali Linux','32 GB','8 vCPU','6 hours',78,'6578493156893516'),(5,'Amogh Mudakavi','amogham10@gmail.com','9238546723','Mac Mojave','128 GB','16 vCPU','1 hours',28,'1908354190863553'),(6,'Elon Musk','elonmusk@twitter.gb','9487365659','Mac Mojave','16 GB','4 vCPU','12 hours',252,'4985674365348951');
/*!40000 ALTER TABLE `instances_users` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'John Doe','johndoe@gmail.com',0,'The website Design is amazing! and I just love it!!  ; )'),(2,'Hemanth reddy N','hemanth2104@gmail.com',0,'Amazing Services and amazing cloud computing power! Just Loved it!!'),(3,'Hari Om Swarup S A','hariomswarupsa@gmail.com',0,'This is a developer testing the message system! Used React JS, Node JS, Tailwind CSS, MySQL and Express to build this project!'),(4,'Elon Musk','elonmusk@twitter.gb',0,'Hey! Elon Musk here! I love your cloud services, So I\'m going to purchase your services for 1000$! What do you say? ');
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
INSERT INTO `network_speed` VALUES (1,'25 Mbps',25,4),(2,'50 Mbps',50,5),(3,'100 Mbps',100,6),(4,'200 Mbps',200,8),(5,'500 Mbps',500,12);
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
INSERT INTO `operating_system` VALUES (1,'Windows 11','Microsoft',12,'microsoft'),(2,'Windows 10','Microsoft',11,'microsoft'),(3,'Windows 8','Microsoft',8,'microsoft'),(4,'Ubuntu Linux','Linux',6,'linux'),(5,'Kali Linux','Linux',6,'linux'),(6,'Parrot OS','Linux',6,'linux'),(7,'Red Hat','Linux',7,'linux'),(8,'Mac Sierra','Apple',18,'macintosh'),(9,'Mac Mojave','Apple',16,'macintosh'),(10,'Android','Google',10,'android');
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
INSERT INTO `ram_instances` VALUES (1,'8 GB',8,2),(2,'16 GB',16,3),(3,'32 GB',32,4),(4,'64 GB',64,6),(5,'128 GB',128,8),(6,'256 GB',256,12);
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
INSERT INTO `storage_instances` VALUES (1,'100 GB',100,5),(2,'250 GB',250,8),(3,'500 GB',500,10),(4,'1 TB',1000,14),(5,'2 TB',2000,18),(6,'5 TB',5000,20),(7,'10 TB',10000,36);
/*!40000 ALTER TABLE `storage_instances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storage_users`
--

DROP TABLE IF EXISTS `storage_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storage_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phno` varchar(10) NOT NULL,
  `storage` varchar(45) NOT NULL,
  `network` varchar(45) NOT NULL,
  `duration` varchar(45) NOT NULL,
  `purchasevalue` int NOT NULL,
  `card` varchar(16) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storage_users`
--

LOCK TABLES `storage_users` WRITE;
/*!40000 ALTER TABLE `storage_users` DISABLE KEYS */;
INSERT INTO `storage_users` VALUES (1,'Moksha Mridini','moksha@gmail.com','9235419132','500 GB','500 Mbps','2 months',44,'2352935892367592'),(2,'Siri','siri@apple.in','9842598234','5 TB','100 Mbps','12 months',312,'7747937462946235'),(3,'Bixby','bixby@amazon.com','9438567394','100 GB','25 Mbps','1 months',9,'1395641657529568'),(4,'Swarup S A','swarupsa@gmail.com','9236483276','1 TB','100 Mbps','36 months',720,'9382492386753245'),(5,'Sanjana M','sanjana@gmail.com','9348756139','2 TB','50 Mbps','3 months',69,'6873492468296423');
/*!40000 ALTER TABLE `storage_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-19 19:41:02
