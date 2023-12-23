import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
              'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors:{
            'g1': '#E9EAE5',
            'g2': '#F5F5F5',
            'g3': '#EEEEEE',
            'g4': '#D9D9D9',
            'g5': '#E4E4E4'
        },
        fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif']
        },

    },
  },
  plugins: [],
}
export default config
