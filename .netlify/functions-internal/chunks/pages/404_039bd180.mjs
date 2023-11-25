import '@astrojs/internal-helpers/path';
/* empty css                            */import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, j as renderHead, k as renderSlot, F as Fragment } from '../astro_254f495f.mjs';
import 'clsx';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_f3164b1b.mjs';

const $$Astro$8 = createAstro("https://hitesh.io");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/hj/Dev/hitesh.io/node_modules/astro/components/Image.astro", void 0);

const $$Astro$7 = createAstro("https://hitesh.io");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/hj/Dev/hitesh.io/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/hj/Dev/hitesh.io/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$6 = createAstro("https://hitesh.io");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  import('../_slug_.60ad62c9_362d6057.mjs');
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/logo.png" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><!-- Font preloads --><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><style>
  {css}
</style>`;
}, "/Users/hj/Dev/hitesh.io/src/components/BaseHead.astro", void 0);

const $$Astro$5 = createAstro("https://hitesh.io");
let svgWidth = 100;
const $$LogoSvg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LogoSvg;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="text-5xl font-bold font-coder"><svg${addAttribute(svgWidth, "width")} viewBox="0 0 514 85" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="move." fill="#000000" fill-rule="nonzero"> <path d="M0,83 L21.8571429,83 L21.8571429,42.4741784 C21.8571429,29.6150235 31.2244898,20.2629108 43.7142857,20.2629108 C56.5943878,20.2629108 65.5714286,29.6150235 65.5714286,42.4741784 L65.5714286,83 L87.4285714,83 L87.4285714,42.4741784 C87.4285714,29.6150235 96.4056122,20.2629108 109.285714,20.2629108 C121.77551,20.2629108 131.142857,29.6150235 131.142857,42.4741784 L131.142857,83 L153,83 L153,42.4741784 C153,17.1455399 135.045918,0 109.67602,0 C97.5765306,0 85.4770408,5.0657277 77.2806122,13.6384977 C69.4744898,5.0657277 58.1556122,0 44.1045918,0 C21.8571429,0 0,17.1455399 0,42.4741784 L0,83 Z" id="Path"></path> <path d="M220,85 C243.571429,85 264,65.8944954 264,42.5 C264,17.1559633 245.535714,0 220,0 C196.428571,0 176,19.1055046 176,42.5 C176,67.8440367 194.464286,85 220,85 Z M220,64.7247706 C207.428571,64.7247706 198,54.9770642 198,42.5 C198,29.6330275 207.428571,20.2752294 220,20.2752294 C232.964286,20.2752294 242,29.6330275 242,42.5 C242,54.9770642 232.964286,64.7247706 220,64.7247706 Z" id="Shape"></path> <polygon id="Path" points="306 83 328 83 361 2 339 2 317 60.8028846 295 2 273 2"></polygon> <path d="M415,85 C426.785714,85 437.392857,80.3211009 445.25,72.5229358 L431.892857,58.8761468 C426,64.3348624 422.071429,66.2844037 415,66.2844037 C404,66.2844037 395.357143,59.6559633 392.607143,49.9082569 L459,49.9082569 L459,42.5 C457.428571,15.9862385 440.535714,0 415,0 C391.428571,0 371,19.1055046 371,42.5 C371,67.8440367 389.464286,85 415,85 Z M393,33.1422018 C396.142857,24.1743119 404,17.5458716 415,17.5458716 C426.392857,17.5458716 434.25,23.7844037 437.392857,33.1422018 L393,33.1422018 Z" id="Shape"></path> <path d="M500.5,85 C507.934783,85 514,78.9347826 514,71.5 C514,64.0652174 507.934783,58 500.5,58 C493.065217,58 487,64.0652174 487,71.5 C487,78.9347826 493.065217,85 500.5,85 Z" id="Path"></path> </g> </g> </svg> </a>`;
}, "/Users/hj/Dev/hitesh.io/src/components/LogoSvg.astro", void 0);

const $$Astro$4 = createAstro("https://hitesh.io");
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<div class="flex text-center items-center mt-4 p-4 space-x-2 text-gray-900 md:py-0"> ${renderComponent($$result, "LogoSvg", $$LogoSvg, {})} </div>`;
}, "/Users/hj/Dev/hitesh.io/src/components/Logo.astro", void 0);

const $$Astro$3 = createAstro("https://hitesh.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="pt-10"> <div class="justify-start flex gap-x-5"> <a href="https://twitter.com/hiteshjoshi" target="_blank" class="text-gray-500 hover:text-gray-800"> <span class="sr-only">Follow Hitesh on Twitter</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> </a> <a href="https://github.com/hiteshjoshi" target="_blank" class="text-gray-500 hover:text-gray-800"> <span class="sr-only">Go to Hitesh's GitHub</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> </a> <a href="https://cal.com/hiteshj" target="_blank" class="text-gray-500 hover:text-gray-800"> <span class="sr-only">Hitesh's calendar</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> </a> </div> </footer>`;
}, "/Users/hj/Dev/hitesh.io/src/components/Footer.astro", void 0);

