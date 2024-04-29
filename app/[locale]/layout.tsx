import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextUi } from '@/providers/NextUi';
import { NextTheme } from '@/providers/NextTheme';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Nav } from '@/components/nav/Nav';
import { Footer } from '@/components/footer/Footer';
import { getTranslations } from 'next-intl/server';
import { Params } from '@/types/types';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SITE_NAME } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
	children: React.ReactNode;
	params: Params;
}

export async function generateMetadata({
	params: { locale },
}: {
	params: Params;
}): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: 'METADATA.ROOT' });

	return {
		title: SITE_NAME,
		description: t('DESCRIPTION'),
	};
}
const RootLayout = ({ children, params: { locale } }: Readonly<LayoutProps>) => {
	const messages = useMessages();

	return (
		<html suppressHydrationWarning lang={locale} className='dark'>
			<body className={`${inter.className}`}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<NextUi>
						<NextTheme>
							<Nav />
							{children}
							<Footer />
							<SpeedInsights />
						</NextTheme>
					</NextUi>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
