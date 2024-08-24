module.exports = {
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
    },
  },
};
