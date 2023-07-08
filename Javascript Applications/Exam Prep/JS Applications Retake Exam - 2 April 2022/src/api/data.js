import { del, get, post, put } from './api.js';

const endpoints = {
    getAll: '',
    getById: '',
    create: '',
    edit: '',
    delete: '',
};

export async function getAllPosts() {
    return get('/data/posts?sortBy=_createdOn%20desc');
}

export async function getPostById(id) {
    return get('/data/posts/' + id);
}

export async function createPost(data) {
    return post('/data/posts', data);
}

export async function editPost(id, data) {
    return put('/data/posts/' + id, data);
}

export async function deletePost(id) {
    return del('/data/posts/' + id);
}
