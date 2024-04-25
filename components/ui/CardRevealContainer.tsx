'use client';
import React from 'react';
import { CardReveal } from './CardReveal';
import { CanvasRevealEffect } from './CanvasRevealEffect';
import { CardReveal as ICardReveal } from '@/types/types';
import { cn } from '@/lib/cn';

interface Props {
	cards: ICardReveal[];
	dontUseTransaltion?: boolean;
	className?: string;
}

export const CardRevealContainer = ({ cards, className, dontUseTransaltion }: Props) => {
	return (
		<div
			className={cn(
				'mt-10 lg:mt-12 flex flex-wrap items-center justify-center  w-full gap-4 gap-y-10 ',
				className
			)}>
			{cards.map((card, i) => (
				<CardReveal
					key={i}
					title={card.title}
					Icon={card.Icon}
					desc={card.desc}
					dontUseTransaltion={dontUseTransaltion}>
					<CanvasRevealEffect
						animationSpeed={3}
						dotSize={2}
						containerClassName={`${i % 2 !== 0 ? 'bg-secondary' : 'bg-primary'}`}
						colors={[[125, 211, 252]]}
					/>
				</CardReveal>
			))}
		</div>
	);
};
