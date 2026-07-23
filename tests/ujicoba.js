import JikanClient from '../src/JikanClient.js';
import { test } from 'node:test';
import assert from 'node:assert';



const jikan = new JikanClient();

test("Skenario Positif", async () => {
    const response = await jikan._request('/anime/21');
    assert.strictEqual(response.data.title, 'One Piece');
})



