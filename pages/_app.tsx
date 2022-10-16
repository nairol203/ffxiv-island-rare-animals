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
				<link rel='shortcut icon' href='/icon.png' />
				<meta property='og:title' content='FFXIV Island Rare Animals' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://island.nairol.me' />
				<meta property='og:site_name' content='nairol.me' />
				<meta property='og:description' content='Diese Seite ist für die Wetter abhängigen seltenen Tiere von der Island Sanctuary in Final Fantasy XIV.' />
				<meta name='twitter:title' content='FFXIV Island Rare Animals' />
				<meta name='twitter:description' content='Diese Seite ist für die Wetter abhängigen seltenen Tiere von der Island Sanctuary in Final Fantasy XIV.' />
				<meta name='twitter:image' content='https://island.nairol.me' />
				<meta name='twitter:site' content='@nairol203' />
				<meta name='twitter:creator' content='@nairol203' />
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: useColorScheme(),
				}}
			>
				<Component {...pageProps} />
			</MantineProvider>
		</>
	);
}
