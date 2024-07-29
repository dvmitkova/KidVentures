import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/trips'

export const getAll = async () => {
    const result = await request.get(BASE_URL);
    //Преобразуваме данните, които идват от сървъра, в масив
    const trips = Object.values(result);
    return trips;
}

export const getOne = (tripId) => request.get(`${BASE_URL}/${tripId}`);

export const create = (tripData) => request.post(`${BASE_URL}`, tripData)

const tripsAPI = {
    getAll,
    getOne,
    create
}

export default tripsAPI;