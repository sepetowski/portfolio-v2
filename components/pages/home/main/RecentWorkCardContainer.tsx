'use client';
import React, { useEffect, useState } from 'react';
import { RecentWorkCard } from './RecentWorkCard';
import { RECENT_WORKS } from '@/lib/constants';
import { useTheme } from 'next-themes';

export const RecentWorkCardContainer = () => {
	const [variant, setVariant] = useState('dark');
	const { theme } = useTheme();

	useEffect(() => {
		if (theme) setVariant(theme);
	}, [theme]);

	return (
		<div className='mt-10 flex  flex-wrap justify-center items-center gap-8 '>
			{RECENT_WORKS.map((work, i) => (
				<RecentWorkCard key={i} card={work} theme={variant as 'dark' | 'light'} />
			))}
		</div>
	);
};
