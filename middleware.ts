import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
	locales,
	defaultLocale: 'en',
	localeDetection: false,
	localePrefix: 'as-needed',
});

export const config = {
	matcher: ['/', '/(pl|en)/:path*'],
};
