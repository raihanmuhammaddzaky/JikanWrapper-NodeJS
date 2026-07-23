# Membangun Modern API Wrapper Jikan v4

Kita akan membangun sebuah API Wrapper baru dari nol untuk Jikan API (Versi 4) di dalam **sebuah folder yang benar-benar baru dan kosong**. Tujuan utama pembuatan ini adalah untuk berlatih menggunakan **Class**, **Async/Await**, dan fitur-fitur modern JavaScript lainnya.

## ⚠️ User Review Required

Silakan baca rancangan di bawah ini. Jika Anda setuju dengan struktur dasar ini, klik tombol **Proceed** (Lanjutkan) agar kita bisa langsung mulai menulis kodenya!

## Open Questions

- Apakah Anda ingin menamai folder barunya dengan nama tertentu (misal: `my-jikan-wrapper`), atau boleh saya buatkan saja namanya?

## Proposed Changes

Kita akan membuat folder baru di `C:\Users\User\Downloads\my-jikan-wrapper`. 
Kita akan menginisialisasi proyek baru dengan `npm init -y` untuk membuat `package.json` yang bersih, lalu mulai menulis kode dengan gaya *Object-Oriented Programming* (OOP) modern menggunakan `class` dan *native fetch*.

### 1. File Utama API Wrapper

#### [NEW] [JikanClient.js](file:///c:/Users/User/Downloads/my-jikan-wrapper/JikanClient.js)
File ini akan memuat fondasi utama library kita. Struktur Class-nya kurang lebih akan seperti ini:
- **`constructor()`**: Mengatur URL dasar (Base URL) secara otomatis ke `https://api.jikan.moe/v4`.
- **`_request(endpoint)`**: Sebuah metode privat (*private method*) menggunakan `async/await` yang tugasnya HANYA untuk mengambil data dari internet dan mengecek *Error*.
- **`getAnimeById(id)`**: Metode publik untuk mengambil detail anime.
- **`searchAnime(query)`**: Metode publik untuk mencari anime berdasarkan teks.

### 2. File Penguji

#### [NEW] [coba-wrapper.js](file:///c:/Users/User/Downloads/my-jikan-wrapper/coba-wrapper.js)
Sebuah file *script* sederhana untuk menguji coba library yang baru saja kita buat. Di sini kita akan meng-import `JikanClient`, membuat objeknya (instance), dan memanggil metode-metodenya untuk mencetak hasil ke layar.

## Verification Plan

### Manual Verification
- Menjalankan perintah `node coba-wrapper.js` di terminal dari dalam folder proyek yang baru.
- Memastikan terminal berhasil mencetak data JSON anime yang diminta tanpa error jaringan.
- Menguji skenario *Error* untuk memastikan pesan *error*-nya ditangani dengan baik.
