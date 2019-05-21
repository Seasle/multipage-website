"use strict";

(function () {
  var expression = /\#/g;
  var navs = document.querySelectorAll('nav');
  navs.forEach(function (nav) {
    var links = nav.querySelectorAll('a');
    links.forEach(function (link) {
      if (expression.test(link.href)) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
        });
      }
    });
  });
})();