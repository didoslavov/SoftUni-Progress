import { page } from '../src/lib.js';
import { decorateCtx } from './util.js';
import { catalogPage } from './views/catalog.js';
import { homePage } from './views/home.js';

page(decorateCtx);
page('/', homePage);
page('/catalog', catalogPage);

page.start();
