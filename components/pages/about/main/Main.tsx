import React from 'react';
import { MyStack } from '@/components/ui/MyStack';
import { AboutMe } from './AboutMe';
import { MY_STACK } from '@/lib/constants';

export const Main = () => {
	return (
		<main className='lg:mt-20 py-6 lg:py-10 w-full '>
			<MyStack title='ALL_STACK_TTILE' cards={MY_STACK} id='tools' />
			<AboutMe />
		</main>
	);
};
