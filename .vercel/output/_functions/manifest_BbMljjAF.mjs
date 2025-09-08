import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_pSUyj-cj.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CcpdWaWl.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/karanoberoi/Documents/Personal/taniamadahar/","cacheDir":"file:///Users/karanoberoi/Documents/Personal/taniamadahar/node_modules/.astro/","outDir":"file:///Users/karanoberoi/Documents/Personal/taniamadahar/dist/","srcDir":"file:///Users/karanoberoi/Documents/Personal/taniamadahar/src/","publicDir":"file:///Users/karanoberoi/Documents/Personal/taniamadahar/public/","buildClientDir":"file:///Users/karanoberoi/Documents/Personal/taniamadahar/dist/client/","buildServerDir":"file:///Users/karanoberoi/Documents/Personal/taniamadahar/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.BzQDR7mr.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.BzQDR7mr.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.BzQDR7mr.css"}],"routeData":{"route":"/legal","isIndex":false,"type":"page","pattern":"^\\/legal\\/?$","segments":[[{"content":"legal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/legal.astro","pathname":"/legal","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/lib/faq","isIndex":false,"type":"endpoint","pattern":"^\\/lib\\/faq\\/?$","segments":[[{"content":"lib","dynamic":false,"spread":false}],[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lib/faq.ts","pathname":"/lib/faq","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/lib/general","isIndex":false,"type":"endpoint","pattern":"^\\/lib\\/general\\/?$","segments":[[{"content":"lib","dynamic":false,"spread":false}],[{"content":"general","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lib/general.ts","pathname":"/lib/general","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/lib/navigation","isIndex":false,"type":"endpoint","pattern":"^\\/lib\\/navigation\\/?$","segments":[[{"content":"lib","dynamic":false,"spread":false}],[{"content":"navigation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lib/navigation.ts","pathname":"/lib/navigation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/lib/portfolio","isIndex":false,"type":"endpoint","pattern":"^\\/lib\\/portfolio\\/?$","segments":[[{"content":"lib","dynamic":false,"spread":false}],[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lib/portfolio.ts","pathname":"/lib/portfolio","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/lib/testimonials","isIndex":false,"type":"endpoint","pattern":"^\\/lib\\/testimonials\\/?$","segments":[[{"content":"lib","dynamic":false,"spread":false}],[{"content":"testimonials","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lib/testimonials.ts","pathname":"/lib/testimonials","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.BzQDR7mr.css"}],"routeData":{"route":"/portfolio","isIndex":false,"type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio.astro","pathname":"/portfolio","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.BzQDR7mr.css"},{"type":"inline","content":":root{--primary-color: #756657}body{font-family:Manrope,sans-serif}.active-nav-link[data-astro-cid-ucd2ps2b]{color:var(--primary-color)!important;font-weight:700;border-bottom:2px solid var(--primary-color);padding-bottom:4px}\n"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.BzQDR7mr.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/karanoberoi/Documents/Personal/taniamadahar/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/karanoberoi/Documents/Personal/taniamadahar/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/karanoberoi/Documents/Personal/taniamadahar/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/karanoberoi/Documents/Personal/taniamadahar/src/pages/legal.astro",{"propagation":"none","containsHead":true}],["/Users/karanoberoi/Documents/Personal/taniamadahar/src/pages/portfolio.astro",{"propagation":"none","containsHead":true}],["/Users/karanoberoi/Documents/Personal/taniamadahar/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/legal@_@astro":"pages/legal.astro.mjs","\u0000@astro-page:src/pages/lib/faq@_@ts":"pages/lib/faq.astro.mjs","\u0000@astro-page:src/pages/lib/general@_@ts":"pages/lib/general.astro.mjs","\u0000@astro-page:src/pages/lib/navigation@_@ts":"pages/lib/navigation.astro.mjs","\u0000@astro-page:src/pages/lib/portfolio@_@ts":"pages/lib/portfolio.astro.mjs","\u0000@astro-page:src/pages/lib/testimonials@_@ts":"pages/lib/testimonials.astro.mjs","\u0000@astro-page:src/pages/portfolio@_@astro":"pages/portfolio.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BbMljjAF.mjs","/Users/karanoberoi/Documents/Personal/taniamadahar/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DR80oREr.mjs","/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/Faq.astro?astro&type=script&index=0&lang.ts":"_astro/Faq.astro_astro_type_script_index_0_lang.C2u9KyLw.js","/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.PipdflTt.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/Faq.astro?astro&type=script&index=0&lang.ts","const i=document.getElementById(\"faq-accordion\");i&&i.addEventListener(\"click\",s=>{const r=s.target;if(!r)return;const a=r.closest(\"[data-accordion-button]\");if(!a)return;const o=a.getAttribute(\"aria-controls\");if(!o)return;const t=document.getElementById(o),c=a.querySelector(\"[data-accordion-icon]\"),d=a.getAttribute(\"aria-expanded\")===\"true\";if(i.querySelectorAll(\"[data-accordion-button]\").forEach(e=>{e!==a&&e.setAttribute(\"aria-expanded\",\"false\")}),i.querySelectorAll(\"[data-accordion-panel]\").forEach(e=>{e!==t&&(e.style.maxHeight=\"0px\",e.setAttribute(\"aria-hidden\",\"true\"),e.classList.add(\"opacity-0\"),e.previousElementSibling?.querySelector(\"[data-accordion-icon]\")?.classList.remove(\"rotate-180\"))}),d)a.setAttribute(\"aria-expanded\",\"false\"),t&&(t.style.maxHeight=\"0px\",t.setAttribute(\"aria-hidden\",\"true\"),t.classList.add(\"opacity-0\"),c?.classList.remove(\"rotate-180\"));else if(a.setAttribute(\"aria-expanded\",\"true\"),t){const e=t.scrollHeight;t.style.maxHeight=e+\"px\",t.setAttribute(\"aria-hidden\",\"false\"),t.classList.remove(\"opacity-0\"),c?.classList.add(\"rotate-180\")}});"],["/Users/karanoberoi/Documents/Personal/taniamadahar/src/components/Footer.astro?astro&type=script&index=0&lang.ts","function e(){new Date().getFullYear(),document.getElementById(\"currentYear\").textContent=new Date().getFullYear().toString()}e();"]],"assets":["/_astro/portfolio1.CNJgh8VB.jpg","/_astro/tm-logo.BXReASNs.avif","/_astro/portfolio3.CYmB-r_w.jpg","/_astro/tania-madahar.aHpSxOHj.avif","/_astro/portfolio2.DbX2IiN8.jpg","/_astro/portfolio7.Comq45Jm.jpg","/_astro/portfolio9.BgLvYPMM.jpg","/_astro/portfolio11.CccG4Ouc.jpg","/_astro/portfolio4.9YyZZO6P.jpg","/_astro/portfolio6.dJF_klVe.jpg","/_astro/portfolio5.7Rr045qo.jpg","/_astro/banner.DDVslSdx.jpg","/_astro/portfolio10.B5j35gTB.jpg","/_astro/portfolio12.Blxbgidr.jpg","/_astro/portfolio8.DUV4nxbM.jpg","/_astro/hero.BVOj7KeR.jpg","/_astro/about.BzQDR7mr.css","/favicon.png","/og_image.png","/robots.txt"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"BQQdBgZc+FeGmLUCy8PEkTBBhUCzUlaCSFjBgPzBmXs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
