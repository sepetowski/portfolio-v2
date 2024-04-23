'use client';
import React from 'react';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { Wrapper } from '@/components/ui/Wrapper';
import { Image } from '@nextui-org/react';
import NextImage from 'next/image';
import { ProjectTitle } from '@/types/types';
import { Button } from '@nextui-org/react';
import { Link } from '@/navigation';
import { TextGenerateEffect } from '@/components/ui/textGenerateEffect';
import { useImageVariant } from '@/hooks/useImageVariant';

interface Props {
	title: string;
	overview: ProjectTitle;
	imageLink: string[];
	liveLink: string;
	repoLink: string;
}

export const Header = ({ imageLink, overview, title, liveLink, repoLink }: Props) => {
	const variant = useImageVariant();
	return (
		<AuroraBackground>
			<Wrapper className='mt-60'>
				<div className='h-full flex flex-col gap-4 md:gap-6 xl:gap-8 items-center justify-end text-center  w-full '>
					<h1 className='text-4xl md:text-5xl xl:text-7xl tracking-tight font-semibold '>
						{overview.firstSection}{' '}
						<span className='tracking-tight inline  from-[#1c95ff] to-[rgb(73,102,248)]   text-4xl md:text-5xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b'>
							{overview.secondSection}
						</span>
						<p>
							{overview.thirdSection}{' '}
							<span className='tracking-tight inline  from-[#1c95ff] to-[rgb(73,102,248)] text-4xl md:text-5xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b'>
								{overview.fourthSection}
							</span>{' '}
							{overview.fifthSection}
						</p>
					</h1>
					<TextGenerateEffect
						className='w-full md:text-xl  xl:text-2xl text-default-400'
						words={'Passionately crafted with heart and soul.'}
					/>
					<div className='flex items-center gap-4'>
						<Button
							target='_blank'
							href={liveLink}
							as={Link}
							className='rounded-3xl  px-unit-5 min-w-unit-20 h-unit-10 text-base gap-unit-2  md:px-unit-6 md:min-w-unit-24 md:h-unit-12 md:text-medium md:gap-unit-3 '
							color='primary'
							variant='ghost'>
							Try it out!
						</Button>
						<Button
							target='_blank'
							href={repoLink}
							as={Link}
							className='rounded-3xl  px-unit-5 min-w-unit-20 h-unit-10 text-base gap-unit-2  md:px-unit-6 md:min-w-unit-24 md:h-unit-12 md:text-medium md:gap-unit-3 '
							variant='ghost'>
							Repo code
						</Button>
					</div>
				</div>

				<div className='w-full my-32'>
					{imageLink.length === 2 ? (
						<>
							<Image
								priority
								width={1500}
								height={1200}
								as={NextImage}
								className={`w-full h-full object-cover ${variant === 'dark' ? 'block' : 'hidden'}`}
								alt={title}
								src={imageLink[0]}
							/>
							<Image
								priority
								width={1500}
								height={1200}
								as={NextImage}
								className={`w-full h-full object-cover ${variant === 'light' ? 'block' : 'hidden'}`}
								alt={title}
								src={imageLink[1]}
							/>
						</>
					) : (
						<Image
							priority
							width={1500}
							height={1200}
							as={NextImage}
							className='w-full h-full object-cover'
							alt={title}
							src={imageLink[0]}
						/>
					)}
				</div>
			</Wrapper>
		</AuroraBackground>
	);
};
