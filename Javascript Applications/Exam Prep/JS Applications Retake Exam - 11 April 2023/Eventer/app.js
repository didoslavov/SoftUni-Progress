import { page } from './lib.js';
import { homePage } from './src/views/home.js';
import { decorateCtx } from './util.js';

page(decorateCtx);
page('/', homePage);
page('/catalog', () => console.log('catalog'));
page('/create', () => console.log('create'));
page('/login', () => console.log('login'));
page('/register', () => console.log('register'));

page.start();
