import { del, get, post, put } from './api.js';

const endpoints = {
    getAll: '/data/memes?sortBy=_createdOn%20desc',
    getById: '/data/pets/',
    create: '/data/pets',
    edit: '/data/pets/',
    delete: '/data/pets/',
    donate: '/data/donation',
    totalDonations: (petId) => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    hasDonated: (petId, userId) => `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAll() {
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

export async function donate(data) {
    return post(endpoints.donate, data);
}

export async function getTotalDonations(petId) {
    return get(endpoints.totalDonations(petId));
}

export async function getHasDonated(petId, userId) {
    return get(endpoints.hasDonated(petId, userId));
}
