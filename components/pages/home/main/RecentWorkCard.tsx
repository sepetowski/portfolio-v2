'use client';
import React from 'react';
import { Card, CardFooter, Image, Button } from '@nextui-org/react';
import { Link } from '@/navigation';
import { ArrowRight } from 'lucide-react';

interface Props {
	alt: string;
	src: string;
	linkHref: string;
	title: string;
	subTitle: string;
}

export const RecentWorkCard = () => {
	return (
		<Card isFooterBlurred className='w-full h-80 col-span-12 sm:col-span-7'>
			<Image
				removeWrapper
				alt='Relaxing app background'
				className='z-0 w-full h-full object-cover'
				src='/images/studyFlowPreview.png'
			/>
			<CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
				<div className='flex flex-grow gap-2 items-center'>
					<div className='flex flex-col'>
						<h3 className='text-tiny text-white/60'>Breathing App</h3>
						<h4 className='text-tiny text-white/60'>Get a good nights sleep.</h4>
					</div>
				</div>
				<Button
					href='/'
					as={Link}
					color='default'
					variant='light'
					endContent={<ArrowRight size={16} />}>
					Check
				</Button>
			</CardFooter>
		</Card>
	);
};
