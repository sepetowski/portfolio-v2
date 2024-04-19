import Image from 'next/image';
import React from 'react';
import { Tooltip } from '@nextui-org/react';
import { StackCard as IStackCard } from '@/types/types';
interface Props {
	details: IStackCard;
}

export const StackCard = ({ details: { alt, src, needBgc } }: Props) => {
	return (
		<Tooltip content={alt}>
			<div
				className={`w-16 sm:w-20 md:w-24 lg:w-28 h-auto ${
					needBgc ? 'bg-white rounded-xl p-2' : ''
				} `}>
				<Image
					className='w-full h-full object-cover'
					width={600}
					height={600}
					alt={alt}
					src={src}
				/>
			</div>
		</Tooltip>
	);
};
