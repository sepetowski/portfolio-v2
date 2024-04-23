'use client';
import React, { useEffect, useState } from 'react';
import { Divider } from '@nextui-org/react';
import { StackCard } from './StackCard';
import { Wrapper } from '@/components/ui/Wrapper';
import { useTheme } from 'next-themes';
import { SparklesCore } from '@/components/ui/Sparkles';
import { StackCard as IStackCard } from '@/types/types';
import { cn } from '@/lib/cn';
interface Props {
	title: string;
	cards: IStackCard[];
	sparklesContainerClassName?: string;
	id?: string;
}

export const MyStack = ({ cards, title, sparklesContainerClassName, id }: Props) => {
	const [color, setColor] = useState('#FFFFFF');
	const { theme } = useTheme();

	useEffect(() => {
		theme === 'dark' ? setColor('#FFFFFF') : setColor('#000000');
	}, [theme]);
	return (
		<section id={id} className='w-full mt-6 py-4'>
			<Wrapper>
				<div className='w-full flex justify-center items-center gap-4 sm:gap-6 '>
					<Divider className='w-10 sm:w-16 md:w-40 lg:w-44  xl:w-80' />
					<h2 className='text-default-400 uppercase sm:text-lg md:text-2xl  text-center inline-block '>
						{title}
					</h2>
					<Divider className='w-10 sm:w-16 md:w-40 lg:w-44   xl:w-80' />
				</div>
			</Wrapper>

			<div className={cn('py-10 lg:py-14 relative', sparklesContainerClassName)}>
				<div className='w-full absolute inset-0 '>
					<SparklesCore
						id='tsparticlesfullpage'
						background='transparent'
						minSize={0.6}
						maxSize={1.4}
						particleDensity={100}
						className='w-full h-full'
						particleColor={color}
					/>
				</div>
				<Wrapper className='flex gap-4 lg:gap-6 xl:gap-8 justify-center items-center flex-wrap relative z-20'>
					{cards.map((stack, i) => (
						<StackCard key={i} details={stack} />
					))}
				</Wrapper>
			</div>
		</section>
	);
};
