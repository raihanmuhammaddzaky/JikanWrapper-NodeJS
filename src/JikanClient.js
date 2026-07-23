class JikanClient {
    constructor() {
        this.baseUrl = 'https://api.jikan.moe/v4'
    }

    async _request(endpoint) {
        const url = this.baseUrl + endpoint;
        try {
            const response = await fetch(url);
            const dataJson = await response.json();
            if (!response.ok) {
                throw new Error(`API Error : ${response.status} - ${dataJson.message || "Gagal"}`)
            }
            return dataJson;
        } catch (error) {
            console.error(`[JikanClient Error] Gagal mengakses: ${url}`);
            throw error;
        }
    }
}

export default JikanClient;