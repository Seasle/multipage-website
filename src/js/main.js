(() => {
    let expression = /\#/g;
    let navs = document.querySelectorAll('nav');

    navs.forEach(nav => {
        let links = nav.querySelectorAll('a');

        links.forEach(link => {
            if (expression.test(link.href)) {
                link.addEventListener('click', event => {
                    event.preventDefault();
                });
            }
        });
    });
})();