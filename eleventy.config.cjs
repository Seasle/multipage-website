const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');

/** @param {import("@11ty/eleventy").UserConfig} config */
module.exports = (config) => {
  const prefix =
    process.env.NODE_ENV === 'production' ? '/multipage-website/' : '/';

  config.addPlugin(EleventyHtmlBasePlugin, {
    baseHref: prefix,
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
