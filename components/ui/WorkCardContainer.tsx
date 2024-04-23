'use client';
import React, { useEffect, useState } from 'react';
import { WorkCard } from './WorkCard';
import { useTheme } from 'next-themes';
import { WorkCard as IWorkCard } from '@/types/types';

interface Props {
	workCards: IWorkCard[];
}

export const WorkCardContainer = ({ workCards }: Props) => {
	const [variant, setVariant] = useState('dark');
	const { theme } = useTheme();

	useEffect(() => {
		if (theme) setVariant(theme);
	}, [theme]);

	return (
		<div className='mt-10 lg:mt-12  '>
			<div
				className={` flex-wrap justify-center items-center gap-8 ${
					variant === 'dark' ? 'flex' : 'hidden'
				}`}>
				{workCards.map((work, i) => (
					<WorkCard key={i} card={work} theme={'dark'} />
				))}
			</div>
			<div
				className={` flex-wrap justify-center items-center gap-8 ${
					variant === 'light' ? 'flex' : 'hidden'
				}`}>
				{workCards.map((work, i) => (
					<WorkCard key={i} card={work} theme={'light'} />
				))}
			</div>
		</div>
	);
};
