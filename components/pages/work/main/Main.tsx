import { Wrapper } from '@/components/ui/Wrapper';
import React from 'react';
import { WorkCard } from './WorkCard';

export const Main = () => {
	return (
		<main className=' py-10 w-full '>
			<Wrapper>
				<div className='flex flex-wrap items-center justify-center gap-4'>
					<WorkCard />
					<WorkCard />
					<WorkCard />
					<WorkCard />
				</div>
			</Wrapper>
		</main>
	);
};
