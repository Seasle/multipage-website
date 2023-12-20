const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');

module.exports = (config) => {
  config.addPlugin(EleventyHtmlBasePlugin, {
    baseHref:
      process.env.NODE_ENV === 'production' ? '/multipage-website/' : '/',
  });

  config.addPassthroughCopy({
    'node_modules/@fontsource/roboto/files': 'styles/files',
    'src/assets': 'assets',
  });

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
    },
  };
};
