import { del, get, post, put } from './api.js';

export async function getAll() {
    return get('/data/fruits?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return get('/data/fruits/' + id);
}

export async function deleteById(id) {
    return del('/data/fruits/' + id);
}

export async function createFruit(fruitData) {
    return post('/data/fruits', fruitData);
}

export async function editFruit(id, fruitData) {
    return put('/data/fruits/' + id, fruitData);
}

export async function searchFruit(query) {
    return get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
}
