import { describe, it } from 'node:test';
import assert from 'node:assert';
import setupAnimeEndpoints from '../src/endpoints/anime.js';

const createMockClient = () => {
    const mockClient = {
        _request: async (endpointUrl) => {
            return { interceptedUrl: endpointUrl }
        }
    }
    setupAnimeEndpoints(mockClient);

    return mockClient;
}

describe("Unit Test : Testing Anime Endpoint", () => {
    it("getAnimeById harus merangkai enpoint 'full' ", async () => {
        const client = createMockClient();
        const data = await client.getAnimeById(21);
        assert.strictEqual(data.interceptedUrl, 'anime/21/full')
    });

    it("getAnimeCharacters", async () => {
        const client = createMockClient();
        const data = await client.getAnimeCharacters(21);
        assert.strictEqual(data.interceptedUrl, 'anime/21/characters')
    });

    it("getAnimeStaff", async () => {
        const client = createMockClient();
        const data = await client.getAnimeStaff(21);
        assert.strictEqual(data.interceptedUrl, 'anime/21/staff')
    });

    it("getAnimeEpisodes", async () => {
        const client = createMockClient();
        const data = await client.getAnimeEpisodes(21);
        assert.strictEqual(data.interceptedUrl, 'anime/21/episodes')
    });

    it("getAnimeDetailEpisodes", async () => {
        const client = createMockClient();
        const data = await client.getAnimeDetailEpisodes(21, 1);
        assert.strictEqual(data.interceptedUrl, 'anime/21/episodes/1')
    });

    it("getAnimeNews", async () => {
        const client = createMockClient();
        const data = await client.getAnimeNews(21);
        assert.strictEqual(data.interceptedUrl, 'anime/21/news')
    });

    it("getAnimeForum", async () => {
        const client = createMockClient();
        const data = await client.getAnimeForum(21);
        assert.strictEqual(data.interceptedUrl, 'anime/21/forum')
    });

    it("getAnimeVideos", async () => {
        const client = createMockClient();
        const data = await client.getAnimeVideos(21);
        assert.strictEqual(data.interceptedUrl, 'anime/21/videos')
    });

    it("getAnimePictures", async () => {
        const client = createMockClient();
        const data = await client.getAnimePictures(21);
        assert.strictEqual(data.interceptedUrl, 'anime/21/pictures')
    });

    it("getAnimeStatistics", async () => {
        const client = createMockClient();
        const data = await client.getAnimeStatistics(21);
        assert.strictEqual(data.interceptedUrl, 'anime/21/statistics')
    });

    it("getAnimeMoreInfo", async () => {
        const client = createMockClient();
        const data = await client.getAnimeMoreInfo(21);
        assert.strictEqual(data.interceptedUrl, 'anime/21/moreinfo')
    });

    it("getAnimeReviews", async () => {
        const client = createMockClient();
        const data = await client.getAnimeReviews(21);
        assert.strictEqual(data.interceptedUrl, 'anime/21/reviews')
    });

    it("getAnimeRelations", async () => {
        const client = createMockClient();
        const data = await client.getAnimeRelations(21);
        assert.strictEqual(data.interceptedUrl, 'anime/21/relations')
    });

    it("searchAnime: Harus merangkai URL '/anime' jika parameter kosong", async () => {
        const client = createMockClient();
        const data = await client.searchAnime();

        assert.strictEqual(data.interceptedUrl, '/anime');
    });

    it("searchAnime: Harus merangkai URL dengan query string jika parameter diisi", async () => {
        const client = createMockClient();
        const data = await client.searchAnime({ q: "naruto", limit: 5 });

        assert.strictEqual(data.interceptedUrl, '/anime?q=naruto&limit=5');
    });


});




