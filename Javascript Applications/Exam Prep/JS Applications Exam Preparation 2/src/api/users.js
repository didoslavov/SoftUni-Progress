import { clearUserData, setUserData } from '../util.js';
import { get, post } from './api.js';

export async function login(username, password) {
    const { _id, username: userName, accessToken } = await post('/users/login', { username, password });

    setUserData({
        _id,
        username: userName,
        accessToken,
    });
}

export async function register(username, password) {
    const { _id, username: userName, accessToken } = await post('/users/register', { username, password });

    setUserData({
        _id,
        username: userName,
        accessToken,
    });
}

export async function logout() {
    await get('/users/logout');
    clearUserData();
}
