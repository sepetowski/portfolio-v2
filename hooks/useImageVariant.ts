'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const useImageVariant = () => {
	const [variant, setVariant] = useState('dark');
	const { theme } = useTheme();

	useEffect(() => {
		if (theme) setVariant(theme);
	}, [theme]);

	return variant as 'light' | 'dark';
};
