import React from 'react';
import { ThemeSwitcher } from '@/components/themeSwitcher/ThemeSwitcher';
import { useTranslations } from 'next-intl';

export const HomePage = () => {
	const t = useTranslations('INDEX');
	return (
		<>
			<h1>{t('TITLE')}</h1>
			<ThemeSwitcher />;
		</>
	);
};

export default HomePage;
