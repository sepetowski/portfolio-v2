'use client';
import React, { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/react';

import { ThemeSwitcher } from '@/components/themeSwitcher/ThemeSwitcher';
import { LocaleSwitcher } from '@/components/localeSwitcher/LocaleSwitcher';
import { Link } from '@/components/ui/Link';
import { usePathname } from '@/navigation';
import { SITE_NAME } from '@/lib/constants';
import { useTranslations } from 'next-intl';

export const Nav = () => {
	const t = useTranslations('COMPONENTS.NAV');

	const [movedFromTop, setMovedFromTop] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const pathname = usePathname();

	return (
		<Navbar
			isMenuOpen={isOpen}
			onMenuOpenChange={(e) => {
				setIsOpen(e);
			}}
			onScrollPositionChange={(e) => (e >= 300 ? setMovedFromTop(true) : setMovedFromTop(false))}
			shouldHideOnScroll
			disableAnimation={true}
			isBlurred={movedFromTop}
			maxWidth='xl'
			className={`fixed   ${
				movedFromTop ? '' : isOpen ? '' : 'bg-transparent transition-colors duration-400'
			}`}>
			<NavbarContent className='sm:hidden pr-3 ' justify='start'>
				<NavbarBrand>
					<Link href='/' className='font-bold text-inherit'>
						{SITE_NAME}
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				<NavbarBrand>
					<Link href='/' className='font-bold text-inherit'>
						{SITE_NAME}
					</Link>
				</NavbarBrand>
				<NavbarItem className='font-extralight'>
					<Link
						color={pathname === '/work' ? 'primary' : 'foreground'}
						underline='hover'
						href='/work'>
						{t('WORK')}
					</Link>
				</NavbarItem>
				<NavbarItem className='font-extralight'>
					<Link
						color={pathname === '/about' ? 'primary' : 'foreground'}
						underline='hover'
						href='/about'>
						{t('ABOUT')}
					</Link>
				</NavbarItem>
				<NavbarItem className='font-extralight'>
					<Link
						color={pathname === '/contact' ? 'primary' : 'foreground'}
						underline='hover'
						href='/contact'>
						{t('CONTACT')}
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex items-center gap-1' justify='end'>
				<ThemeSwitcher />
				<LocaleSwitcher />
			</NavbarContent>

			<NavbarContent className='flex items-center gap-6 sm:hidden' justify='end'>
				<div className='flex items-center gap-1 '>
					<ThemeSwitcher />
					<LocaleSwitcher />
				</div>
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<NavbarMenuItem className='font-extralight'>
					<Link className='w-full' href='/work'>
						{t('WORK')}
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem className='font-extralight'>
					<Link className='w-full' href='/about'>
						{t('ABOUT')}
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem className='font-extralight'>
					<Link className='w-full' href='/contact'>
						{t('CONTACT')}
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
};
