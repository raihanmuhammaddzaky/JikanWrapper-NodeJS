# JikanWrapper (@raihandzaky/jikan-wrapper)

JikanWrapper adalah sebuah *library* modern, ringan, dan elegan untuk berinteraksi dengan [Jikan API v4](https://docs.api.jikan.moe/) (Unofficial MyAnimeList API). 

Dibangun dengan standar **Clean Code** dan **Zero Dependency**, *library* ini memastikan pengalaman *developer* yang mulus dalam mengambil data dari MyAnimeList tanpa membebani ukuran proyek Anda.

## 🚀 Fitur Unggulan

- **Zero Dependency:** Dibangun 100% menggunakan fitur bawaan Node.js tanpa pustaka pihak ketiga (seperti Axios).
- **Modern & Cepat:** Menggunakan sintaks modern `async/await` dan fitur `fetch` bawaan Node.js.
- **Arsitektur Modular:** Menggunakan pola *Dependency Injection* yang sangat rapi untuk memisahkan logika tiap kategori.
- **Dukungan Pencarian Dinamis:** Mampu menangani *query parameters* pencarian kompleks secara otomatis.

## 🛠️ Instalasi

Pastikan Anda menggunakan **Node.js versi 18 ke atas** (karena membutuhkan dukungan native `fetch`).

```bash
npm install @raihandzaky/jikan-wrapper
```

## 📖 Cara Penggunaan

Library ini menggunakan standar **ES Modules (`import`)**. Pastikan `package.json` proyek Anda memiliki `"type": "module"`.

### 1. Inisialisasi

```javascript
import JikanClient from '@raihandzaky/jikan-wrapper';

// Membuat instance mesin JikanClient
const jikan = new JikanClient();
```

### 2. Fitur Pencarian Dinamis (Search & Filter)

Anda bisa menggunakan fungsi `searchAnime` untuk mencari banyak data sekaligus dengan filter dinamis sesuai dengan dokumentasi Jikan API.

```javascript
async function cariAnime() {
    try {
        // Masukkan filter pencarian ke dalam object
        const hasil = await jikan.searchAnime({
            q: "Naruto",
            status: "airing",
            rating: "r17",
            limit: 5,
            page: 1
        });
        
        console.log(`Ditemukan ${hasil.data.length} anime.`);
        console.log(`Anime pertama: ${hasil.data[0].title}`);
    } catch (error) {
        console.error("Gagal melakukan pencarian:", error);
    }
}
```

### 3. Mengambil Data Spesifik (Berdasarkan ID)

Jika Anda sudah mengetahui ID anime dari MyAnimeList (contoh: One Piece = 21), Anda bisa mengambil berbagai jenis data spesifik.

```javascript
async function detailAnime() {
    try {
        const idAnime = 21; // One Piece
        
        // Mengambil data utama
        const dataAnime = await jikan.getAnimeById(idAnime);
        console.log(`Judul: ${dataAnime.data.title}, Skor: ${dataAnime.data.score}`);

        // Mengambil data karakter
        const karakter = await jikan.getAnimeCharacters(idAnime);
        console.log(`Karakter pertama: ${karakter.data[0].character.name}`);
        
    } catch (error) {
        console.error("Gagal memuat detail:", error);
    }
}
```

## 📋 Daftar Fungsi Anime Lengkap

Berikut adalah daftar seluruh fungsi kategori Anime yang sudah didukung oleh *library* ini. Seluruh fungsi mengembalikan nilai `Promise<Object>` berisi response JSON asli dari Jikan API:

| Fungsi | Kegunaan | Parameter |
| :--- | :--- | :--- |
| `searchAnime(queryParams)` | Mencari anime dengan filter tertentu | `Object` (Opsional) |
| `getAnimeById(id)` | Mengambil detail lengkap anime | `id` (Number) |
| `getAnimeCharacters(id)` | Mengambil daftar karakter anime | `id` (Number) |
| `getAnimeStaff(id)` | Mengambil daftar staf/kreator anime | `id` (Number) |
| `getAnimeEpisodes(id)` | Mengambil seluruh daftar episode | `id` (Number) |
| `getAnimeDetailEpisodes(id, eps)`| Mengambil data 1 episode spesifik | `id` (Number), `eps` (Number)|
| `getAnimeNews(id)` | Mengambil berita terkait anime | `id` (Number) |
| `getAnimeForum(id)` | Mengambil topik forum MyAnimeList | `id` (Number) |
| `getAnimeVideos(id)` | Mengambil daftar video/trailer | `id` (Number) |
| `getAnimePictures(id)` | Mengambil galeri gambar anime | `id` (Number) |
| `getAnimeStatistics(id)` | Mengambil statistik skor & penonton | `id` (Number) |
| `getAnimeMoreInfo(id)` | Mengambil informasi trivia tambahan | `id` (Number) |
| `getAnimeReviews(id)` | Mengambil daftar *review* dari user | `id` (Number) |
| `getAnimeRelations(id)` | Mengambil relasi (Prekuel/Sekuel) | `id` (Number) |

## 🤝 Kontribusi

Proyek ini sangat terbuka untuk dikembangkan! Jika Anda menemukan *bug* atau ingin menambahkan *endpoint* kategori baru seperti Manga, Character, atau Top Anime, silakan lakukan *Fork* repository ini dan buat *Pull Request*. Pastikan Anda mengikuti standar *Clean Code* yang sudah diterapkan di kode sumber.
