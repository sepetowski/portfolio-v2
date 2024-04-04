import React from 'react';
import { Wrapper } from '@/components/ui/Wrapper';
import { Link } from '@/components/ui/Link';
import { VercelLogo } from '../svg/VercelLogo';

export const Footer = () => {
	return (
		<footer className='border-t border-default-100 bg-background  py-10 mt-40 '>
			<Wrapper>
				<div className='w-full flex items-center justify-between'>
					<Link color='foreground' href={'/'}>
						© 2024 Sepetwowski
					</Link>
					<Link color='foreground' isExternal href={'/'} showAnchorIcon anchorIcon={<VercelLogo />}>
						Depoyed on
					</Link>
					<div className='space-x-4 font-extralight'>
						<Link underline='hover' color='foreground' href={'/'}>
							Work
						</Link>
						<Link underline='hover' color='foreground' href={'/'}>
							About me
						</Link>
						<Link underline='hover' color='foreground' href={'/'}>
							Contact
						</Link>
					</div>
				</div>
			</Wrapper>
		</footer>
	);
};
