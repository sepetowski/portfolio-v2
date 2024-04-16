import React from 'react';
import { Wrapper } from '@/components/ui/Wrapper';
import { MyStack } from './MyStack';

export const Main = () => {
	return (
		<main className='lg:mt-20 py-6 lg:py-10 w-full '>
			<Wrapper>
				<MyStack />
			</Wrapper>
		</main>
	);
};
