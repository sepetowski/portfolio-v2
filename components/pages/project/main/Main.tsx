'use client';
import React from 'react';
import { Project } from '@/types/types';
import { MyStack } from '@/components/ui/MyStack';
import { Features } from './Features';

interface Props {
	projectInfo: Project;
}

export const Main = ({ projectInfo }: Props) => {
	return (
		<main className='lg:mt-20 py-6 lg:py-10 w-full '>
			<section className='w-full mt-10'>
				<MyStack
					title='CREATED_WITH'
					cards={projectInfo.technologies}
					sparklesContainerClassName='py-14 lg:py-24'
				/>
				<Features features={projectInfo.features} title={projectInfo.title} />
			</section>
		</main>
	);
};
