module.exports = {
  presets: ['@babel/env'],
  plugins: [
    ['module-resolver', {
      alias: {
        '@': __dirname,
        '~': __dirname
      }
    }]
  ]
};
