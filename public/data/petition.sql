-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 01, 2023 at 02:11 AM
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
-- Database: `petition`
--

-- --------------------------------------------------------

--
-- Table structure for table `petitioners`
--

CREATE TABLE `petitioners` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `petitioners`
--

INSERT INTO `petitioners` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Platon Marie', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(2, 'Dilara Sonal', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(3, 'Walherich Capucine ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(4, 'Yury Marija ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(5, 'Annelies Sandalio ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(6, 'Bertrand Gianna ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(7, 'Hymie Burhan ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(8, 'Surayya Nastia ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(9, 'Dmitrei Julia ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(10, 'Abijah Matrona ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(11, 'Platon Marie', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(12, 'Dilara Sonal', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(13, 'Walherich Capucine ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(14, 'Yury Marija ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(15, 'Annelies Sandalio ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(16, 'Bertrand Gianna ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(17, 'Hymie Burhan ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(18, 'Surayya Nastia ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(19, 'Dmitrei Julia ', '2023-03-31 21:59:18', '2023-03-31 21:59:18'),
(20, 'Abijah Matrona ', '2023-03-31 21:59:18', '2023-03-31 21:59:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `petitioners`
--
ALTER TABLE `petitioners`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `petitioners`
--
ALTER TABLE `petitioners`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
