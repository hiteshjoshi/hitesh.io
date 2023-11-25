import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_254f495f.mjs';
import 'clsx';

const html = "<p>This is a hello world post. I accidently deleted my ghost blog on railway.app!\nHence, I decided to write a static blog from scratch. I used astro, tailwind and some weekend motivation.</p>\n<p>It is a bare minimum theme, but will get the job done.</p>";

				const frontmatter = {"title":"Hello world","description":"Hello world","pubDate":"Nov 25 2023 14:57"};
				const file = "/Users/hj/Dev/hitesh.io/src/content/blog/hello-world.md";
				const url = undefined;
				function rawContent() {
					return "\nThis is a hello world post. I accidently deleted my ghost blog on railway.app!\nHence, I decided to write a static blog from scratch. I used astro, tailwind and some weekend motivation.\n\nIt is a bare minimum theme, but will get the job done.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
