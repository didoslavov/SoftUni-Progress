import { del, get, post, put } from './api.js';

export async function getAllPosts() {
    return get('/data/posts?sortBy=_createdOn%20desc');
}

export async function getMyPosts(userId) {
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
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

export async function getTotalDonations(postId) {
    return get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
}

export async function getHasDonated(postId, userId) {
    return get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function donate(postId) {
    return post('/data/donations', { postId });
}
