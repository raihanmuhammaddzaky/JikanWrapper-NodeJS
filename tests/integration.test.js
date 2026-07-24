import JikanClient from '../src/JikanWrapper.js';
import { describe, it } from 'node:test';
import assert from 'node:assert';

const jikan = new JikanClient();
const VALID_ANIME_ID = 21; // One Piece
const INVALID_ANIME_ID = 99999999;

describe("Integration Test: Anime Endpoints (Kategori 1 - Positif)", () => {

    it("getAnimeById: Harus mengembalikan detail One Piece", async () => {
        const response = await jikan.getAnimeById(VALID_ANIME_ID);
        assert.strictEqual(response.data.title, 'One Piece');
        assert.strictEqual(response.data.mal_id, 21);
    });

    it("getAnimeCharacters: Harus mengembalikan array karakter", async () => {
        const response = await jikan.getAnimeCharacters(VALID_ANIME_ID);
        assert.ok(Array.isArray(response.data), "Data harus berupa Array");
        assert.ok(response.data.length > 0, "Array karakter tidak boleh kosong");
    });

    it.skip("getAnimeDetailEpisodes: Harus mengembalikan episode spesifik", async () => {
        const response = await jikan.getAnimeDetailEpisodes(VALID_ANIME_ID, 1);
        assert.strictEqual(response.data.mal_id, 1, "ID Episode harus 1");
    });

});


