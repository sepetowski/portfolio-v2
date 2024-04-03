import React from 'react';
import { Divider } from '@nextui-org/react';
import { Wrapper } from '@/components/ui/Wrapper';
import { RecentWorkCard } from './RecentWorkCard';

export const Main = () => {
	return (
		<main className='mt-20 py-10 w-full '>
			<Wrapper>
				<div className='w-full flex justify-center items-center gap-6 '>
					<Divider className='w-80' />
					<h2 className='text-default-400 uppercase text-2xl text-center '>
						Some of my lates work
					</h2>
					<Divider className='w-80' />
				</div>

				<div className='mt-10 flex  items-center gap-8 '>
					<RecentWorkCard />
					<RecentWorkCard />
					<RecentWorkCard />
				</div>
			</Wrapper>
		</main>
	);
};
