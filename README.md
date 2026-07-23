# JikanWrapper

JikanWrapper adalah sebuah *library* modern, ringan, dan elegan untuk berinteraksi dengan [Jikan API v4](https://docs.api.jikan.moe/) (Unofficial MyAnimeList API). 

Dibangun dengan standar **Clean Code** dan arsitektur modular, *library* ini memastikan pengalaman *developer* yang mulus dalam mengambil data anime, manga, dan karakter dari MyAnimeList.

## 🚀 Fitur Unggulan

- **Modern & Cepat:** Menggunakan sintaks modern `async/await` dan fitur `fetch` bawaan Node.js tanpa dependensi berat.
- **Arsitektur Modular:** Menggunakan pola *Mixin* yang sangat rapi untuk memisahkan logika tiap kategori (Anime, Manga, dll).
- **Validasi Ketat (Clean Code):** Memastikan parameter pencarian tervalidasi sebelum melakukan panggilan jaringan, menghemat bandwidth.
- **Dukungan Pagination & Filter Kompleks:** Mampu menangani *query parameters* RESTful secara otomatis.

## 🛠️ Instalasi

Pastikan Anda menggunakan **Node.js versi 18 ke atas** (karena membutuhkan dukungan native `fetch`).

```bash
# Untuk saat ini, copy folder JikanWrapper ke dalam project Anda
```

## 📖 Cara Penggunaan

Library ini menggunakan standar **ES Modules (`import`)**. Pastikan `package.json` Anda memiliki `"type": "module"`.

### Inisialisasi

```javascript
import JikanClient from './JikanWrapper/src/JikanClient.js';

// Membuat instance mesin JikanClient
const jikan = new JikanClient();
```

### Mengambil Data Anime Spesifik (Berdasarkan ID)

```javascript
async function fetchAnime() {
    try {
        const idAnime = 21; // One Piece
        const dataAnime = await jikan.getAnimeById(idAnime);
        
        console.log(`Judul: ${dataAnime.title}`);
        console.log(`Skor: ${dataAnime.score}`);
    } catch (error) {
        console.error("Gagal memuat:", error.message);
    }
}
```

### Pencarian & Filter Kompleks

Anda bisa menggunakan fungsi `getAnimeList` untuk mencari banyak data sekaligus dengan filter dinamis.

```javascript
async function searchAnime() {
    // Parameter bebas disesuaikan dengan dokumentasi Jikan API v4
    const filter = {
        q: "Naruto",
        status: "complete",
        type: "tv"
    };

    const hasil = await jikan.getAnimeList(filter);
    
    console.log(`Ditemukan ${hasil.data.length} anime.`);
    console.log(`Hasil pertama: ${hasil.data[0].title}`);
}
```

## 📁 Struktur Proyek

```
JikanWrapper/
├── src/
│   ├── JikanClient.js         # Mesin Induk & Logika Jaringan Internal
│   ├── endpoints/
│   │   └── anime.js           # Endpoint khusus Anime (getAnimeById, dll)
│   └── utils/
│       └── commonValidator.js # Validasi keamanan dan tipe data
├── tests/
│   └── ujicoba.js             # Skrip unit testing (node:test)
├── package.json
└── README.md
```

## 🤝 Kontribusi

Proyek ini sangat terbuka untuk dikembangkan! Jika Anda ingin menambahkan *endpoint* Manga, Character, atau Top Anime, silakan buat *Pull Request* dan ikuti standar *Clean Code* yang sudah diterapkan di kode sumber.
