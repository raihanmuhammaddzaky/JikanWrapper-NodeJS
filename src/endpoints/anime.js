
export default function setupAnimeEndpoints(client) {

    client.getAnimeById = async (id) => {
        if (!id) throw new Error("ID Tidak Boleh Kosong");
        const data = await client._request(`/anime/${id}/full`);
        return data;
    }

    client.getAnimeCharacters = async (id) => {
        if (!id) throw new Error("ID Tidak Boleh Kosong");
        const data = await client._request(`anime/${id}/characters`);
        return data;
    }

    client.getAnimeStaff = async(id)=>{
        
    }


}