/* empty css                            */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_254f495f.mjs';
import { b as $$LogoSvg, $ as $$Layout } from './404_039bd180.mjs';
import { g as getCollection, $ as $$FormattedDate } from './__510ba98d.mjs';

const $$Astro = createAstro("https://hitesh.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="py-10 flex items-center justify-center"> ${renderComponent($$result2, "LogoSvg", $$LogoSvg, {})} </div>  <div class="flex flex-col items-center justify-center"> <div class="text-justify"> ${posts.map((post) => renderTemplate`<div class="py-4"> <a${addAttribute(`/${post.slug}/`, "href")}><h2 class="text-2xl font-semibold">${post.data.title}</h2></a> <span class="text-gray-500 text-right text-xs"> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.updatedDate || post.data.pubDate })} </span> </div>`)} </div> </div>   ` })}`;
}, "/Users/hj/Dev/hitesh.io/src/pages/index.astro", void 0);

const $$file = "/Users/hj/Dev/hitesh.io/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
