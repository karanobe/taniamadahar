/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderScript, k as renderComponent } from '../chunks/astro/server_pSUyj-cj.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout__w2-YxKU.mjs';
import 'clsx';
import { G as GENERAL } from '../chunks/general_VftFHJyn.mjs';
import { T as TESTIMONIALS } from '../chunks/testimonials_FNvTWVCD.mjs';
import { F as FAQS } from '../chunks/faq_ApXCsP5e.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative"> <div class="absolute inset-0 bg-black/40 z-10"></div> <div class="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"${addAttribute("background-image: url('" + GENERAL.hero.imgUrl.src + "')", "style")} ;> <div class="relative z-20 text-center text-white max-w-3xl px-4"> <h1 class="text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-4">${GENERAL.hero.headline}</h1> <p class="text-lg md:text-xl font-light mb-8">${GENERAL.hero.subheadline}</p> <a${addAttribute(GENERAL.hero.cta.url, "href")} target="_blank" class="inline-block"> <button class="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary-brown text-white text-lg font-semibold leading-normal tracking-wide hover:bg-opacity-90 transition-all"> <span class="truncate">${GENERAL.hero.cta.text}</span> </button> </a> </div> </div> </section>`;
}, "/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-4 text-center"> <div class="max-w-3xl mx-auto"> <h2 class="text-stone-800 text-4xl font-bold tracking-tighter mb-4">About Tania Madahar</h2> <p class="text-stone-600 text-lg leading-relaxed"> ${GENERAL.aboutHome.text} </p> </div> </section>`;
}, "/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/About.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-stone-50 py-20"> <div class="max-w-6xl mx-auto px-4"> <h2 class="text-stone-800 text-4xl font-bold tracking-tighter text-center mb-12">Portfolio</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> ${GENERAL.portfolio.map((item, index) => renderTemplate`<div class="group flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"> <div class="w-full aspect-[3/4] bg-cover bg-center"${addAttribute("background-image: url('" + item.imgUrl.src + "');", "style")}></div> </div>`)} </div> </div> </section>`;
}, "/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/Portfolio.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-4"> <div class="max-w-4xl mx-auto"> <h2 class="text-stone-800 text-4xl font-bold tracking-tighter text-center mb-12">What Our Clients Say</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-white p-8 rounded-lg shadow-sm"> <p class="text-stone-600 italic mb-4"> ${TESTIMONIALS[0].text} </p> <p class="text-stone-800 font-semibold">- ${TESTIMONIALS[0].name}</p> </div> <div class="bg-white p-8 rounded-lg shadow-sm"> <p class="text-stone-600 italic mb-4">${TESTIMONIALS[1].text}</p> <p class="text-stone-800 font-semibold">- ${TESTIMONIALS[1].name}</p> </div> <div class="bg-white p-8 rounded-lg shadow-sm md:col-span-2"> <p class="text-stone-600 italic mb-4"> ${TESTIMONIALS[2].text} </p> <p class="text-stone-800 font-semibold">- ${TESTIMONIALS[2].name}</p> </div> </div> </div> </section>`;
}, "/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/Testimonials.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary-stone-50 py-20 px-4 sm:px-6 lg:px-8" id="faq"> <div class="max-w-4xl mx-auto"> <h2 class="text-stone-800 text-4xl font-bold leading-tight tracking-[-0.015em] text-center mb-12">Frequently Asked Questions</h2> <div class="space-y-4" id="faq-accordion"> ${FAQS.map((item, index) => renderTemplate`<div class="bg-primary-stone-50 rounded-lg overflow-hidden shadow-sm"> <button class="w-full p-6 text-left flex justify-between items-center hover:bg-primary-stone-100 transition-colors duration-200 border-b border-stone-200" aria-expanded="false"${addAttribute(`faq-panel-${index + 1}`, "aria-controls")} data-accordion-button> <h3 class="text-stone-800 text-xl font-bold">${item.question}</h3> <svg class="w-6 h-6 text-stone-800 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-accordion-icon> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div${addAttribute(`faq-panel-${index + 1}`, "id")} role="region" aria-hidden="true" class="overflow-hidden max-h-0 opacity-0 transition-[max-height,opacity] duration-300 ease-out" data-accordion-panel> <p class="text-stone-600 px-6 pb-6 pt-2">${item.answer}</p> </div> </div>`)} </div> </div> </section> ${renderScript($$result, "/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/Faq.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/Faq.astro", void 0);

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative"> <div class="absolute inset-0 bg-black/40 z-10"></div> <div class="relative min-h-[400px] flex items-center justify-center bg-cover bg-center"${addAttribute("background-image: url('" + GENERAL.banner.imgUrl.src + "')", "style")} ;> <div class="relative z-20 text-center text-white max-w-3xl px-4"> <h1 class="text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-4">${GENERAL.banner.title}</h1> <p class="text-lg md:text-xl font-light mb-8">${GENERAL.banner.text}</p> <a${addAttribute(GENERAL.banner.buttonUrl, "href")} target="_blank" class="inline-block"> <button class="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary-brown text-white text-lg font-semibold leading-normal tracking-wide hover:bg-opacity-90 transition-all"> <span class="truncate">${GENERAL.banner.buttonText}</span> </button> </a> </div> </div> </section>`;
}, "/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/Banner.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Portfolio", $$Portfolio, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Faq", $$Faq, {})} ${renderComponent($$result2, "Banner", $$Banner, {})} ` })}`;
}, "/Users/karanoberoi/Documents/Personal/taniamadahar/src/pages/index.astro", void 0);

const $$file = "/Users/karanoberoi/Documents/Personal/taniamadahar/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
