/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        p1: '#000',
        p2: '#585858',
        p3: '#F3F3F3',
        p4: '#F0F0F0',
     
        s1: '#FFD704',
      
        black: {
          DEFAULT: '#000000',
          100: '#05091D',
        },
      },
      boxShadow: {
        100: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #000',
        200: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #000',
        300: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #000',
        400: 'inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)',
        500: '0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      transitionProperty: {
        borderColor: 'border-color',
      },

      screens: {
        'sm': '576px',
  
        'md': '960px',
  
        'lg': '1440px',
      },
  
      zIndex: {
        1: '1',
        2: '2',
        4: '4',
      },
      lineHeight: {
        12: '48px',
      },
      borderRadius: {
        10: '10px',
        20: '20px',
        40: '40px',
        half: '50%',
        '7xl': '40px',
      },
      flex: {
        50: '0 0 50%',
        320: '1px 0 320px',
        300: '0 0 300px',
        540: '0 0 540px',
        280: '0 0 280px',
        256: '0 0 256px',
        100: '0 0 100%',
      },
    },
  },
  plugins: [],
};