import React from 'react';
import { WorkCardContainer } from '@/components/ui/WorkCardContainer';
import { Wrapper } from '@/components/ui/Wrapper';
import { MY_ALL_WORKS } from '@/lib/constants';
import { Divider } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

export const Main = () => {
	const t = useTranslations('PAGES.WORK.MAIN');

	return (
		<main className='lg:mt-20 py-6 lg:py-10 w-full '>
			<Wrapper>
				<section id='work' className='py-4'>
					<div className='w-full flex justify-center items-center gap-6 '>
						<Divider className='w-10 sm:w-16 md:w-40 lg:w-44  xl:w-80' />
						<h2 className='text-default-400 uppercase sm:text-lg md:text-2xl  text-center inline-block '>
							{t('TITLE')}
						</h2>
						<Divider className='w-10 sm:w-16 md:w-40 lg:w-44  xl:w-80' />
					</div>

					<WorkCardContainer workCards={MY_ALL_WORKS} />
				</section>
			</Wrapper>
		</main>
	);
};
