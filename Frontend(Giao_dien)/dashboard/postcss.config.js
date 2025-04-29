const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    require('autoprefixer'),
    purgecss({
      content: [
        './index.html',
        './assets/js/**/*.js',
        './**/*.php'
      ],
    }),
  ],
};
