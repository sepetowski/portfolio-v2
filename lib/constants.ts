import { CardReveal, StackCard, WorkCard } from '@/types/types';
import {
	AlarmClockCheck,
	Bell,
	Book,
	BookMarked,
	Calendar,
	Code,
	Folder,
	Gamepad2,
	Globe,
	HandHeart,
	Images,
	KeyRound,
	MessageSquare,
	Palette,
	PencilRuler,
	Tags,
	UserPlus,
	UserSearch,
	UsersRound,
	Workflow,
} from 'lucide-react';

export const RECENT_WORKS: WorkCard[] = [
	{
		title: 'StudyFlow',
		subTitle: 'Increase your productivity',
		alt: 'StudyFlow app',
		linkHref: '/work/StudyFlow',
		src: '/images/studyFlowPreview',
	},
	{
		title: 'Kivi',
		subTitle: 'Social app for gamers',
		alt: 'Kivi app',
		linkHref: '/work/Kivi',
		src: '/images/kiviPreview',
	},
];

export const MY_ALL_WORKS: WorkCard[] = [
	{
		title: 'StudyFlow',
		subTitle: 'Increase your productivity',
		alt: 'StudyFlow app',
		linkHref: '/work/StudyFlow',
		src: '/images/studyFlowPreview',
	},
	{
		title: 'Kivi',
		subTitle: 'Social app for gamers',
		alt: 'Kivi app',
		linkHref: '/work/Kivi',
		src: '/images/kiviPreview',
	},
	{
		title: 'My portfolio webiste',
		subTitle: 'It is this webiste',
		alt: 'My portfolio webiste',
		linkHref: '/work/Portfolio',
		src: '/images/studyFlowPreview',
	},
	{
		title: 'JustNoted',
		subTitle: 'Manage your notes',
		alt: 'JustNoted app',
		linkHref: '/work/JustNoted',
		src: '/images/kiviPreview',
	},

	{
		title: "Natalia's portfolio website",
		subTitle: 'Made on order',
		alt: "Natalia's portfolio website",
		linkHref: '/work/Natalia-website',
		src: '/images/kiviPreview',
	},
	{
		title: 'TravelMark',
		subTitle: 'Stay organized while traveling',
		alt: 'TravelMark app',
		linkHref: '/work/TravelMark',
		src: '/images/studyFlowPreview',
	},
	{
		title: 'Recipe App',
		subTitle: 'Find the recipes you want',
		alt: 'Recipe App',
		linkHref: '/work/Recipe-App',
		src: '/images/kiviPreview',
	},
	{
		title: 'GnNews',
		subTitle: 'The lates news',
		alt: 'GnNews app',
		linkHref: '/work/GnNews',
		src: '/images/studyFlowPreview',
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
	{ alt: 'Zustand', src: '/images/zustand.png' },
	{ alt: 'React Router', src: '/svg/router.svg', needBgc: true },
	{ alt: 'React Redux', src: '/svg/redux.svg' },
	{ alt: 'React Flow', src: '/svg/reactFlow.svg', needBgc: true },
	{ alt: 'TanStack Query', src: '/svg/reactQuery.svg' },
	{ alt: 'Axios', src: '/svg/axios.svg' },
	{ alt: 'Prisma', src: '/svg/prisma.svg', needBgc: true },
	{ alt: 'PostgreSQL', src: '/svg/postgreSql.svg' },
	{ alt: 'NextAuth.js', src: '/images/nextAuth.png' },
	{ alt: 'Firebase', src: '/svg/firebase.svg' },
	{ alt: 'Supabase', src: '/svg/supabase.svg', needBgc: true },
	{ alt: 'Pusher', src: '/images/pusher.png', needBgc: true },
	{ alt: 'Npm', src: '/svg/npm.svg' },
	{ alt: 'Git', src: '/svg/git.svg' },
	{ alt: 'Github', src: '/svg/github.svg', needBgc: true },
	{ alt: 'Visual Studio Code', src: '/svg/vscode.svg' },
	{ alt: 'Visual Studio', src: '/svg/viusalStudio.svg' },
];

export const ABOUT_ME_CARDS: CardReveal[] = [
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

export const FEATURES_ICONS = [
	{
		title: 'StudyFlow',
		icons: [
			KeyRound,
			Globe,
			UsersRound,
			Folder,
			Workflow,
			PencilRuler,
			MessageSquare,
			Calendar,
			AlarmClockCheck,
			Bell,
			Tags,
			UserPlus,
		],
	},
	{
		title: 'Kivi',
		icons: [
			KeyRound,
			UsersRound,
			Images,
			HandHeart,
			Palette,
			MessageSquare,
			Bell,
			UserSearch,
			BookMarked,
		],
	},
	{
		title: 'JustNoted',
		icons: [Book, Code, Gamepad2, Book, Code, Gamepad2, Book, Code, Gamepad2],
	},
];
