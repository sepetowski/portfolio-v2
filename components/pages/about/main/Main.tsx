import React from 'react';
import { Wrapper } from '@/components/ui/Wrapper';
import { MyStack } from './MyStack';
import { AboutMe } from './AboutMe';

export const Main = () => {
	return (
		<main className='lg:mt-20 py-6 lg:py-10 w-full '>
			<MyStack />
			<AboutMe />
		</main>
	);
};
