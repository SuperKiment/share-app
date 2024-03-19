-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 05 mars 2024 à 16:47
-- Version du serveur : 10.3.31-MariaDB-0+deb10u1
-- Version de PHP : 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `dbshare`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id` int(11) NOT NULL,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id`, `libelle`) VALUES
(1, 'Librairie'),
(2, 'Gestions de projet'),
(3, 'Python'),
(4, 'Marketing');

-- --------------------------------------------------------

--
-- Structure de la table `categorie_fichier`
--

CREATE TABLE `categorie_fichier` (
  `categorie_id` int(11) NOT NULL,
  `fichier_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categorie_fichier`
--

INSERT INTO `categorie_fichier` (`categorie_id`, `fichier_id`) VALUES
(1, 1),
(1, 3),
(1, 9),
(1, 11),
(2, 1),
(2, 9),
(2, 10),
(3, 9),
(4, 2),
(4, 9);

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sujet` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_envoi` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id`, `nom`, `sujet`, `email`, `message`, `date_envoi`) VALUES
(1, 'BOUDRY', 'ed', 'ss.qqq@gmail.com', 'sssddzdzdzdd', '2023-10-10 12:23:30'),
(2, 'BOUDRY', 'A propos du site', 'melanie.boudry@ecoles-epsi.net', 'Bonjour', '2023-10-16 12:23:33'),
(3, 'BOUDRY', 'feeffe', 'boudry.melanie@gmail.com', 'effefeef', '2023-10-30 12:24:11');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20231030095753', '2023-10-30 10:59:03', 318),
('DoctrineMigrations\\Version20231030104536', '2023-10-30 11:45:55', 312),
('DoctrineMigrations\\Version20231030111821', '2023-10-30 12:18:31', 19),
('DoctrineMigrations\\Version20231030124729', '2023-10-30 13:47:49', 542),
('DoctrineMigrations\\Version20231030130218', '2023-10-30 14:02:26', 62),
('DoctrineMigrations\\Version20231030140628', '2023-10-30 15:06:36', 23),
('DoctrineMigrations\\Version20231030143117', '2023-10-30 15:31:21', 22),
('DoctrineMigrations\\Version20231030153905', '2023-10-30 16:39:11', 1241),
('DoctrineMigrations\\Version20231031091248', '2023-10-31 10:12:56', 2985),
('DoctrineMigrations\\Version20231031091640', '2023-10-31 10:16:43', 1978),
('DoctrineMigrations\\Version20231031103222', '2023-10-31 11:32:26', 2486);

-- --------------------------------------------------------

--
-- Structure de la table `fichier`
--

CREATE TABLE `fichier` (
  `id` int(11) NOT NULL,
  `proprietaire_id` int(11) NOT NULL,
  `nom_original` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom_serveur` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_envoi` datetime NOT NULL,
  `extension` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `taille` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `fichier`
--

INSERT INTO `fichier` (`id`, `proprietaire_id`, `nom_original`, `nom_serveur`, `date_envoi`, `extension`, `taille`) VALUES
(1, 1, 'BDD UML.pdf', 'BDD-UML-653fd13af39d6.pdf', '2023-10-30 16:52:26', 'pdf', 34998),
(2, 1, 'Work life balance  fr.pdf', 'Work-life-balance-fr-653fd1f8bd4be.pdf', '2023-10-30 16:55:36', 'pdf', 172013),
(3, 1, 'B1-Bloc3-DELEGATION_TP.pdf', 'B1-Bloc3-DELEGATION-TP-653fd394655ef.pdf', '2023-10-30 17:02:28', 'pdf', 39853),
(4, 1, 'Certificat_.pdf', 'Certificat-6540d2d5619e7.pdf', '2023-10-31 11:11:33', 'pdf', 104720),
(5, 1, 'Certificat_respacteurs.pdf', 'Certificat-respacteurs-6540e1a691749.pdf', '2023-10-31 12:14:46', 'pdf', 104741),
(6, 1, 'Certificat_respacteurs.pdf', 'Certificat-respacteurs-6540e1b777231.pdf', '2023-10-31 12:15:03', 'pdf', 104741),
(7, 1, 'Certificat_.pdf', 'Certificat-6540e1dbd6ede.pdf', '2023-10-31 12:15:39', 'pdf', 104720),
(8, 1, 'Certificat_conformite.pdf', 'Certificat-conformite-6540e23ccc100.pdf', '2023-10-31 12:17:16', 'pdf', 104754),
(9, 1, 'Certificat_.pdf', 'Certificat-6540e5ac8116d.pdf', '2023-10-31 12:31:56', 'pdf', 104720),
(10, 1, 'Mélanie_BoudryCV.pdf', 'Melanie-BoudryCV-65e716bc38640.pdf', '2024-03-05 13:57:32', 'pdf', 473091),
(11, 3, 'Mélanie_BoudryCV.pdf', 'Melanie-BoudryCV-65e7378411384.pdf', '2024-03-05 16:17:24', 'pdf', 473091);

-- --------------------------------------------------------

--
-- Structure de la table `fichier_user`
--

CREATE TABLE `fichier_user` (
  `fichier_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `fichier_user`
--

INSERT INTO `fichier_user` (`fichier_id`, `user_id`) VALUES
(1, 5),
(3, 6),
(4, 4),
(5, 5),
(10, 3),
(10, 6);

-- --------------------------------------------------------

--
-- Structure de la table `telecharger`
--

CREATE TABLE `telecharger` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `fichier_id` int(11) NOT NULL,
  `nb` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_verified` tinyint(1) NOT NULL,
  `date_register` datetime NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `is_verified`, `date_register`, `lastname`, `firstname`) VALUES
(1, 'melanie.boudry@ecoles-epsi.net', '[\"ROLE_ADMIN\"]', '$2y$13$QdH/MMmoAvjY2mBoNKL4iu/Yk198euWZUqLz6UqovVhe9SOHZ9wmu', 1, '2023-10-09 15:56:47', 'BOUDRY', 'Mélanie'),
(2, 'agathe.po@b.com', '[\"ROLE_MOD\"]', '$2y$13$33NYQMqMJ5iP0m3biNJIQOAZjtl8FHI8YSsq9rnin9gtdFAIez4bi', 1, '2023-10-17 11:00:26', 'PO', 'Agathe'),
(3, 'agathe.poteaux@ecoles-epsi.net', '[]', '$2y$13$sREcvkP9fdAdkaZDLBsFbumssijrFGUZexVssunkVmYgptcn3OlPu', 1, '2023-10-08 11:00:29', 'POTEAUX', 'Ag'),
(4, 'ezeze.po@b.com', '[]', '$2y$13$TmKeIUlqUBgB4mCTSToFv./mnCFYsCxTadtSu9/zaSasP9I/m.M3O', 0, '2023-10-30 15:10:10', 'HUER', 'Julie'),
(5, 'jerome.boudry@orange.fr', '[]', '$2y$13$1qedxEB9NiF8E3Sf6Cb0auNOZZbOIEDWAgbT1zrpsTjKd9cvl0I2C', 0, '2023-10-30 16:01:12', 'BOUDRY', 'Bénédicte'),
(6, 'jerome.boudry@sss.fr', '[]', '$2y$13$OhWHbY4ym7sc3W4cQHdHOOm92keKZFuJ2X.Eq8Xsl7aI2azoleRii', 0, '2023-10-30 17:22:45', 'BOUDRY', 'Jerome');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `categorie_fichier`
--
ALTER TABLE `categorie_fichier`
  ADD PRIMARY KEY (`categorie_id`,`fichier_id`),
  ADD KEY `IDX_C4F5FBBDBCF5E72D` (`categorie_id`),
  ADD KEY `IDX_C4F5FBBDF915CFE` (`fichier_id`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `fichier`
--
ALTER TABLE `fichier`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_9B76551F76C50E4A` (`proprietaire_id`);

--
-- Index pour la table `fichier_user`
--
ALTER TABLE `fichier_user`
  ADD PRIMARY KEY (`fichier_id`,`user_id`),
  ADD KEY `IDX_C1C1EA2F915CFE` (`fichier_id`),
  ADD KEY `IDX_C1C1EA2A76ED395` (`user_id`);

--
-- Index pour la table `telecharger`
--
ALTER TABLE `telecharger`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_E06A3C34A76ED395` (`user_id`),
  ADD KEY `IDX_E06A3C34F915CFE` (`fichier_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `fichier`
--
ALTER TABLE `fichier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `telecharger`
--
ALTER TABLE `telecharger`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `categorie_fichier`
--
ALTER TABLE `categorie_fichier`
  ADD CONSTRAINT `FK_C4F5FBBDBCF5E72D` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_C4F5FBBDF915CFE` FOREIGN KEY (`fichier_id`) REFERENCES `fichier` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `fichier`
--
ALTER TABLE `fichier`
  ADD CONSTRAINT `FK_9B76551F76C50E4A` FOREIGN KEY (`proprietaire_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `fichier_user`
--
ALTER TABLE `fichier_user`
  ADD CONSTRAINT `FK_C1C1EA2A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_C1C1EA2F915CFE` FOREIGN KEY (`fichier_id`) REFERENCES `fichier` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `telecharger`
--
ALTER TABLE `telecharger`
  ADD CONSTRAINT `FK_E06A3C34A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_E06A3C34F915CFE` FOREIGN KEY (`fichier_id`) REFERENCES `fichier` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
