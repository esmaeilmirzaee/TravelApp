const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const navLinks = document.querySelector('.links');
const links = document.querySelectorAll('.links a');

menuBtn.addEventListener('click', () => { if(menuOpen) { menuBtn.classList.remove('open'); navLinks.classList.remove('open'); menuOpen = false; } else { menuBtn.classList.add('open'); navLinks.classList.add('open'); menuOpen = true; } });

menuBtn.addEventListener('click', () => { links.forEach((link) => { link.classList.add('fade'); }) })
