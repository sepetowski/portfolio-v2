'use client';
import React from 'react';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { Wrapper } from '@/components/ui/Wrapper';
import { Button } from '@nextui-org/react';
import { TextGenerateEffect } from '@/components/ui/textGenerateEffect';
import { Link } from '@/navigation';

export const Header = () => {
	return (
		<AuroraBackground>
			<Wrapper>
				<div className='h-full flex flex-col gap-4 md:gap-6 xl:gap-8 items-center justify-center text-center w-full '>
					<h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-7xl tracking-tight font-semibold '>
						Hello, I&apos;m{' '}
						<span className='tracking-tight inline  from-[#1c95ff] to-[rgb(73,102,248)]   text-3xl sm:text-4xl md:text-5xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b'>
							Jakub
						</span>
						<p>
							I&apos;m a{' '}
							<span className='tracking-tight inline  from-[#1c95ff] to-[rgb(73,102,248)] text-3xl sm:text-4xl md:text-5xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b'>
								full-stack
							</span>{' '}
							web developer
						</p>
					</h1>

					<TextGenerateEffect
						className='w-full md:text-xl  xl:text-2xl text-default-400'
						words={'Building bridges between imagination and technology.'}
					/>

					<div className='flex items-center gap-4'>
						<Button
							href='/work'
							as={Link}
							className='rounded-3xl  px-unit-4 min-w-unit-18 h-unit-9 text-tiny gap-unit-2  md:px-unit-6 md:min-w-unit-24 md:h-unit-12 md:text-medium md:gap-unit-3 '
							color='primary'
							variant='ghost'>
							View my work
						</Button>
						<Button
							href='/'
							as={Link}
							className='rounded-3xl  px-unit-4 min-w-unit-18 h-unit-9 text-tiny gap-unit-2  md:px-unit-6 md:min-w-unit-24 md:h-unit-12 md:text-medium md:gap-unit-3 '
							variant='ghost'>
							About me
						</Button>
					</div>
				</div>
			</Wrapper>
		</AuroraBackground>
	);
};
