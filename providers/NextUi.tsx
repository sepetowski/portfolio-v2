'use client';

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';

export const NextUi = ({ children }: { children: React.ReactNode }) => {
	return <NextUIProvider className='h-full '>{children}</NextUIProvider>;
};
