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
        'healix-gray':'#F5F5F5',
        'healix-blue':'#007AFF',
        'healix-skyblue':'#62ADFF',
        'healix-skyblue-hover':'blue-300',
        'healix-navy':'#092A82',
        'healix-navy-hover':'#2F4FA5',
        'healix-btn-border':'#ADAEB2'
      }
    },
  },
  plugins: [],
}