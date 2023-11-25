import rss from '@astrojs/rss';
import { g as getCollection } from './__510ba98d.mjs';
import { S as SITE_TITLE, c as SITE_DESCRIPTION } from './404_039bd180.mjs';

async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${post.slug}/`,
		})),
	});
}

export { GET };
