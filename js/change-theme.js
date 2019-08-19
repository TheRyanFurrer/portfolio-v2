let themeToggle = document.querySelector('.theme-change-button');
let body = document.querySelector('body');
let bodyLink = document.querySelectorAll('.body-link');
let header = document.querySelector('.header');
let banner = document.querySelector('.banner');
let tagline = document.querySelector('.tagline');
let navLink = document.querySelectorAll('.nav-link');
let contentContainer = document.querySelectorAll('.content-container');
let formStyle = document.querySelector('body');

themeToggle.addEventListener('click', () => {
    header.classList.toggle('header-dark');
    banner.classList.toggle('banner-dark');
    tagline.classList.toggle('tagline-dark');
    // navLink.classList.toggle('nav-link-dark');
    console.log('navLink');
    body.classList.toggle('dark');
    // contentContainer.classList.toggle('content-container-dark');
    formStyle.classList.toggle('form-style-dark');
});