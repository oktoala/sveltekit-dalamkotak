import type Project from '../../@types/project';

export const fetchProjectsMD = async () => {
	const allProjectFiles = import.meta.glob<Project>('/src/routes/project/*.md');
	const iterableProjectsFiles = Object.entries(allProjectFiles);

	const allProjects = await Promise.all(
		iterableProjectsFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const projectPath = path.slice(11, -3);

			return {
				metadata: metadata,
				path: projectPath
			};
		})
	);
	return allProjects;
};
