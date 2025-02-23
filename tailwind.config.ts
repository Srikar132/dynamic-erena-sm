import type {Config} from "tailwindcss";
import plugin from "tailwindcss/plugin";
const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./sanity/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		screens: {
    			xs: '475px'
    		},
    		colors: {
    			gold: '#fbb02d',
    			cyberBlack: '#121212',
    			primary: {
    				'100': '#FFE8F0',
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			black: {
    				'100': '#333333',
    				'200': '#141413',
    				'300': '#7D8087',
    				DEFAULT: '#000000'
    			},
    			white: {
    				'100': '#F7F7F7',
    				DEFAULT: '#FFFFFF'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		fontFamily: {
    			'teko-font': [
    				'var(--font-teko)'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		boxShadow: {
    			'100': '2px 2px 0px 0px rgb(0, 0, 0)',
    			'200': '2px 2px 0px 2px rgb(0, 0, 0)',
    			'300': '2px 2px 0px 2px rgb(238, 43, 105)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography"),
	plugin(function ({ addBase, addComponents, addUtilities }) {
		addBase({});
		addComponents({
		  ".container": {
			"@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-16 xl:max-w-[87.5rem]":
			  {},
		  },
		  ".h1": {
			"@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
			  {},
		  },
		  ".h2": {
			"@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
			  {},
		  },
		  ".h3": {
			"@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
		  },
		  ".h4": {
			"@apply text-[2rem] leading-normal": {},
		  },
		  ".h5": {
			"@apply text-2xl leading-normal": {},
		  },
		  ".h6": {
			"@apply font-semibold text-lg leading-8": {},
		  },
		  ".body-1": {
			"@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
			  {},
		  },
		  ".body-2": {
			"@apply font-light text-[0.875rem] leading-6 md:text-base": {},
		  },
		  ".caption": {
			"@apply text-sm": {},
		  },
		  ".tagline": {
			"@apply font-grotesk font-light text-xs tracking-tagline uppercase":
			  {},
		  },
		  ".quote": {
			"@apply  text-lg leading-normal": {},
		  },
		  ".button": {
			"@apply text-xs font-bold uppercase tracking-wider": {},
		  },
		});
		addUtilities({
		  ".tap-highlight-color": {
			"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
		  },
		});
	  }),

],
};

export default config;