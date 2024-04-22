'use client';
import React from 'react';
import { Divider } from '@nextui-org/react';
import { Wrapper } from '@/components/ui/Wrapper';
import { ABOUT_ME_CARDS } from '@/lib/constants';
import { CardRevealContainer } from '@/components/ui/CardRevealContainer';

export const AboutMe = () => {
	return (
		<Wrapper>
			<section className='w-full mt-64'>
				<div className='w-full flex justify-center items-center gap-4 sm:gap-6 '>
					<Divider className='w-10 sm:w-16 md:w-40 lg:w-44  xl:w-80' />
					<h2 className='text-default-400 uppercase sm:text-lg md:text-2xl  text-center inline-block '>
						About me
					</h2>
					<Divider className='w-10 sm:w-16 md:w-40 lg:w-44   xl:w-80' />
				</div>
				<CardRevealContainer cards={ABOUT_ME_CARDS} />
			</section>
		</Wrapper>
	);
};
