/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_pSUyj-cj.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D0qk2Esb.mjs';
import 'clsx';
import { G as GENERAL } from '../chunks/general_VftFHJyn.mjs';
export { renderers } from '../renderers.mjs';

const $$AboutPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="order-2 md:order-1"> <h1 class="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">Meet ${GENERAL.brand.name}</h1> <p class="mt-6 text-lg leading-8 text-[var(--text-secondary)]"> ${GENERAL.about.text} </p> <div class="mt-10"> <h2 class="text-2xl font-bold text-[var(--text-primary)]">Our Philosophy</h2> <p class="mt-4 text-lg leading-8 text-[var(--text-secondary)]"> ${GENERAL.about.text2} </p> </div> </div> <div class="order-1 md:order-2"> <div class="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg"> <div class="w-full h-full bg-center bg-no-repeat bg-cover"${addAttribute("background-image: url('" + GENERAL.about.imgUrl.src + "');", "style")}></div> </div> </div> </div> </div>`;
}, "/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/AboutPage.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Tania Madahar \u2013 Fashion Designer & Style Consultant", "description": "Learn about Tania Madahar's journey in fashion design, her expertise in Indian clothing, and her passion for creating customized, trend-forward looks." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutPageComponent", $$AboutPage, {})} ` })}`;
}, "/Users/karanoberoi/Documents/Personal/taniamadahar/src/pages/about.astro", void 0);

const $$file = "/Users/karanoberoi/Documents/Personal/taniamadahar/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
