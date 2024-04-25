'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Image } from '@nextui-org/react';
import NextImage from 'next/image';
import { useImageVariant } from '@/hooks/useImageVariant';

interface Props {
	darkThemeImagesLinks: string[] | null;
	lightThemeImagesLinks: string[];
	title: string;
}

export const Carousel = ({ darkThemeImagesLinks, lightThemeImagesLinks, title }: Props) => {
	const varaint = useImageVariant();
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		<div className='overflow-hidden ' ref={emblaRef}>
			<div className='flex -ml-6 '>
				{lightThemeImagesLinks.map((image, i) => (
					<div
						key={i}
						className=' my-32 overflow-hidden w-full flex justify-center items-center h-full  min-w-0 shrink-0 grow-0 basis-full pl-6 '>
						<Image
							priority
							width={1500}
							height={1200}
							as={NextImage}
							className={`w-full h-full object-cover  border border-black/[0.2] border-default-300 dark:border-default-50 rounded-xl`}
							alt={title}
							src={darkThemeImagesLinks && varaint === 'dark' ? darkThemeImagesLinks[i] : image}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
