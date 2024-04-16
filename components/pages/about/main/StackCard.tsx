import Image from 'next/image';
import React from 'react';
import { Tooltip } from '@nextui-org/react';
import { StackCard as IStackCard } from '@/types/types';
interface Props {
	details: IStackCard;
}

export const StackCard = ({ details: { alt, src } }: Props) => {
	return (
		<Tooltip content={alt}>
			<div className='w-20 md:w-24 lg:w-28 '>
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
