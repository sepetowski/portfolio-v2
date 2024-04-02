import React from 'react';

interface Props {
	children: React.ReactNode;
}

export const Wrapper = ({ children }: Props) => {
	return <div className='w-full max-w-screen-xl px-4 sm:px-6 mx-auto '>{children}</div>;
};
