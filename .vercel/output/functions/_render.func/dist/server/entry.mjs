import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CSO1ZSkz.mjs';
import { manifest } from './manifest_CA53Gf-J.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/legal.astro.mjs');
const _page4 = () => import('./pages/lib/faq.astro.mjs');
const _page5 = () => import('./pages/lib/general.astro.mjs');
const _page6 = () => import('./pages/lib/navigation.astro.mjs');
const _page7 = () => import('./pages/lib/portfolio.astro.mjs');
const _page8 = () => import('./pages/lib/testimonials.astro.mjs');
const _page9 = () => import('./pages/portfolio.astro.mjs');
const _page10 = () => import('./pages/services.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/legal.astro", _page3],
    ["src/pages/lib/faq.ts", _page4],
    ["src/pages/lib/general.ts", _page5],
    ["src/pages/lib/navigation.ts", _page6],
    ["src/pages/lib/portfolio.ts", _page7],
    ["src/pages/lib/testimonials.ts", _page8],
    ["src/pages/portfolio.astro", _page9],
    ["src/pages/services.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2f8c26bb-b194-48be-9ccf-08a85416928d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
