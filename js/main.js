'use strict';

function firstTraining() {
    let element = document.getElementsByTagName('article');

    for (const x of element) {
        if (x == element[0]) x.style.display = 'block';
        else x.style.display = 'none';
    }
}

function secondTraining() {
    let element = document.getElementsByTagName('article');

    for (const x of element) {
        if (x == element[1]) x.style.display = 'block';
        else x.style.display = 'none';
    }
}

function thirdTraining() {
    let element = document.getElementsByTagName('article');

    for (const x of element) {
        if (x == element[2]) x.style.display = 'block';
        else x.style.display = 'none';
    }
}

function fourthTraining() {
    let element = document.getElementsByTagName('article');

    for (const x of element) {
        if (x == element[3]) x.style.display = 'block';
        else x.style.display = 'none';
    }
}

function daySchedule(dayOfWeek) {
    console.log(dayOfWeek);
    let element = document.getElementsByClassName('day')[dayOfWeek];

    if (element.classList.contains('active'))
        element.classList.remove('active');
    else element.classList.add('active');

    let variable = document.getElementsByClassName(element.innerHTML);

    for (let v of variable)
        if (v.classList.contains('show')) v.classList.remove('show');
        else v.classList.add('show');
}

const header = document.querySelector('header');
const sectionOne = document.querySelector('#home');

const sectionOneOptions = {
    rootMargin: '-200px 0px 0px 0px',
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
