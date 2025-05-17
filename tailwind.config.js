// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // scroll by half the content, since duplicated
        },
      },
      animation: {
        'scroll-horizontal': 'scroll 30s linear infinite',
      },
    },
  },
};
