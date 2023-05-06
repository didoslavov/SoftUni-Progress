import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllEvents() {
  return await api.get('/data/events?sortBy=_createdOn%20desc');
}

export async function getEventById(id) {
  return await api.get('/data/events/' + id);
}

export async function createEvent(data) {
  return await api.post('/data/events', data);
}

export async function editEvent(event, id) {
  return await api.put('/data/events/' + id, event);
}

export async function deleteEvent(id) {
  return await api.del('/data/events/' + id);
}
