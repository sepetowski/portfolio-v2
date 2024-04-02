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
import { Link } from '@/navigation';
import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher';
import { LocaleSwitcher } from '../localeSwitcher/LocaleSwitcher';

export const Nav = () => {
	const [movedFromTop, setMovedFromTop] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

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
					<p className='font-bold text-inherit'>Sepetowski</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				<NavbarBrand>
					<p className='font-bold text-inherit'>Sepetowski</p>
				</NavbarBrand>
				<NavbarItem>
					<Link href='/'>Work</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/'>About me</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/'>Contact</Link>
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
				<NavbarMenuItem>
					<Link className='w-full' href='/'>
						Work
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link className='w-full' href='/'>
						About me
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link className='w-full' href='/'>
						Contact
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
};
