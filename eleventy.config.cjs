/** @param {import("@11ty/eleventy").UserConfig} config */
module.exports = (config) => {
  config.addGlobalData(
    'base',
    process.env.NODE_ENV === 'production' ? '/multipage-website/' : '/',
  );

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
