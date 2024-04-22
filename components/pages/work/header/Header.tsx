'use client';
import React from 'react';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { Wrapper } from '@/components/ui/Wrapper';
import { Button } from '@nextui-org/react';
import { TextGenerateEffect } from '@/components/ui/textGenerateEffect';

export const Header = () => {
	return (
		<AuroraBackground>
			<Wrapper>
				<div className='h-full flex flex-col  gap-4 md:gap-6 xl:gap-8 items-center justify-center text-center w-full '>
					<h1 className=' text-4xl md:text-5xl xl:text-7xl tracking-tight font-semibold '>
						Chcek out some of my{' '}
						<span className='tracking-tight inline  from-[#1c95ff] to-[rgb(73,102,248)]   text-4xl md:text-5xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b'>
							coolest
						</span>
						<p>
							<span className='tracking-tight inline  from-[#1c95ff] to-[rgb(73,102,248)] text-4xl md:text-5xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b'>
								projcets
							</span>{' '}
							that I have build
						</p>
					</h1>

					<TextGenerateEffect
						className='w-full md:text-xl  xl:text-2xl text-default-400'
						words={'Forging connections between creativity and innovation.'}
					/>

					<Button
						className='rounded-3xl  px-unit-5 min-w-unit-20 h-unit-10 text-base gap-unit-2  md:px-unit-6 md:min-w-unit-24 md:h-unit-12 md:text-medium md:gap-unit-3 '
						color='primary'
						variant='ghost'>
						Check out
					</Button>
				</div>
			</Wrapper>
		</AuroraBackground>
	);
};
