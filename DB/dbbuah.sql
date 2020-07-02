-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 02 Jul 2020 pada 06.37
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbbuah`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `buah`
--

CREATE TABLE `buah` (
  `id` int(11) NOT NULL,
  `nama` varchar(25) NOT NULL,
  `latin` varchar(25) NOT NULL,
  `gambar` varchar(25) NOT NULL,
  `ket` text NOT NULL,
  `id_syarat` int(11) NOT NULL,
  `ph` varchar(25) NOT NULL,
  `suhu` varchar(25) NOT NULL,
  `musim` varchar(25) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `buah`
--

INSERT INTO `buah` (`id`, `nama`, `latin`, `gambar`, `ket`, `id_syarat`, `ph`, `suhu`, `musim`, `created_at`, `updated_at`) VALUES
(1, 'Apel', 'Pyrus malus L.', 'apple.png', 'Apel adalah jenis buah-buahan, atau buah yang dihasilkan dari pohon buah apel. Buah apel biasanya berwarna merah kulitnya jika masak dan, namun bisa juga kulitnya berwarna hijau atau kuning. Kulit buahnya agak lembek, daging buahnya keras. Buah ini memiliki beberapa biji di dalamnya.', 1, 'netral', 'sedang', 'tidak', '2020-06-16 21:05:19', '2020-06-16 21:05:19'),
(2, 'Durian', 'Durio zibethinus Murr', 'durian.png', 'Merupakan salah satu tanaman hasil perkebunan yang telah lama dikenal masyarakat. Durian kerap diolah sebagai campuran bahan kue tradisional seperti jenang. Di dunia modern, durian biasa dicampurkan dalam gula-gula, es krim, susu, dan berbagai minuman lainnya.', 2, 'netral', 'sedang', 'ya', '2020-06-18 21:33:18', '2020-06-18 21:33:18'),
(3, 'Nanas', 'Ananas comosus Merr', 'nanas.png', 'Tumbuhan tropis yang berasal dari Brasil, Bolivia, dan Paraguay Tumbuhan ini termasuk dalam familia nanas-nanasan. Perawakan tumbuhannya rendah, herba dengan 30 atau lebih daun yang panjang, berujung tajam, tersusun dalam bentuk roset mengelilingi batang yang tebal.', 3, 'rendah', 'rendah', 'tidak', '2020-06-19 12:44:11', '2020-06-19 12:44:11'),
(4, 'Buah Naga', 'Hylocereus sp.', 'naga.png', 'Buah ini berasal dari Meksiko, Amerika Tengah dan Amerika Selatan namun sekarang juga dibudidayakan di negara-negara Asia seperti Taiwan, Vietnam, Filipina, Indonesia dan Malaysia.', 4, 'netral', 'sedang', 'tidak', '2020-06-19 12:45:46', '2020-06-19 12:45:46'),
(5, 'Pepaya', 'Carica papaya L.', 'pepaya.png', 'Pepaya, atau betik adalah tumbuhan yang berasal dari Meksiko bagian selatan dan bagian utara dari Amerika Selatan, dan kini menyebar luas dan banyak ditanam di seluruh daerah tropis untuk diambil buahnya.', 5, 'netral', 'sedang', 'tidak', '2020-06-19 12:47:45', '2020-06-19 12:47:45'),
(6, 'Pisang', 'Musa paradisiaca', 'pisang.png', 'Pisang adalah nama umum yang diberikan pada tumbuhan terna raksasa berdaun besar memanjang dari suku Musaceae. Beberapa jenisnya menghasilkan buah konsumsi yang dinamakan sama. Buah ini tersusun dalam tandan dengan kelompok-kelompok tersusun menjari yang disebut sisir.', 6, 'netral', 'sedang', 'tidak', '2020-06-19 12:49:41', '2020-06-19 12:49:41');

-- --------------------------------------------------------

--
-- Struktur dari tabel `survei`
--

CREATE TABLE `survei` (
  `id_survei` int(11) NOT NULL,
  `pertanyaan` varchar(250) NOT NULL,
  `opsi_a` varchar(25) NOT NULL,
  `opsi_b` varchar(25) NOT NULL,
  `opsi_c` varchar(25) NOT NULL,
  `updated_at` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `tipe` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `survei`
--

INSERT INTO `survei` (`id_survei`, `pertanyaan`, `opsi_a`, `opsi_b`, `opsi_c`, `updated_at`, `created_at`, `tipe`) VALUES
(1, 'Apa tingkat pH tanah di tempat yang anda ingin tanam ?', 'rendah', 'netral', 'tinggi', '2020-06-25 13:43:31', '2020-06-25 13:43:31', 1),
(2, 'Berapa rata suhu di lingkungan anda ?', 'rendah', 'sedang', 'tinggi', '2020-06-25 13:44:47', '2020-06-25 13:44:47', 2),
(3, 'Apakah anda ingin menanam tanaman yang musiman ?', 'ya', 'tidak', '', '2020-06-25 13:45:43', '2020-06-25 13:45:43', 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `syarat`
--

CREATE TABLE `syarat` (
  `id` int(11) NOT NULL,
  `id_syarat` int(11) NOT NULL,
  `tanam` varchar(250) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `syarat`
--

INSERT INTO `syarat` (`id`, `id_syarat`, `tanam`, `created_at`, `updated_at`) VALUES
(1, 1, 'tinggi 700-1500 mdpl', '2020-06-16 21:06:26', '2020-06-16 21:06:26'),
(2, 1, 'suhu 16-27', '2020-06-16 21:06:57', '2020-06-16 21:06:57'),
(3, 1, 'pH 5,5-7', '2020-06-16 21:10:26', '2020-06-16 21:10:26');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `buah`
--
ALTER TABLE `buah`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `survei`
--
ALTER TABLE `survei`
  ADD PRIMARY KEY (`id_survei`);

--
-- Indeks untuk tabel `syarat`
--
ALTER TABLE `syarat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `buah`
--
ALTER TABLE `buah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `survei`
--
ALTER TABLE `survei`
  MODIFY `id_survei` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `syarat`
--
ALTER TABLE `syarat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
