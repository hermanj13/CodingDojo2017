CREATE DATABASE  IF NOT EXISTS `the_wall` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `the_wall`;
-- MySQL dump 10.13  Distrib 5.7.12, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: the_wall
-- ------------------------------------------------------
-- Server version	5.6.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `messages_id` int(11) NOT NULL,
  `comment` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comment_users1_idx` (`users_id`),
  KEY `fk_comment_messages1_idx` (`messages_id`),
  CONSTRAINT `fk_comment_messages1` FOREIGN KEY (`messages_id`) REFERENCES `messages` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_comment_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,2,1,'Batman is the hero gotham deserves.','2017-02-13 21:57:38','2017-02-13 21:57:38'),(2,3,1,'I\'M BATMAN!','2017-02-13 21:58:21','2017-02-13 21:58:21'),(3,4,1,'While batmans great and all I single handedly privatized world peace.','2017-02-13 21:58:58','2017-02-13 21:58:58'),(4,5,1,'Have y\'all heard about Spiderman? He\'s pretty cool!','2017-02-13 21:59:26','2017-02-13 21:59:26'),(5,6,1,'Wait! Parker! Aren\'t you spidey!','2017-02-13 22:00:01','2017-02-13 22:00:01'),(6,5,2,'I have a feeling he might not want to go with you... just a hunch!','2017-02-13 22:03:02','2017-02-13 22:03:02'),(7,6,2,'Why do you hate me spidey!','2017-02-13 22:03:20','2017-02-13 22:03:20'),(8,5,2,'STOP TELLING PEOPLE MY SECRET!','2017-02-13 22:03:35','2017-02-13 22:03:35'),(9,5,1,'DEADPOOL! SECRET!','2017-02-13 22:03:50','2017-02-13 22:03:50'),(10,3,3,'Exactly. I\'m Batman','2017-02-13 22:04:37','2017-02-13 22:04:37'),(11,3,2,'Not a good one...','2017-02-13 22:06:29','2017-02-13 22:06:29'),(12,4,3,'Bruce... are you really trying to fool us by posting from two accounts?','2017-02-13 22:07:03','2017-02-13 22:07:03'),(13,1,3,'WHERE DID ALL THESE SUPERHEROS COME FROM ON MY WALL!','2017-02-13 22:09:56','2017-02-13 22:09:56'),(14,1,2,'WHERE DID ALL THESE SUPERHEROS COME FROM ON MY WALL!','2017-02-13 22:10:00','2017-02-13 22:10:00'),(15,1,1,'WHERE DID ALL THESE SUPERHEROS COME FROM ON MY WALL!','2017-02-13 22:10:03','2017-02-13 22:10:03');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `message` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_messages_users_idx` (`users_id`),
  CONSTRAINT `fk_messages_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,1,'So who\'s the best super hero???','2017-02-13 21:57:00','2017-02-13 21:57:00'),(2,6,'How do you guys think I should ask spidey to prom?','2017-02-13 22:02:38','2017-02-13 22:02:38'),(3,2,'Why do people think i\'m batman? I\'m clearly not!','2017-02-13 22:04:20','2017-02-13 22:04:20'),(4,1,'WHERE DID ALL THESE SUPERHEROS COME FROM ON MY WALL!','2017-02-13 22:10:04','2017-02-13 22:10:04');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pw_hash` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jake','Herman','hermanj13@me.com','$2b$12$dvjhetpi9NoNv3N7Ehd9BeT3TanOPI0ZcMyfVW0XN0JIyZs0TB586','2017-02-13 21:50:52','2017-02-13 21:50:52'),(2,'Bruce','Wayne','notbatman@gotham.com','$2b$12$wW4EtYodx.qORnU0.V/DsuQGnoU8B6ale6jRNbXspscv0ncFn2aw.','2017-02-13 21:52:58','2017-02-13 21:52:58'),(3,'IM','BATMAN','batman@gotham.com','$2b$12$PkeHqyd9NyaQcQl.SNXXc.0.Uvh0vHm.3q1WAhwUDCeScR/jAndyu','2017-02-13 21:53:26','2017-02-13 21:53:26'),(4,'Tony','Stark','tony@stark.com','$2b$12$ozK0.d.Qv7kjGsn0Lfb..uzqd6eIK3SskXGwbzO6zLcnV0XmI8Vea','2017-02-13 21:54:08','2017-02-13 21:54:08'),(5,'Peter','Parker','spidey@gmail.com','$2b$12$2MLYCS9OUL61wjgccw1weuG10tBzrxMUM9L7fg8HU2wgOjqfllCii','2017-02-13 21:55:24','2017-02-13 21:55:24'),(6,'Wade','Wilson','deadpool@suckit.com','$2b$12$pwsSZe1Pck2wSD71ALyw3eFOPGqWgOuCcf2FVMCbDafQUWuRBmyRu','2017-02-13 21:56:34','2017-02-13 21:56:34');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-13 22:13:19
