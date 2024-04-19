import { AboutMeCard, StackCard, WorkCard } from '@/types/types';
import { Book, Code, Gamepad2 } from 'lucide-react';

export const RECENT_WORKS: WorkCard[] = [
	{
		title: 'StudyFlow',
		subTitle: 'Increase your productivity',
		alt: 'StudyFlow app',
		linkHref: '/',
		src: '/images/studyFlowPreview',
	},
	{
		title: 'Kivi',
		subTitle: 'Social app for gamers',
		alt: 'Kivi app',
		linkHref: '/',
		src: '/images/kiviPreview',
	},
];

export const MY_ALL_WORKS: WorkCard[] = [
	{
		title: 'StudyFlow',
		subTitle: 'Increase your productivity',
		alt: 'StudyFlow app',
		linkHref: '/',
		src: '/images/studyFlowPreview',
	},
	{
		title: 'Kivi',
		subTitle: 'Social app for gamers',
		alt: 'Kivi app',
		linkHref: '/',
		src: '/images/kiviPreview',
	},
	{
		title: 'StudyFlow',
		subTitle: 'Increase your productivity',
		alt: 'StudyFlow app',
		linkHref: '/',
		src: '/images/studyFlowPreview',
	},
	{
		title: 'Kivi',
		subTitle: 'Social app for gamers',
		alt: 'Kivi app',
		linkHref: '/',
		src: '/images/kiviPreview',
	},
	{
		title: 'StudyFlow',
		subTitle: 'Increase your productivity',
		alt: 'StudyFlow app',
		linkHref: '/',
		src: '/images/studyFlowPreview',
	},
	{
		title: 'Kivi',
		subTitle: 'Social app for gamers',
		alt: 'Kivi app',
		linkHref: '/',
		src: '/images/kiviPreview',
	},
	{
		title: 'StudyFlow',
		subTitle: 'Increase your productivity',
		alt: 'StudyFlow app',
		linkHref: '/',
		src: '/images/studyFlowPreview',
	},
	{
		title: 'Kivi',
		subTitle: 'Social app for gamers',
		alt: 'Kivi app',
		linkHref: '/',
		src: '/images/kiviPreview',
	},
];

export const MY_STACK: StackCard[] = [
	{ alt: 'HTML', src: '/svg/html.svg' },
	{ alt: 'CSS', src: '/svg/css.svg' },
	{ alt: 'SASS', src: '/svg/sass.svg' },
	{ alt: 'Tailwindcss', src: '/svg/tailwindcss.svg' },
	{ alt: 'Shadcn', src: '/svg/shadcn.svg', needBgc: true },
	{ alt: 'JavaScript', src: '/svg/js.svg' },
	{ alt: 'TypeScript', src: '/svg/ts.svg' },
	{ alt: 'C#', src: '/svg/c4.svg' },
	{ alt: 'React', src: '/svg/react.svg' },
	{ alt: 'Next.js', src: '/svg/nextjs.svg', needBgc: true },
	{ alt: 'Zod', src: '/svg/zod.svg' },
	{ alt: 'React Router', src: '/svg/router.svg', needBgc: true },
	{ alt: 'React Redux', src: '/svg/redux.svg' },
	{ alt: 'TanStack Query', src: '/svg/reactQuery.svg' },
	{ alt: 'Prisma', src: '/svg/prisma.svg', needBgc: true },
	{ alt: 'PostgreSQL', src: '/svg/postgreSql.svg' },
	{ alt: 'Npm', src: '/svg/npm.svg' },
	{ alt: 'Git', src: '/svg/git.svg' },
	{ alt: 'Github', src: '/svg/github.svg', needBgc: true },
	{ alt: 'Visual Studio Code', src: '/svg/vscode.svg' },
	{ alt: 'Visual Studio', src: '/svg/viusalStudio.svg' },
];

export const ABOUT_ME_CARDS: AboutMeCard[] = [
	{
		title: 'Student',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, animi laudantium deleniti odio quisquam doloribus nam dignissimos harum repellendus consequuntur cumque minima! Deserunt aut, odit quo placeat sapiente dolorum accusantium?',
		Icon: Book,
	},
	{
		title: 'Hobby',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, animi laudantium deleniti odio quisquam doloribus nam dignissimos harum repellendus consequuntur cumque minima! Deserunt aut, odit quo placeat sapiente dolorum accusantium?',
		Icon: Gamepad2,
	},
	{
		title: 'Programming',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, animi laudantium deleniti odio quisquam doloribus nam dignissimos harum repellendus consequuntur cumque minima! Deserunt aut, odit quo placeat sapiente dolorum accusantium?',
		Icon: Code,
	},
];
