import requester from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/trips';
const buildUrl = (tripId) => `${BASE_URL}/${tripId}/comments`

const create = async (tripId, username, text) => requester.post(buildUrl(tripId), { username, text });


const getAll = async (tripId) => {
    const result = await requester.get(buildUrl(tripId))
    const comments = Object.values(result);

    return comments;
}

export default {
    create,
    getAll,
}