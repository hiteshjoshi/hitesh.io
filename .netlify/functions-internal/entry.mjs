import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_950077f3.mjs';

const _page0  = () => import('./chunks/generic_bd2c7037.mjs');
const _page1  = () => import('./chunks/index_5a5e06de.mjs');
const _page2  = () => import('./chunks/rss_0200d0b5.mjs');
const _page3  = () => import('./chunks/404_fbb6d120.mjs');
const _page4  = () => import('./chunks/_.._0c1d61e3.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/rss.xml.js", _page2],["src/pages/404.astro", _page3],["src/pages/[...slug].astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
