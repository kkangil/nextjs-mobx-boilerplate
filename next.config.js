const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

const publicRuntimeConfig = {
  API_END_POINT: process.env.API_END_POINT,
  NODE_ENV: process.env.NODE_ENV,
  PUBLIC_URL: process.env.PUBLIC_URL,
}

module.exports = withCSS(withSass({
  publicRuntimeConfig,
  webpack: config => {
    // Unshift polyfills in main entrypoint.
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js']) {
        entries['main.js'].unshift('./polyfill.js');
      }
      return entries;
    };

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}))