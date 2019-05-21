(() => {
    let pageUp = Object.assign(document.createElement('div'), {
        className: 'page-up page-up--hidden'
    });

    pageUp.addEventListener('click', event => {
        event.preventDefault();

        scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        pageUp.blur();
    });

    window.addEventListener('scroll', event => {
        if (scrollY > innerHeight / 2) {
            pageUp.classList.remove('page-up--hidden');
        } else {
            pageUp.classList.add('page-up--hidden');
        }
    });

    if (document.body.scrollHeight > innerHeight) {
        document.body.append(pageUp);
    }
})();