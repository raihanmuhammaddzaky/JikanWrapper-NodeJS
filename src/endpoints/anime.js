import validateId from "../utils/commonValidator.js";

/**
 * Setup anime endpoints for the JikanClient
 * @param {import('../JikanWrapper.js').default} client 
 */
export default function setupAnimeEndpoints(client) {

    const fetchAnimeData = async (id, endpoint) => {
        validateId(id);
        const data = await client._request(`/anime/${id}/${endpoint}`);
        return data;
    }

    /**
     * Search for anime.
     * @param {Object} queryParams - Search parameters.
     * @param {string} [queryParams.q] - Search query (e.g., title).
     * @param {number} [queryParams.page] - Page number.
     * @param {number} [queryParams.limit] - Number of results per page.
     * @returns {Promise<Object>} The anime search results.
     */

    client.searchAnimeByTitle = async (title) => {

        let finalUrl = "/anime";
        if (title) {
            finalUrl += `?q=${title}`;
        }

        return await client._request(finalUrl);
    }

    /**
     * Get complete details of an anime by its ID.
     * @param {number|string} id - The Mal ID of the anime.
     * @returns {Promise<Object>} The anime details.
     */
    client.getAnimeById = async (id) => {
        return await fetchAnimeData(id, "full");
    }

    /**
     * Get characters of an anime.
     * @param {number|string} id - The Mal ID of the anime.
     * @returns {Promise<Object>} The anime characters.
     */
    client.getAnimeCharacters = async (id) => {
        return await fetchAnimeData(id, "characters");
    }

    /**
     * Get staff of an anime.
     * @param {number|string} id - The Mal ID of the anime.
     * @returns {Promise<Object>} The anime staff.
     */
    client.getAnimeStaff = async (id) => {
        return await fetchAnimeData(id, "staff");
    }

    /**
     * Get episodes of an anime.
     * @param {number|string} id - The Mal ID of the anime.
     * @returns {Promise<Object>} The anime episodes.
     */
    client.getAnimeEpisodes = async (id) => {
        return await fetchAnimeData(id, "episodes");
    }

    /**
     * Get a specific episode detail of an anime.
     * @param {number|string} id - The Mal ID of the anime.
     * @param {number|string} episodeNumber - The episode number.
     * @returns {Promise<Object>} The specific episode details.
     */
    client.getAnimeDetailEpisodes = async (id, episodeNumber) => {
        return await fetchAnimeData(id, `episodes/${episodeNumber}`);
    }

    /**
     * Get news related to an anime.
     * @param {number|string} id - The Mal ID of the anime.
     * @returns {Promise<Object>} The anime news.
     */
    client.getAnimeNews = async (id) => {
        return await fetchAnimeData(id, "news");
    }

    /**
     * Get forum topics related to an anime.
     * @param {number|string} id - The Mal ID of the anime.
     * @returns {Promise<Object>} The anime forum topics.
     */
    client.getAnimeForum = async (id) => {
        return await fetchAnimeData(id, "forum");
    }

    /**
     * Get videos (promos, episodes) of an anime.
     * @param {number|string} id - The Mal ID of the anime.
     * @returns {Promise<Object>} The anime videos.
     */
    client.getAnimeVideos = async (id) => {
        return await fetchAnimeData(id, "videos");
    }

    /**
     * Get pictures of an anime.
     * @param {number|string} id - The Mal ID of the anime.
     * @returns {Promise<Object>} The anime pictures.
     */
    client.getAnimePictures = async (id) => {
        return await fetchAnimeData(id, "pictures");
    }

    /**
     * Get statistics of an anime.
     * @param {number|string} id - The Mal ID of the anime.
     * @returns {Promise<Object>} The anime statistics.
     */
    client.getAnimeStatistics = async (id) => {
        return await fetchAnimeData(id, "statistics");
    }

    /**
     * Get more information about an anime.
     * @param {number|string} id - The Mal ID of the anime.
     * @returns {Promise<Object>} More information text.
     */
    client.getAnimeMoreInfo = async (id) => {
        return await fetchAnimeData(id, "moreinfo");
    }

    /**
     * Get reviews of an anime.
     * @param {number|string} id - The Mal ID of the anime.
     * @returns {Promise<Object>} The anime reviews.
     */
    client.getAnimeReviews = async (id) => {
        return await fetchAnimeData(id, "reviews");
    }

    /**
     * Get relations of an anime (prequels, sequels, side stories, etc).
     * @param {number|string} id - The Mal ID of the anime.
     * @returns {Promise<Object>} The anime relations.
     */
    client.getAnimeRelations = async (id) => {
        return await fetchAnimeData(id, "relations");
    }

}