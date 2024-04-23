'use client';
import React from 'react';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { Wrapper } from '@/components/ui/Wrapper';
import { Button } from '@nextui-org/react';
import { TextGenerateEffect } from '@/components/ui/textGenerateEffect';
import { scrolltoHash } from '@/lib/utils';

export const Header = () => {
	return (
		<AuroraBackground>
			<Wrapper>
				<div className='h-full flex flex-col  gap-4 md:gap-6 xl:gap-8 items-center justify-center text-center w-full '>
					<h1 className=' text-4xl md:text-5xl xl:text-7xl tracking-tight font-semibold '>
						Do{' '}
						<span className='tracking-tight inline  from-[#1c95ff] to-[rgb(73,102,248)]   text-4xl md:text-5xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b'>
							you
						</span>
						<p>
							want to{' '}
							<span className='tracking-tight inline  from-[#1c95ff] to-[rgb(73,102,248)] text-4xl md:text-5xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b'>
								know me
							</span>{' '}
							better?
						</p>
					</h1>

					<TextGenerateEffect
						className='w-full md:text-xl  xl:text-2xl text-default-400'
						words={'Building digital landscapes, pixel by pixel.'}
					/>
					<div className='flex items-center gap-4'>
						<Button
							onClick={() => {
								scrolltoHash('tools');
							}}
							className='rounded-3xl  px-unit-5 min-w-unit-20 h-unit-10 text-base gap-unit-2  md:px-unit-6 md:min-w-unit-24 md:h-unit-12 md:text-medium md:gap-unit-3 '
							color='primary'
							variant='ghost'>
							Check my tools
						</Button>
						<Button
							onClick={() => {
								scrolltoHash('about', 'start');
							}}
							className='rounded-3xl  px-unit-5 min-w-unit-20 h-unit-10 text-base gap-unit-2  md:px-unit-6 md:min-w-unit-24 md:h-unit-12 md:text-medium md:gap-unit-3 '
							variant='ghost'>
							About me
						</Button>
					</div>
				</div>
			</Wrapper>
		</AuroraBackground>
	);
};
