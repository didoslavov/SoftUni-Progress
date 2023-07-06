import { get } from './api.js';

export async function getAllPosts() {
    return get('/data/posts?sortBy=_createdOn%20desc');
}
