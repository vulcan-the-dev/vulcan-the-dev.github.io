export interface Project {
	name: string;
	description: string;
	url: string;
	tags: string[];
}

export const projects: Project[] = [
	{
		name: "vulcan-the-dev.github.io",
		description:
			"This site. Dark, fast, statically exported Next.js — because even a portfolio should have standards.",
		url: "https://github.com/vulcan-the-dev/vulcan-the-dev.github.io",
		tags: ["Next.js", "Tailwind CSS", "TypeScript"],
	},
];
