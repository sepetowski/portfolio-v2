'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div>
			<p>The current theme is: {theme}</p>
			<div className='flex flex-col gap-2 '>
				<Button color='primary' className='w-fit' onClick={() => setTheme('light')}>
					Light Mode
				</Button>
				<Button className='w-fit' onClick={() => setTheme('dark')}>
					Dark Mode
				</Button>
			</div>
		</div>
	);
};
