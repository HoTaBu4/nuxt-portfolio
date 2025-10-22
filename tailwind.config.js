export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './composables/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        brandStart: '#4f46e5',
        brandEnd: '#ec4899',
      },
    },
  },
  plugins: [],
};
