'use client';
import React from 'react';
import { Divider } from '@nextui-org/react';
import { Wrapper } from '@/components/ui/Wrapper';
import { CanvasRevealEffect } from '@/components/ui/CanvasRevealEffect';
import { AboutMeCard } from './AboutMeCard';
import { ABOUT_ME_CARDS } from '@/lib/constants';

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
				<div className='mt-10 lg:mt-12 flex flex-wrap items-center justify-center  w-full gap-4 gap-y-10 '>
					{ABOUT_ME_CARDS.map((card, i) => (
						<AboutMeCard key={i} title={card.title} Icon={card.Icon} desc={card.desc}>
							<CanvasRevealEffect
								animationSpeed={3}
								dotSize={2}
								containerClassName={`${i === 1 ? 'bg-secondary' : 'bg-primary'}`}
								colors={[[125, 211, 252]]}
							/>
						</AboutMeCard>
					))}
				</div>
			</section>
		</Wrapper>
	);
};
