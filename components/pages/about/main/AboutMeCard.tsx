'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Props {
	title: string;
	Icon: LucideIcon;
	desc: string;
	children?: React.ReactNode;
}

export const AboutMeCard = ({ desc, Icon, title, children }: Props) => {
	const [hovered, setHovered] = useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className='border border-black/[0.2] group/canvas-card flex items-center justify-center border-default-300 dark:border-default-50 max-w-sm w-full mx-auto p-4 relative min-h-96 md:min-h-[28rem] rounded-lg overflow-hidden'>
			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='h-full w-full absolute inset-0'>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className='relative z-20 '>
				<div className='text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex flex-col gap-2 items-center justify-center  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
					<Icon />
					<h3 className='text-lg md:text-2xl font-semibold'>{title}</h3>
				</div>

				<div className=' opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white  group-hover/canvas-card:-translate-y-2 transition duration-200 text-center'>
					<h4 className='md:text-xl font-semibold mb-4'>{title}</h4>
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
};
