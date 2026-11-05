const overlay = document.getElementById('overlay-contatti');
const scrivimi = document.getElementById('apri-contatti');
const close = document.getElementById('chiudi-contatti');

scrivimi.addEventListener('click', function () {
    overlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
});

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.setAttribute('hidden', '');
        document.body.style.overflow = '';
    }
});