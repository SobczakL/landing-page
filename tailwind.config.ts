import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                'sm': '200px',
                'md': '768px',
                'lg': '1080px'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'background-tech': "url('/images/technology.png')"
            },
            colors: {
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
            fontSize: {
                bodySm: '12px',
                bodyMd: '16px',
                bodyLg: '18px',
                labelSm: '14px',
                labelMd: '18px',
                labelLg: '24px',
                sectionLabelSm: '16px',
                sectionLabelMd: '24px',
                sectionLabelLg: '28px',
                subLabelSm: '12px',
                subLabelMd: '16px',
                headerSm: '40px',
                headerMd: '70px',
                locationSm: '20px',
                locationMd: '36px',
                locationLg: '40px',
                subheaderSm: '20px',
                subheaderMd: '25px',
                subheaderLg: '30px',
                sideheaderSm: '35px',
                sideheaderMd: '45px',
                sideheaderLg: '50px',
            }
        },
    },
    variants: {
        extend: {
            fontSize: ['responsive'],
            padding: ['responsive'],
        }
    },
    plugins: [],
}
export default config
