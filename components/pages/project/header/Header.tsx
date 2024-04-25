'use client';
import React from 'react';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { Wrapper } from '@/components/ui/Wrapper';
import { ProjectTitle } from '@/types/types';
import { Button } from '@nextui-org/react';
import { Link } from '@/navigation';
import { TextGenerateEffect } from '@/components/ui/textGenerateEffect';
import { Carousel } from './Carousel';
import { useTranslations } from 'next-intl';

interface Props {
	title: string;
	overview: ProjectTitle;
	darkThemeImagesLinks: string[] | null;
	lightThemeImagesLinks: string[];
	liveLink: string | null;
	repoLink: string;
}

export const Header = ({
	darkThemeImagesLinks,
	lightThemeImagesLinks,
	overview,
	title,
	liveLink,
	repoLink,
}: Props) => {
	const t = useTranslations('PAGES.PROJECT.HEADER');

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
						words={t('TEXT_EFFECT')}
					/>
					<div className='flex items-center gap-4'>
						{liveLink && (
							<Button
								target='_blank'
								href={liveLink}
								as={Link}
								className='rounded-3xl  px-unit-5 min-w-unit-20 h-unit-10 text-base gap-unit-2  md:px-unit-6 md:min-w-unit-24 md:h-unit-12 md:text-medium md:gap-unit-3 '
								color='primary'
								variant='ghost'>
								{t('BUTTONS.LIVE')}
							</Button>
						)}

						<Button
							target='_blank'
							href={repoLink}
							as={Link}
							className='rounded-3xl  px-unit-5 min-w-unit-20 h-unit-10 text-base gap-unit-2  md:px-unit-6 md:min-w-unit-24 md:h-unit-12 md:text-medium md:gap-unit-3 '
							variant='ghost'>
							{t('BUTTONS.REPO')}
						</Button>
					</div>
				</div>

				<Carousel
					darkThemeImagesLinks={darkThemeImagesLinks}
					lightThemeImagesLinks={lightThemeImagesLinks}
					title={title}
				/>
			</Wrapper>
		</AuroraBackground>
	);
};
