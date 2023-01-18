/*
 * JS for Fade in Animations
 */

function elInView(el) {
    const distInView = el.getBoundingClientRect().top - window.innerHeight + 20;
    return distInView < 0 && distInView > -window.innerHeight - 100;
}

const fadeElements = document.querySelectorAll('.fade-in');
const flElements = document.querySelectorAll('.fade-in-left');
const frElements = document.querySelectorAll('.fade-in-right');


function onLoad() {
    fadeElements.forEach((el) => {
        if (!elInView(el)) {
            el.classList.add('hidden');
            el.classList.remove('fade-in');
        }
    })

    flElements.forEach((el) => {
        if (!elInView(el)) {
            el.classList.add('hidden');
            el.classList.remove('fade-in-left');
        }
    })

    frElements.forEach((el) => {
        if (!elInView(el)) {
            el.classList.add('hidden');
            el.classList.remove('fade-in-right');
        }
    })
}

function onScroll() {
    fadeElements.forEach((el) => {
        if (elInView(el) && !el.classList.contains('fade-in')) {
            el.classList.add('fade-in');
            el.classList.remove('hidden');
        }
    })

    flElements.forEach((el) => {
        if (elInView(el) && !el.classList.contains('fade-in-left')) {
            el.classList.add('fade-in-left');
            el.classList.remove('hidden');

        }
    })

    frElements.forEach((el) => {
        if (elInView(el) && !el.classList.contains('fade-in-right')) {
            el.classList.add('fade-in-right');
            el.classList.remove('hidden');

        }
    })
}

window.addEventListener('load', onLoad);
window.addEventListener('scroll', onScroll);

