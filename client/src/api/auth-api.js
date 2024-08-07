import requester from "./requester";

const BASE_URL = `${import.meta.env.VITE_API_URL}/users`;

export const login = (email, password) =>
  requester.post(`${BASE_URL}/login`, { email, password });

export const register = (userDetails) =>
  requester.post(`${BASE_URL}/register`, userDetails);

export const logout = () => requester.get(`${BASE_URL}/logout`);

export const getUserDetails = () => requester.get(`${BASE_URL}/me`);

export const getUserById = (userId) => requester.get(`${BASE_URL}/${userId}`);

export const updateProfile = (userDetails) => requester.put(`${BASE_URL}/me`, userDetails);