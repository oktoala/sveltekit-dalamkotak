interface Metadata {
	title: string;
	date: string;
	summary: string;
	logo: string;
}
interface Project {
	metadata: Metadata;
	path: string;
	default: ConstructorOfATypedSvelteComponent;
}



export default Project;
