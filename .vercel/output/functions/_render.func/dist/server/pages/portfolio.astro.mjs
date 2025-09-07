/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_pSUyj-cj.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout__w2-YxKU.mjs';
import 'clsx';
import { P as PORTFOLIO_HEADLINE, a as PORTFOLIO_SUBHEADLINE, b as PORTFOLIO } from '../chunks/portfolio_DrX0sBQA.mjs';
export { renderers } from '../renderers.mjs';

const $$Portfolio2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-stone-50 py-20"> <div class="max-w-6xl mx-auto px-4"> <div class="mb-12 text-center"> <h1 class="text-4xl font-extrabold tracking-tighter text-[var(--text-primary)] sm:text-5xl md:text-6xl">${PORTFOLIO_HEADLINE}</h1> <p class="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">${PORTFOLIO_SUBHEADLINE}</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> ${PORTFOLIO.map((item, index) => renderTemplate`<div class="group flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"> <div class="w-full aspect-[3/4] bg-cover bg-center"${addAttribute("background-image: url('" + item.imgUrl.src + "');", "style")}></div> </div>`)} </div> </div> </section>`;
}, "/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/Portfolio2.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Portfolio2", $$Portfolio2, {})} ` })}`;
}, "/Users/karanoberoi/Documents/Personal/taniamadahar/src/pages/portfolio.astro", void 0);

const $$file = "/Users/karanoberoi/Documents/Personal/taniamadahar/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Portfolio,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
