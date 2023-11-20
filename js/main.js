//script que 'escuta' o evento 'DOMContentLoaded' para garantir que o DOM esteja totalmente carregado antes de tentar interagir com ele.
//inicializa os carousels em bootstrap com as IDs 'carouselH' e 'carouselD'

document.addEventListener('DOMContentLoaded', function () {
    const carousel1 = new bootstrap.Carousel(document.querySelector('#carouselH'), {
        interval: 2000
    });

    const carousel2 = new bootstrap.Carousel(document.querySelector('#carouselD'), {
        interval: 2000
    });
});