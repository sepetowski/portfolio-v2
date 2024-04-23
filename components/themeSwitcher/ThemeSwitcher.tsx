'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import { Switch } from '@nextui-org/react';
import { MoonIcon, SunIcon } from 'lucide-react';

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className='flex gap-2 '>
			{theme === 'dark' ? (
				<Button
					variant='light'
					size='sm'
					onClick={() => {
						setTheme('light');
					}}
					isIconOnly
					aria-label='change theme to light'>
					<SunIcon size={16} />
				</Button>
			) : (
				<Button
					variant='light'
					size='sm'
					onClick={() => {
						setTheme('dark');
					}}
					isIconOnly
					aria-label='change theme to dark'>
					<MoonIcon size={16} />
				</Button>
			)}
		</div>
	);
};
