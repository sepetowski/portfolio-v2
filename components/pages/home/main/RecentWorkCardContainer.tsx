'use client';
import React from 'react';
import { RecentWorkCard } from './RecentWorkCard';
import { RECENT_WORKS } from '@/lib/constants';
import { useTheme } from 'next-themes';

export const RecentWorkCardContainer = () => {
	const { theme } = useTheme();

	return (
		<div className='mt-10 flex  flex-wrap justify-center items-center gap-8 '>
			{RECENT_WORKS.map((work, i) => (
				<RecentWorkCard key={i} card={work} theme={theme as 'dark' | 'light'} />
			))}
		</div>
	);
};
