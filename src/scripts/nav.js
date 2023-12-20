import { onReady } from './utils.js';

onReady(() => () => {
  const expression = /\#/g;
  const navs = document.querySelectorAll('nav');

  navs.forEach((nav) => {
    const links = nav.querySelectorAll('a');

    links.forEach((link) => {
      if (expression.test(link.href)) {
        link.addEventListener('click', (event) => {
          event.preventDefault();
        });
      }
    });
  });
});
