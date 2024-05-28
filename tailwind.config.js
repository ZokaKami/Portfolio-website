export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".//components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        'calc-vw': 'calc(10px + 3vw)',
      },
      animation: {
        fade: 'fade 3s ease-in-out forwards',
        menufade: 'fade 1s ease-in-out forwards', 
      },
      keyframes: {
        fade: {
          '0%' : { opacity:0 },
           
          '100%' : { opacity:1 },
        },
       
      },
       fontSize: {
      'responsive': 'calc(1rem + 5vw)',
      'responsivebody' : 'calc(1rem + 1vw)'
    },
    fontFamily: {
       
    
      'alegreya': ['Alegreya', 'serif'],
    },
     
  },
  },
  plugins: [
    function ({ addUtilities }) {
      const fillTextKeyframes = {
        '@keyframes fillText': {
          '0%': {
            backgroundPosition: '0% 50%',
            color: '#FED8B1',
          },
          '100%': {
            backgroundPosition: '100% 50%',
            color: '#607274',
          },
        },
      };

      addUtilities(fillTextKeyframes, {
        variants: ['responsive'],
      });
    },
  ],
}