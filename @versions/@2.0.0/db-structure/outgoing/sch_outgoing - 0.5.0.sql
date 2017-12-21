-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 15, 2017 at 01:34 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `khi_admin`
--

-- --------------------------------------------------------

--
-- Table structure for table `sch_outgoing`
--

CREATE TABLE `sch_outgoing` (
  `id` int(11) NOT NULL,
  `sDate` timestamp NULL DEFAULT NULL,
  `pin` int(4) NOT NULL,
  `mDate1` timestamp NULL DEFAULT NULL,
  `talkNum1` int(11) DEFAULT NULL,
  `talk1` varchar(100) NOT NULL,
  `brother1` varchar(100) NOT NULL,
  `congregation1` varchar(100) NOT NULL,
  `time1` timestamp NULL DEFAULT NULL,
  `mDate2` timestamp NULL DEFAULT NULL,
  `talkNum2` int(11) NOT NULL,
  `talk2` varchar(100) NOT NULL,
  `brother2` varchar(100) NOT NULL,
  `congregation2` varchar(100) NOT NULL,
  `time2` timestamp NULL DEFAULT NULL,
  `mDate3` timestamp NULL DEFAULT NULL,
  `talkNum3` int(11) NOT NULL,
  `talk3` varchar(100) NOT NULL,
  `brother3` varchar(100) NOT NULL,
  `congregation3` varchar(100) NOT NULL,
  `time3` timestamp NULL DEFAULT NULL,
  `mDate4` timestamp NULL DEFAULT NULL,
  `talkNum4` int(11) NOT NULL,
  `talk4` varchar(100) NOT NULL,
  `brother4` varchar(100) NOT NULL,
  `congregation4` varchar(100) NOT NULL,
  `time4` timestamp NULL DEFAULT NULL,
  `mDate5` timestamp NULL DEFAULT NULL,
  `talkNum5` int(11) NOT NULL,
  `talk5` varchar(100) NOT NULL,
  `brother5` varchar(100) NOT NULL,
  `congregation5` varchar(100) NOT NULL,
  `time5` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sch_outgoing`
--
ALTER TABLE `sch_outgoing`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pin` (`pin`),
  ADD KEY `brother1` (`brother1`),
  ADD KEY `brother2` (`brother2`),
  ADD KEY `brother3` (`brother3`),
  ADD KEY `brother4` (`brother4`),
  ADD KEY `brother5` (`brother5`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sch_outgoing`
--
ALTER TABLE `sch_outgoing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `sch_outgoing`
--
ALTER TABLE `sch_outgoing`
  ADD CONSTRAINT `sch_outgoing_ibfk_1` FOREIGN KEY (`brother1`) REFERENCES `sub_users` (`full_name`) ON UPDATE CASCADE,
  ADD CONSTRAINT `sch_outgoing_ibfk_2` FOREIGN KEY (`brother2`) REFERENCES `sub_users` (`full_name`) ON UPDATE CASCADE,
  ADD CONSTRAINT `sch_outgoing_ibfk_3` FOREIGN KEY (`brother3`) REFERENCES `sub_users` (`full_name`) ON UPDATE CASCADE,
  ADD CONSTRAINT `sch_outgoing_ibfk_4` FOREIGN KEY (`pin`) REFERENCES `users` (`pin`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sch_outgoing_ibfk_5` FOREIGN KEY (`brother4`) REFERENCES `sub_users` (`full_name`) ON UPDATE CASCADE,
  ADD CONSTRAINT `sch_outgoing_ibfk_6` FOREIGN KEY (`brother5`) REFERENCES `sub_users` (`full_name`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
