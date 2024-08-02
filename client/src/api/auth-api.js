import requester from "./requester";

const BASE_URL = "http://localhost:3030/users";

export const login = (email, password) =>
  requester.post(`${BASE_URL}/login`, { email, password });

export const register = (userDetails) =>
  requester.post(`${BASE_URL}/register`, userDetails);

export const logout = () => requester.get(`${BASE_URL}/logout`);

// Fetch details of the currently logged-in user
export const getUserDetails = () => requester.get(`${BASE_URL}/me`);

// Fetch details of a specific user by userId
export const getUserById = (userId) => requester.get(`${BASE_URL}/${userId}`);