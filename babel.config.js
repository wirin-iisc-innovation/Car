// babel.config.js
module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      regenerator: true
    }]
  ]
};
