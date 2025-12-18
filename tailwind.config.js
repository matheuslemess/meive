/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        'marquee-reverse': 'marquee-reverse 45s linear infinite',
        'float-up': 'float-up 15s linear infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'swipe-out': 'swipe-out 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float-in-place': 'float-in-place 6s ease-in-out infinite',
        'marquee-vertical': 'marquee-vertical 80s linear infinite',
        'marquee-vertical-reverse': 'marquee-vertical-reverse 80s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'float-up': {
          '0%': { transform: 'translateY(110vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) rotate(10deg)', opacity: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'swipe-out': {
          '0%': { transform: 'translateX(300px) rotate(20deg) scale(0.8)', opacity: '0' },
          '10%': { transform: 'translateX(0) rotate(-2deg) scale(1)', opacity: '1' },
          '90%': { transform: 'translateX(0) rotate(-2deg) scale(1)', opacity: '1' },
          '100%': { transform: 'translateX(-300px) rotate(-15deg) scale(0.9)', opacity: '0' },
        },
        'marquee-vertical': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'marquee-vertical-reverse': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
