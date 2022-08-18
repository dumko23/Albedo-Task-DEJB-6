import './styles.scss';

let currentSlide = 0;

document
    .getElementById('slide-left')
    .addEventListener('click', function () {
        slide('left');
    })
    ;
document
    .getElementById('slide-right')
    .addEventListener('click', function () {
        slide('right');
    })
    ;
slide();

function slide(direction = null) {
    let slides = ['slide-1', 'slide-2', 'slide-3'];
    if (direction === 'left') {
        currentSlide--;
    } else if (direction === 'right') {
        currentSlide++;
    }
    if (currentSlide === 3) {
        currentSlide = 0;
    } else if (currentSlide === -1) {
        currentSlide = 2;
    }
    slides.forEach(element => {
        document.getElementById(element).style.display = 'none';
    });
    document.getElementById(slides[currentSlide]).style.display = 'block';
}

document
    .getElementById('burger')
    .addEventListener('click', function () {
        toggleMenu(true);
    })
    ;
document
    .getElementById('xmark')
    .addEventListener('click', function () {
        toggleMenu(false);
    })
    ;
window.addEventListener('resize', function () {
    toggleMenu(false);
});

toggleMenu(false);

function toggleMenu(toggle = '') {
    if (toggle === false) {
        document.getElementById('burger').style.display = 'block';
        document.getElementById('xmark').style.display = 'none';
        document.getElementById('nav-div').style.display = 'none';
    } else if (toggle === true) {
        document.getElementById('burger').style.display = 'none';
        document.getElementById('xmark').style.display = 'block';
        document.getElementById('nav-div').style.display = 'block';
    }
    let menu = window.getComputedStyle(document.getElementById('menu'));
    if (menu['display'] === 'none') {
        console.log(menu['display'])
        document.getElementById('nav-div').style.display = 'flex';
    }
}