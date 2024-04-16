import React from 'react';
import { Divider } from '@nextui-org/react';
import { StackCard } from './StackCard';
import { MY_STACK } from '@/lib/constants';

export const MyStack = () => {
	return (
		<section className='w-full mt-10'>
			<div className='w-full flex justify-center items-center gap-4 sm:gap-6 '>
				<Divider className='w-10 sm:w-16 md:w-40 lg:w-44  xl:w-80' />
				<h2 className='text-default-400 uppercase sm:text-lg md:text-2xl  text-center inline-block '>
					My toolbox
				</h2>
				<Divider className='w-10 sm:w-16 md:w-40 lg:w-44   xl:w-80' />
			</div>
			{/* <p>
				HTML, CSS, SASS, TAILWINDCSS, JS, TS, REACT, REACT ROUTER, REACT REDUX, ZUSTAND,
				next.jsm,git, github prisma, zod, next-intl, axios, auth.js, trasctak query, shadcn/ui, sql,
				postresql, c#, .net, npm, vs code, vs, vite
			</p> */}
			<div className='mt-10 lg:mt-12 flex gap-4 justify-center items-center flex-wrap'>
				{MY_STACK.map((stack, i) => (
					<StackCard key={i} details={stack} />
				))}
			</div>
		</section>
	);
};
