import type Project from '../../../@types/project';
import type { PageLoad } from './$types';
interface Params {
	slug: string;
}

export const load = (async ({ params }: { params: Params }) => {
	const project = (await import(`../${params.slug}.md`)) as Project;
	const { title, date, tech } = project.metadata;
	const Content = project.default;

	return {
		Content,
		title,
		date,
		tech
	};
}) satisfies PageLoad;
