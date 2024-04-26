import React from 'react';
import { About } from '@/components/pages/about/About';
import { getTranslations } from 'next-intl/server';
import { Params } from '@/types/types';
import { Metadata } from 'next';

export async function generateMetadata({
	params: { locale },
}: {
	params: Params;
}): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: 'METADATA.ABOUT' });

	return {
		title: t('TITLE'),
		description: t('DESCRIPTION'),
	};
}

export const AboutPage = () => {
	return <About />;
};

export default AboutPage;
