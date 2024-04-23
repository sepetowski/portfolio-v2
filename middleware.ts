import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';

export default createMiddleware({
	locales,
	defaultLocale: 'en',
	localeDetection: false,
	localePrefix,
});

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
