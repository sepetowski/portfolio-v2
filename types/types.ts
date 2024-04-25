import { LucideIcon } from 'lucide-react';

export interface WorkCard {
	alt: string;
	src: string;
	linkHref: string;
	title: string;
	subTitle: string;
	hasDarkMorde?: boolean;
}

export interface StackCard {
	alt: string;
	src: string;
	needBgc?: boolean;
}

export interface CardReveal {
	title: string;
	Icon: LucideIcon;
	desc: string;
}

export interface ProjectTitle {
	firstSection: string;
	secondSection: string;
	thirdSection: string;
	fourthSection: string;
	fifthSection: string;
}

export interface Feature {
	title: string;
	desc: string;
}

export interface ProjectPageInfo {
	title: string;
	overview: ProjectTitle;
	technologies: StackCard[];
	repoLink: string;
	liveLink: string | null;
	lightThemeImagesLinks: string[];
	darkThemeImagesLinks: string[] | null;
	features: Feature[];
}
