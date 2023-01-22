import type Project from '../../../@types/project';
import type { PageLoad } from './$types';
interface Params {
	slug: string;
}

export const load = (async ({ params }: { params: Params }) => {
	const project = (await import(`../${params.slug}.md`)) as Project;
	console.log(project);
	const { title, date } = project.metadata;
	const Content = project.default;

	return {
		Content,
		title,
		date
	};
}) satisfies PageLoad;
