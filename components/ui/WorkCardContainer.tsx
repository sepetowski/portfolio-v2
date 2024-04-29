'use client';
import React from 'react';
import { WorkCard } from './WorkCard';
import { WorkCard as IWorkCard } from '@/types/types';
import { useImageVariant } from '@/lib/hooks/useImageVariant';

interface Props {
	workCards: IWorkCard[];
}

export const WorkCardContainer = ({ workCards }: Props) => {
	const variant = useImageVariant();
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
