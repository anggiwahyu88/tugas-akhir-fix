<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>SMK SORE TULUNGAGUNG</title>
  <link rel="icon" type="image/svg+xml" href="/storage/logo-smk-sore.webp" />
    @if (Request::is('/'))
        <link rel="preload" href="/storage/hixbd8bp6d.png" as="image" />
    @endif
    <meta name="description"
        content="SMK SORE Tulungagung merupakan Sekolah Menengah Kejuruan Swasta Terbesar di Tulungagung dan sekitarnya. Kami berkomitmen untuk menyiapkan siswa untuk siap memasuki lapangan kerja serta mengembangkan sikap professional. Menyiapkan siswa agar mampu memilih karier, mampu berkompetisi global serta mampu mengembangkan potensi dirinya.">
    <meta name="keywords"
        content="Sistem Informasi Akademik, SIAKAD, PPDB 2024, PPDB JATIM 2024, PPDB SMK SORE, SMK SORE Tulungagung, PPDB Jatim, PPDB Tulungagung, SMK, PPDB Online, Jawa Timur, Tulungagung, Memilih Jurusan, Memilih Kompetensi Keahlian, Jurusan di SMK, Kompetensi Keahlian, Implementasi Kurikulum Merdeka">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
