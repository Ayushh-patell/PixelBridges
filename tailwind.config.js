/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm4': '400px',
      // => @media (min-width: 400px) { ... }

      'sm3': '450px',
      // => @media (min-width: 450px) { ... }
      
      'sm2': '500px',
      // => @media (min-width: 500px) { ... }

      'sm1': '600px',
      // => @media (min-width: 600px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg1': '940px',
      // => @media (min-width: 940px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl1': '1124px',
      // => @media (min-width: 1124px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl1': '1330px',
      // => @media (min-width: 1330px) { ... }

      '1xl': '1400px',
      // => @media (min-width: 1400px) { ... }

      '2xl1': '1450px',
      // => @media (min-width: 1450px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        mainBg:'#925EFF'
      },
      translate: {
        'translate-center':'-50% -50%'
      },
    },
  },
  plugins: [],
};
