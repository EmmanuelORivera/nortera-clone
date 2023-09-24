import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      lineHeight: {
        smallvw: '5vw',
        bigvw: '2.5vw',
      },
      fontSize: {
        smallvw: '2.4169vw',
        mediumvw: 'calc(17.6px + 1vw)',
        bigvw: '2.2222vw',
        xlvw: 'calc(7.2px + 4.5vw)',
      },

      animation: {
        slide: 'slide 50s linear infinite',
        hoverIn: 'hoverIn .3s ease-in-out forwards',
        hoverOut: 'hoverOut .3s ease-in-out forwards',
        showsDown: 'showsDown .8s ease-in-out forwards',
        clipPathUp: 'clipPathUp 1.3s ease-in-out forwards',
        showsFromRight: 'showsFromRight .2s ease-in-out forwards',
        hideFromLeft: 'hideFromLeft .2s ease-in-out forwards',
        showsDownTitle: 'showsDownTitle .8s ease-in-out',
        showsUp: 'showsUp .8s ease-in-out forwards',
        showsUpTitle: 'showsUpTitle .8s ease-in-out',
        burgerFirstLine: 'burgerFirstLine .4s ease-in-out forwards',
        burgerFirstLineClosed: 'burgerFirstLineClosed .4s ease-in-out forwards',
        burgerMiddleLine: 'burgerMiddleLine .4s ease-in-out forwards',
        burgerMiddleLineClosed:
          'burgerMiddleLineClosed .4s ease-in-out forwards',
        burgerLastLine: 'burgerLastLine .4s ease-in-out forwards',
        burgerLastLineClosed: 'burgerLastLineClosed .4s ease-in-out forwards',
        zoomImage: 'zoomImage .4s ease-in-out .8s forwards',
      },
      colors: {
        'custom-green': '#1b3d38',
        'peachy-baige': '#E7C597',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },

        hoverIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        hoverOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(101%)' },
        },
        showsDown: {
          '0%': { transform: 'translateY(-15vw)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        clipPathUp: {
          '0%': {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          },
          '100%': {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          },
        },
        showsFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        hideFromLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        showsDownTitle: {
          '0%': { transform: 'translateY(-25vw)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(0)' },
        },
        zoomImage: {
          '0%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' },
        },
        showsUp: {
          '0%': { transform: 'translateY(10vw)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        showsUpTitle: {
          '0%': { transform: 'translateY(15px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(0)' },
        },
        burgerFirstLine: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(5px) rotate(45deg)' },
        },
        burgerFirstLineClosed: {
          '0%': { transform: 'translateY(5px) rotate(45deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        burgerMiddleLine: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(105%)', opacity: '0' },
        },
        burgerMiddleLineClosed: {
          '0%': { transform: 'translateX(105%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        burgerLastLine: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-5px) rotate(-45deg)' },
        },
        burgerLastLineClosed: {
          '0%': { transform: 'translateY(-5px) rotate(-45deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
