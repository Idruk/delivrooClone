module.exports = {
    // ...
    build: {
      assetsPublicPath: '/',
      assetsSubDirectory: 'static'
    },

    publicPath: process.env.NODE_ENV === 'production'
      ? '/delivrooClone/'
      : '/'
  }
