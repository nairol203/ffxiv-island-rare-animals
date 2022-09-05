/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	redirects: [
		{
			source: '/',
			destination: '/rare-animals',
			permanent: false,
		},
	],
};

module.exports = nextConfig;
