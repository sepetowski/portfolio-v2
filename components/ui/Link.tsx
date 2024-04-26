'use client';
import React from 'react';
import { Link as NextUiLink, LinkProps } from '@nextui-org/react';
import { Link as NextIntlLink } from '@/navigation';

export const Link = ({
	children,
	className,
	color = 'foreground',
	size = 'md',

	...props
}: LinkProps) => {
	return (
		<NextUiLink className={className} size={size} color={color} {...props} as={NextIntlLink}>
			{children}
		</NextUiLink>
	);
};
