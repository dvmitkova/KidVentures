import { getAccessToken } from "../utils/authUtils";

async function requester(method, url, data) {
    const options = {
        method,
    };

    const accessToken = getAccessToken();

    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken,
        };
    }

    if (method !== 'GET') {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };

        if (data) {
            options.body = JSON.stringify(data);
        }
    }

    try {
        const response = await fetch(url, options);
        
        if (response.status === 204) {
            return; 
        }

        const result = await response.json();

        if (!response.ok) {
            console.error('Request failed:', result); 
            throw new Error(result.message || 'Something went wrong');
        }

        return result;
    } catch (error) {
        console.error('Error in request:', error); 
        throw error;
    }
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del
};
