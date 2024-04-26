import { Contact } from '@/components/pages/contact/Contact';
import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Params } from '@/types/types';
import { Metadata } from 'next';

export async function generateMetadata({
	params: { locale },
}: {
	params: Params;
}): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: 'METADATA.CONTACT' });

	return {
		title: t('TITLE'),
		description: t('DESCRIPTION'),
	};
}

export const ContactPage = () => {
	return <Contact />;
};

export default ContactPage;
