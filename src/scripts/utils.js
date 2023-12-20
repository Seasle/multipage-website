export const onReady = (cb) => {
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    cb();
  } else {
    window.addEventListener('DOMContentLoaded', () => cb());
  }
};
