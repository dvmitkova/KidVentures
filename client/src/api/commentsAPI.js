import requester from "./requester"

const BASE_URL = 'http://localhost:3030/data/comments';

const create = (tripId, text) => requester.post(BASE_URL, { tripId, text });

const getAll = (tripId) => {
    const params = new URLSearchParams({
        where: `tripId="${tripId}"`,
        load: `author=_ownerId:users`
        //author = името, което аз давам на prop, ownerId = референцията към съществуващото prop, :users = колекцията, от която взимам данни;
    });
    return requester.get(`${BASE_URL}?${params.toString()}`);
}


export default {
    create,
    getAll,
}