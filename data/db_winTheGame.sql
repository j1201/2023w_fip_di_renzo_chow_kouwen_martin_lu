-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 14, 2023 at 06:42 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_winTheGame`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_petition`
--

CREATE TABLE `tbl_petition` (
  `id` int(10) UNSIGNED NOT NULL,
  `petitioner` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_petition`
--

INSERT INTO `tbl_petition` (`id`, `petitioner`) VALUES
(1, 'Platon Marie'),
(2, 'Dilara Sonal'),
(3, 'Walherich Capucine '),
(4, 'Yury Marija '),
(5, 'Annelies Sandalio '),
(6, 'Bertrand Gianna '),
(7, 'Hymie Burhan '),
(8, 'Surayya Nastia '),
(9, 'Dmitrei Julia '),
(10, 'Abijah Matrona ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_petition`
--
ALTER TABLE `tbl_petition`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_petition`
--
ALTER TABLE `tbl_petition`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
