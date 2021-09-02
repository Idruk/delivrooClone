module.exports = {
    // ...
    publicPath: process.env.NODE_ENV === 'production'
    ? '/delivrooClone/'
    : '/'
    ,
    build: {
      assetsPublicPath: '/',
      assetsSubDirectory: 'static'
    }
  }