const img = new Proxy({"src":"/_astro/hitesh.cecf2b87.jpeg","width":387,"height":387,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://hitesh.io");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="flex max-w-full pl-10"> <div class="w-full"> <div class="flex items-start justify-between pb-1"> <div class="flex items-center h-auto ml-3"> <button @mouseover="setTimeout(function() {slideOverOpen=true},100);" @click="slideOverOpen=!slideOverOpen" class="absolute top-0 right-0 z-30 text-white flex items-center justify-center p-3 mt-4 mr-5 space-x-1 text-xs font-medium uppercase border rounded-full bg-gray-800 border-neutral-200"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4"><g x-show="slideOverOpen" x-transition:enter="transition ease-out duration-50" x-transition:enter-start="opacity-0 scale-90" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="transition ease-in duration-50" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-90"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></g><g x-show="!slideOverOpen" x-transition:enter="transition ease-out duration-50" x-transition:enter-start="opacity-0 scale-90" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="transition ease-in duration-50" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-90"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></g></svg> </button> </div> </div> <div x-show="slideOverOpen" @mouseleave="setTimeout(function() {slideOverOpen=false;}, 800)" x-transition:enter="transform transition ease-in-out delay-50 duration-100 sm:duration-100" x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transform transition ease-in-out delay-50 duration-100 sm:duration-100" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" class="fixed inset-y-0 right-0 xl:w-[20%] w-full md:w-1/3 sm:w-full flex flex-col h-full py-5 overflow-y-scroll bg-white border-l border-gray-200" style="display:none;"> <div class="px-4 sm:px-5 mt-10 font-semibold font-mono">about</div> <div class="relative flex-1 px-4 mt-5 sm:px-5"> <div class="absolute inset-0 px-4 sm:px-5"> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": "Hitesh Joshi", "class": "rounded-md mb-2 grayscale hover:grayscale-0" })} <div class="relative h-full overflow-hidden rounded-md border-neutral-300">
नमस्ते! this blog is where I jot down my random thoughts, cool stuff
            I'm learning, and tales from my startup life. Always up for a good
            chat and a laugh. <span class="text-blue-800"><a href="https://ploton.dev">@plotondev</a></span><br> <span class="text-xs">- Hitesh Joshi, CEO | Ploton, Inc.</span> <div>${renderComponent($$result, "Footer", $$Footer, {})}</div> </div> </div> </div> </div> </div> </div>`;
}, "/Users/hj/Dev/hitesh.io/src/components/Navigation.astro", void 0);

const SITE_TITLE = "move. ~ writings by Hitesh";
const SITE_DESCRIPTION = "Welcome to move. ,this is where I jot down my random thoughts, cool stuff I'm learning, and tales from my startup life. Always up for a good chat and a laugh. ";

const $$Astro$1 = createAstro("https://hitesh.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const isHomePage = Astro2.url.pathname.split("/")[0] !== "";
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body x-data="{slideOverOpen: false }" class="bg-white text-gray-800 antialiased"> <div class="flex"> ${isHomePage ? renderTemplate`${renderComponent($$result, "Logo", $$Logo, {})}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`} ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> <!-- Main container --> <div class="container mx-auto px-4 py"> ${renderSlot($$result, $$slots["default"])} <!-- Down arrow --> <!-- <div class="text-center py-10">
        <div class="text-3xl">&darr;</div>
      </div>
	   --> </div> </body></html>`;
}, "/Users/hj/Dev/hitesh.io/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://hitesh.io");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="py-20 flex items-center justify-center"> ${renderComponent($$result2, "LogoSvg", $$LogoSvg, {})} </div>  <div class="py-15 space-y-6 w-96 text-justify content-center mx-auto" x-init="slideOverOpen=true"> <h2 class="text-4xl font-bold animate-bounce">404</h2> <h2 class="text-4xl font-bold font-coder pb-10">
you gotta <span class="animate-ping">&darr;</span> </h2> ${renderComponent($$result2, "LogoSvg", $$LogoSvg, {})} </div> ` })}`;
}, "/Users/hj/Dev/hitesh.io/src/pages/404.astro", void 0);

const $$file = "/Users/hj/Dev/hitesh.io/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, SITE_TITLE as S, _404 as _, $$Logo as a, $$LogoSvg as b, SITE_DESCRIPTION as c, imageConfig as i };
