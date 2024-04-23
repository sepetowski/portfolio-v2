'use client';
import React, { useEffect, useState } from 'react';
import { Divider } from '@nextui-org/react';
import { Wrapper } from '@/components/ui/Wrapper';
import { FEATURES_ICONS } from '@/lib/constants';
import { CardRevealContainer } from '@/components/ui/CardRevealContainer';
import { CardReveal, Feature } from '@/types/types';

interface Props {
	features: Feature[];
	title: string;
}

export const Features = ({ features, title }: Props) => {
	const [featuresCards, setFeaturesCards] = useState<CardReveal[]>([]);

	useEffect(() => {
		const iconsFromThisProject = FEATURES_ICONS.filter(
			(icon) => icon.title.toLowerCase() === title.toLowerCase()
		);

		const extendedFeatures: CardReveal[] = features.map((feature, i) => {
			return {
				...feature,
				Icon:
					iconsFromThisProject[0].icons.length >= i + 1
						? iconsFromThisProject[0].icons[i]
						: iconsFromThisProject[0].icons[0],
			};
		});

		setFeaturesCards(extendedFeatures);
	}, [features, title]);

	return (
		<Wrapper>
			<section className='w-full mt-32'>
				<div className='w-full flex justify-center items-center gap-4 sm:gap-6 '>
					<Divider className='w-10 sm:w-16 md:w-40 lg:w-44  xl:w-80' />
					<h2 className='text-default-400 uppercase sm:text-lg md:text-2xl  text-center inline-block '>
						Features
					</h2>
					<Divider className='w-10 sm:w-16 md:w-40 lg:w-44   xl:w-80' />
				</div>
				<CardRevealContainer cards={featuresCards} />
			</section>
		</Wrapper>
	);
};
