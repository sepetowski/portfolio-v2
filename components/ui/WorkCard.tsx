import React from 'react';
import { Card, CardFooter, Image, Button } from '@nextui-org/react';
import { Link } from '@/navigation';
import { ArrowRight } from 'lucide-react';
import NextImage from 'next/image';
import { WorkCard as IWorkCard } from '@/types/types';

interface Props {
	card: IWorkCard;
	theme: 'dark' | 'light';
}

export const WorkCard = ({
	card: { alt, linkHref, src, subTitle, title, hasDarkMorde },
	theme,
}: Props) => {
	return (
		<Card isFooterBlurred className='aspect-video w-full max-w-[35rem] col-span-12 sm:col-span-7  '>
			<Image
				priority
				width={1500}
				height={1200}
				as={NextImage}
				isZoomed
				removeWrapper
				alt={alt}
				className='z-0 w-full h-full object-cover'
				src={hasDarkMorde ? `${src}-${theme}.png` : src}
			/>
			<CardFooter className='absolute bg-background/60 bottom-0 z-10 border-t-1 border-default-100 '>
				<div className='flex flex-grow gap-2 items-center'>
					<div className='flex flex-col'>
						<h3 className='text-sm text-default-800'>{title}</h3>
						<h4 className='text-tiny text-default-800'>{subTitle}</h4>
					</div>
				</div>
				<Button variant='light' href={linkHref} as={Link} endContent={<ArrowRight size={16} />}>
					Check
				</Button>
			</CardFooter>
		</Card>
	);
};
