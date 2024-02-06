/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx, scss}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx, scss}",
    "./src/views/**/*.{vue,js,ts,jsx,tsx, scss}",
  ],
  theme: {
    letterSpacing: {
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.02em',
      wider: '.05em',
      widest: '.1em',
    },
    extend: {
      borderRadius: {
        2: '8px',
        4: '16px',
        5: '20px',
      },
      boxShadow: {
        'input': '0 0 0 4px rgba(190, 156, 124, 0.10)',
      },
      colors: {
        'primary': '#7B6651',
        'primary-100': '#BF9D7D',
        'primary-80': '#AE9984',
        'primary-60': '#E1D1C2',
        'primary-40': '#F1EAE4',
        'primary-10': '#F7F2EE',
        'primary-tint': '#FAF7F5',
        'success-120': '#299F65',
        'success-100': '#52DD7E',
        'success-20': '#BCFBBD',
        'success-10': '#E8FEE7',
        'info-120': '#1D66AC',
        'info-100': '#3BADEF',
        'info-20': '#B1EFFD',
        'info-10': '#E6FBFE',
        'alert-120': '#C22538',
        'alert-100': '#DA3E51',
        'alert-20': '#F5CCD1',
        'alert-10': '#FDECEF',
        'neutral': '#140F0A',
        'neutral-100': '#000',
        'neutral-80': '#4B4B4B',
        'neutral-60': '#909090',
        'neutral-40': '#ECECEC',
        'neutral-10': '#F9F9F9',
      },

      fontSize: {
        '3':  '12px',
        '3h': '14px',
        '4':  '16px',
        '4h': '18px',
        '5':  '20px',
        '5h': '22px',
        '6':  '24px',
        '6h': '26px',
        '7':  '28px',
        '8':  '32px',
        '9':  '36px',
        '10': '40px',
        '12': '48px',
        '13': '52px',
        '16': '64px',
        '24': '96px',
      },
      fontFamily: {
        "noto-serif-tc": ['Noto Serif TC', 'serif', 'Comfortaa', 'sans-serif']
      },
      fontWeight: {
        "700": "700"
      },
      gap: {
        '15': '60px',
        '18': '72px',
        '30': '120px',
      },
      lineHeight: {
        '1.2': '1.2',
      },
      padding: {
        '30': '120px',
        '40': '160px',
        '50': '200px',
      },
      spacing: {
        '18': '72px',
      },
      margin: {
        '30': '120px',
      },
    },
  },
  plugins: [],
}

