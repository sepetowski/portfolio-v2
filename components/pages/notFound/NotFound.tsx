import React from 'react';
import { Wrapper } from '@/components/ui/Wrapper';
import { Image } from '@nextui-org/react';
import NextImage from 'next/image';
import { Link } from '@/components/ui/Link';
import { useTranslations } from 'next-intl';

export const NotFound = () => {
	const t = useTranslations('PAGES.NOT_FOUND');
	return (
		<main className=' w-full '>
			<Wrapper className='flex flex-col min-h-screen justify-center items-center'>
				<div className='w-full max-w-4xl'>
					<Image
						priority
						width={1500}
						height={1200}
						as={NextImage}
						className={`w-full h-full object-cover`}
						alt={'404 page'}
						src={'/svg/notFound.svg'}
					/>
				</div>
				<div className='text-center space-y-2'>
					<h1 className='text-4xl md:text-6xl font-bold'>{t('TITLE')}</h1>
					<p className='text-default-600 dark:text-default-400 md:text-lg'>
						{t('TEXT.FIRST')}{' '}
						<Link underline='hover' href={'/'} className='font-semibold text-primary  md:text-lg'>
							{t('TEXT.SECOND')}
						</Link>
					</p>
				</div>
			</Wrapper>
		</main>
	);
};
