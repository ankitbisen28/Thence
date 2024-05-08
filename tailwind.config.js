import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: '2rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black':'#1C1C1C',
      'green':'#2DA950',
      'gray':'#727272',
      'gray2':'#EFEFEF',
      'gray3':"#C9C9C9",
      'light-green':'#E8EEE7',
      'color-1':'#9E9D9D',
      'color-2':'#EAEAEA',
      'color-3': '#828282',
      'color-4':'#DDEFE0'
    },
  },
  plugins: [daisyui],
}