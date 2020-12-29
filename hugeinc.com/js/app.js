const logoEl = document.querySelector('.nav__logo');
const navLinkEl = document.querySelector('.nav__links');
const navTaglineEl = document.querySelector('.nav__tagline');
const nav = document.querySelector('.nav');
const sections = document.querySelectorAll('.section');
const sectionContainerEl = document.querySelector('.section__container');
let navbarActive = false;

sectionContainerEl.addEventListener('scroll', (e) => {
    if (e.target.scrollTop < 100) {
        logoEl.style.color = '#EA178C';
    } else {
        logoEl.style.color = '#000000';
    }
});

logoEl.addEventListener('click', (e) => {
    if (navbarActive) {
        nav.style.height = '0';
        navLinkEl.style.display = 'none';
        navTaglineEl.style.display = 'none';
        navbarActive = false;
    } else {
        nav.style.height = '400px';
        navLinkEl.style.display = 'flex';
        navTaglineEl.style.display = 'block';
        navbarActive = true;
    }
});

const showBorder = () => {
    sections.forEach(section => section.classList.add('nav__logo--hover'));
}

const removeBorder = () => {
    sections.forEach(section => section.classList.remove('nav__logo--hover'));
}

logoEl.addEventListener('mouseover', () => {
    showBorder();
});

logoEl.addEventListener('mouseleave', () => {
    removeBorder();
    if (navbarActive) {
        showBorder();
    }
});
