import validateId from "../utils/commonValidator.js";

export default function setupAnimeEndpoints(client) {

    const fetchAnimeData = async (id, endpoint) => {
        validateId(id);
        const data = await client._request(`anime/${id}/${endpoint}`);
        return data;
    }

    client.getAnimeById = async (id) => {
        return await fetchAnimeData(id, "full");
    }

    client.getAnimeCharacters = async (id) => {
        return await fetchAnimeData(id, "characters");
    }

    client.getAnimeStaff = async (id) => {
        return await fetchAnimeData(id, "staff");
    }

    client.getAnimeEpisodes = async (id) => {
        return await fetchAnimeData(id, "episodes");
    }

    client.getAnimeDetailEpisodes = async (id, episodeNumber) => {
        return await fetchAnimeData(id, `episodes/${episodeNumber}`);
    }

    client.getAnimeNews = async (id) => {
        return await fetchAnimeData(id, "news");
    }

    client.getAnimeForum = async (id) => {
        return await fetchAnimeData(id, "forum");
    }

    client.getAnimeVideos = async (id) => {
        return await fetchAnimeData(id, "videos");
    }

    client.getAnimePictures = async (id) => {
        return await fetchAnimeData(id, "statistics");
    }

    client.getAnimeMoreInfo = async (id) => {
        return await fetchAnimeData(id, "moreinfo");
    }

    client.getAnimeReviews = async (id) => {
        return await fetchAnimeData(id, "reviews");
    }

    client.getAnimeRelations = async (id) => {
        return await fetchAnimeData(id, "relations");
    }


}