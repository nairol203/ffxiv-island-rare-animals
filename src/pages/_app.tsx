import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<title>FFXIV Island Rare Animals</title>
				<meta name='description' content='Diese Seite ist für die Wetter abhängigen seltenen Tiere von der Island Sanctuary in Final Fantasy XIV.' />
				<meta name='author' content='nairol203' />
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					/** Put your mantine theme override here */
					colorScheme: useColorScheme() ?? 'light',
				}}
			>
				<Component {...pageProps} />
			</MantineProvider>
		</>
	);
}
