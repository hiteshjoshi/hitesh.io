import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();



export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		stylesheet: '/rss/styles.xsl',
		description: SITE_DESCRIPTION,
		site: context.site,
		trailingSlash: false,
		items: posts.sort(
			(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
		).map((post) => ({
			...post.data,
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
			}),
			link: `/${post.slug}/`,
		})),
	});
}
