import { del, get, post, put } from './api.js';

const endpoints = {
    getAll: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    getById: '/data/pets/',
    create: '/data/pets',
    edit: '/data/pets/',
    delete: '/data/pets/',
};

export async function getAllPets() {
    return get(endpoints.getAll);
}

export async function getPetById(id) {
    return get(endpoints.getById + id);
}

export async function createPet(data) {
    return post(endpoints.create, data);
}

export async function editPet(id, data) {
    return put(endpoints.edit + id, data);
}

export async function deletePet(id) {
    return del(endpoints.delete + id);
}
