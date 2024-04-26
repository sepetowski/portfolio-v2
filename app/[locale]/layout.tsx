import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextUi } from '@/providers/NextUi';
import { NextTheme } from '@/providers/NextTheme';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Nav } from '@/components/nav/Nav';
import { Footer } from '@/components/footer/Footer';
import { getTranslations } from 'next-intl/server';
import { Params } from '@/types/types';

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
		title: 'Sepetowski',
		description: t('DESCRIPTION'),
	};
}

export default function RootLayout({ children, params: { locale } }: Readonly<LayoutProps>) {
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
						</NextTheme>
					</NextUi>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
