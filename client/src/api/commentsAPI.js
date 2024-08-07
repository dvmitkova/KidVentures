import requester from "./requester"

const BASE_URL = `${import.meta.env.VITE_API_URL}/data/comments`;

const create = (tripId, text) => requester.post(BASE_URL, { tripId, text });

const getAll = (tripId) => {
    const params = new URLSearchParams({
        where: `tripId="${tripId}"`,
        load: `author=_ownerId:users`
    });
    return requester.get(`${BASE_URL}?${params.toString()}`);
}


export default {
    create,
    getAll,
}