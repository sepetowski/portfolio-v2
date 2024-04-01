'use client';
import React from 'react';
import { ThemeProvider } from 'next-themes';

export const NextTheme = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider disableTransitionOnChange attribute='class' defaultTheme='dark'>
			{children}
		</ThemeProvider>
	);
};
