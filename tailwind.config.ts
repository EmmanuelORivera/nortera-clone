import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        showsDown: 'showsDown .8s ease-in-out',
        clipPathUp: 'clipPathUp 1.3s ease-in-out forwards',
        showsDownTitle: 'showsDownTitle .8s ease-in-out',
        showsUp: 'showsUp .8s ease-in-out',
        showsUpTitle: 'showsUpTitle .8s ease-in-out',
        zoomImage: 'zoomImage .4s ease-in-out .8s forwards',
      },
      colors: {
        'custom-green': '#1b3d38',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        showsDown: {
          '0%': { transform: 'translateY(-70px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(0)' },
        },
        clipPathUp: {
          '0%': {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          },
          '100%': {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          },
        },
        showsDownTitle: {
          '0%': { transform: 'translateY(-15px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(0)' },
        },
        zoomImage: {
          '0%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' },
        },
        showsUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(0)' },
        },
        showsUpTitle: {
          '0%': { transform: 'translateY(15px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
