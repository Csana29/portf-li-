const szekciok = document.querySelectorAll('section, header');
const navLinkek = document.querySelectorAll('#navbar a');

window.addEventListener('scroll', () => {
    let aktualis = '';

    szekciok.forEach(szekcio => {
        const szekcioTeteje = szekcio.offsetTop;
        const szekcioMagassaga = szekcio.clientHeight;
        
        if (window.scrollY >= szekcioTeteje - 200) {
            aktualis = szekcio.getAttribute('id');
        }
    });

    navLinkek.forEach(link => {
        link.classList.remove('aktiv');
        if (link.getAttribute('href').includes(aktualis)) {
            link.classList.add('aktiv');
        }
    });
});