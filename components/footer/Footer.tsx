'use client';
import React from 'react';
import { Wrapper } from '@/components/ui/Wrapper';
import { Link } from '@/components/ui/Link';
import { VercelLogo } from '../svg/VercelLogo';
import { usePathname } from '@/navigation';
import { useFormatter, useTranslations } from 'next-intl';
import { SITE_NAME } from '@/lib/constants';

export const Footer = () => {
	const t = useTranslations('COMPONENTS');

	const format = useFormatter();
	const pathname = usePathname();

	const dateTime = new Date();
	return (
		<footer className='border-t border-black/[0.2] border-default-300 dark:border-default-50 bg-background py-6 lg:py-8 mt-20 lg:mt-40 '>
			<Wrapper>
				<div className='w-full flex flex-col-reverse md:flex-row gap-2 items-center justify-between'>
					<Link className='text-sm md:text-base' color='foreground' href={'/'}>
						© {format.dateTime(dateTime, { year: 'numeric' })} {SITE_NAME}
					</Link>
					<Link
						className='text-sm md:text-base'
						color='foreground'
						isExternal
						href={'https://vercel.com/'}
						showAnchorIcon
						anchorIcon={<VercelLogo className='w-16 md:w-20' />}>
						{t('FOOTER.DEPLOYED')}
					</Link>
					<div className='space-x-4 font-extralight mb-4 sm:mb-0 '>
						<Link
							className='text-sm md:text-base'
							underline='hover'
							color={pathname === '/work' ? 'primary' : 'foreground'}
							href={'/work'}>
							{t('NAV.WORK')}
						</Link>
						<Link
							className='text-sm md:text-base'
							underline='hover'
							color={pathname === '/about' ? 'primary' : 'foreground'}
							href={'/about'}>
							{t('NAV.ABOUT')}
						</Link>
						<Link
							color={pathname === '/contact' ? 'primary' : 'foreground'}
							className='text-sm md:text-base'
							underline='hover'
							href={'/contact'}>
							{t('NAV.CONTACT')}
						</Link>
					</div>
				</div>
			</Wrapper>
		</footer>
	);
};
