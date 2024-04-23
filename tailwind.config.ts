import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import { addVariablesForColors } from './lib/flattenCollorPallete';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			animation: {
				aurora: 'aurora 60s linear infinite',
			},
			keyframes: {
				aurora: {
					from: {
						backgroundPosition: '50% 50%, 50% 50%',
					},
					to: {
						backgroundPosition: '350% 50%, 350% 50%',
					},
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui(), addVariablesForColors],
};

export default config;
