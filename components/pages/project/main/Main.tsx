'use client';
import React from 'react';
import { ProjectPageInfo } from '@/types/types';
import { MyStack } from '@/components/ui/MyStack';
import { CardRevealContainer } from '@/components/ui/CardRevealContainer';
import { ABOUT_ME_CARDS } from '@/lib/constants';
import { Features } from './Features';

interface Props {
	projectInfo: ProjectPageInfo;
}

export const Main = ({ projectInfo }: Props) => {
	return (
		<main className='lg:mt-20 py-6 lg:py-10 w-full '>
			<section className='w-full mt-10'>
				<MyStack
					title='Created with'
					cards={projectInfo.technologies}
					sparklesContainerClassName='py-14 lg:py-24'
				/>
				<Features features={projectInfo.features} title={projectInfo.title} />
			</section>
		</main>
	);
};
