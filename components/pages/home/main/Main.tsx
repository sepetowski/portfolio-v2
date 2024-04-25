import React from 'react';
import { Divider } from '@nextui-org/react';
import { Wrapper } from '@/components/ui/Wrapper';
import { WorkCardContainer } from '../../../ui/WorkCardContainer';
import { MY_ALL_WORKS } from '@/lib/constants';

export const Main = () => {
	const recentWork = MY_ALL_WORKS.slice(0, 2);
	return (
		<main className='lg:mt-20 py-6 lg:py-10 w-full '>
			<Wrapper>
				<div className='w-full flex justify-center items-center gap-4 sm:gap-6 '>
					<Divider className='w-10 sm:w-16 md:w-40 lg:w-44  xl:w-80' />
					<h2 className='text-default-400 uppercase sm:text-lg md:text-2xl  text-center inline-block '>
						Some of my lates work
					</h2>
					<Divider className='w-10 sm:w-16 md:w-40 lg:w-44   xl:w-80' />
				</div>

				<WorkCardContainer workCards={recentWork} />
			</Wrapper>
		</main>
	);
};
