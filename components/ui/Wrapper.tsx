import { cn } from '@/lib/cn';
import React from 'react';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Wrapper = ({ children, className }: Props) => {
	return (
		<div className={cn('w-full max-w-screen-xl px-4 sm:px-6 mx-auto ', className)}>{children}</div>
	);
};
