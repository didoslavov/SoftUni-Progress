import { clearUserData, setUserData } from '../util.js';
import { get, post } from './api.js';

export async function login(email, password) {
    const { _id, email: userEmail, accessToken } = await post('/users/login', { email, password });

    setUserData({
        _id,
        email: userEmail,
        accessToken,
    });
}

export async function register(email, password) {
    const { _id, email: userEmail, accessToken } = await post('/users/register', { email, password });

    setUserData({
        _id,
        email: userEmail,
        accessToken,
    });
}

export async function logout() {
    await get('/users/logout');
    clearUserData();
}
