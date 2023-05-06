import { page } from './lib.js';

page();
page('/', () => console.log('home Page'));
page('/catalog', () => console.log('Catalog Page'));
page('/create', () => console.log('Create Page'));
page('/details/:id', () => console.log('Details Page'));
page('/login', () => console.log('Login Page'));
page('/register', () => console.log('Register Page'));

page.start();
