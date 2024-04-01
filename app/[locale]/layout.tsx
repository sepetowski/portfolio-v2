import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextUi } from '@/providers/NextUi';
import { NextTheme } from '@/providers/NextTheme';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const messages = useMessages();

	return (
		<html suppressHydrationWarning lang={locale} className='dark'>
			<body className={inter.className}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<NextUi>
						<NextTheme>{children}</NextTheme>
					</NextUi>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
