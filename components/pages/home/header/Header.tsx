'use client';
import React from 'react';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { Wrapper } from '@/components/ui/Wrapper';
import { Button } from '@nextui-org/react';
import { MoveRight } from 'lucide-react';
import { TextGenerateEffect } from '@/components/ui/textGenerateEffect';

export const Header = () => {
	return (
		<AuroraBackground>
			<Wrapper>
				<div className='h-full flex flex-col gap-8 items-center justify-center text-center w-full '>
					<h1 className=' text-7xl tracking-tight font-semibold '>
						Hello, I&apos;m{' '}
						<span className='tracking-tight inline  from-[#1c95ff] to-[rgb(73,102,248)]   text-7xl bg-clip-text text-transparent bg-gradient-to-b'>
							Jakub
						</span>
						<p>
							I&apos;m a{' '}
							<span className='tracking-tight inline  from-[#1c95ff] to-[rgb(73,102,248)] text-7xl bg-clip-text text-transparent bg-gradient-to-b'>
								full-stack
							</span>{' '}
							web developer
						</p>
					</h1>

					<TextGenerateEffect
						className='w-full text-2xl text-default-400'
						words={'Building bridges between imagination and technology.'}
					/>

					<div className='flex items-center gap-4'>
						<Button className='rounded-3xl' size='lg' color='primary' variant='ghost'>
							View my work
						</Button>
						<Button className='rounded-3xl' size='lg' variant='ghost'>
							About me
						</Button>
					</div>
				</div>
			</Wrapper>
		</AuroraBackground>
	);
};
