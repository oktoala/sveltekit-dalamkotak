import type { PageLoad } from './$types';
interface Params {
	slug: string;
}
interface Metadata {
	title: string;
	date: string;
}
interface Post {
	metadata: Metadata;
	default: ConstructorOfATypedSvelteComponent;
}

export const load = (async ({ params }: { params: Params }) => {
	const post = (await import(`../${params.slug}.md`)) as Post;
	const { title, date } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date
	};
}) satisfies PageLoad;
