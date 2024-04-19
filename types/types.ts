import { LucideIcon } from 'lucide-react';

export interface WorkCard {
	alt: string;
	src: string;
	linkHref: string;
	title: string;
	subTitle: string;
}

export interface StackCard {
	alt: string;
	src: string;
	needBgc?: boolean;
}

export interface AboutMeCard {
	title: string;
	Icon: LucideIcon;
	desc: string;
}
