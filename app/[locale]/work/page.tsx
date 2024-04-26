import React from 'react';
import { Work } from '@/components/pages/work/Work';
import { getTranslations } from 'next-intl/server';
import { Params } from '@/types/types';
import { Metadata } from 'next';

export async function generateMetadata({
	params: { locale },
}: {
	params: Params;
}): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: 'METADATA.WORK' });

	return {
		title: t('TITLE'),
		description: t('DESCRIPTION'),
	};
}

const WorkPage = () => {
	return <Work />;
};

export default WorkPage;
