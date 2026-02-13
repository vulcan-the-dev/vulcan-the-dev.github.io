export interface Project {
	name: string;
	description: string;
	url: string;
	tags: readonly string[];
}

export interface SocialLink {
	platform: string;
	url: string;
	label?: string;
}

export interface NavigationItem {
	label: string;
	href: string;
}
