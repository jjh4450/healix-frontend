/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pretendard Variable"', 'Pretendard', 'sans-serif'],
      },
      backgroundImage: {
        'kakao-login': "url('https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg')",
      },
      colors:{
        'kakao-yellow': '#FFEB00',
      }
    },
  },
  plugins: [],
}