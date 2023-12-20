module.exports = (config) => {
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
