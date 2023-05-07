import { clearUserData, createOptions, setUserData } from '../util.js';

const host = 'http://localhost:3030';

export async function request(url, options) {
  try {
    const response = await fetch(host + url, options);

    if (response.ok != true) {
      if (response.status == 403) {
        clearUserData();
      }
      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

export async function get(url) {
  return request(url, createOptions());
}

export async function post(url, data) {
  return request(url, createOptions('post', data));
}

export async function put(url, data) {
  return request(url, createOptions('put', data));
}

export async function del(url) {
  return request(url, createOptions('delete'));
}

export async function login(email, password) {
  const res = await post('/users/login', { email, password });

  const userData = {
    email: res.email,
    id: res._id,
    token: res.accessToken,
  };

  setUserData(userData);
}

export async function register(email, password) {
  const response = await post('/users/register', { email, password });

  const userData = {
    email: response.email,
    id: response._id,
    token: response.accessToken,
  };

  setUserData(userData);
}

export async function logout() {
  await get('/users/logout');
  clearUserData();
}
