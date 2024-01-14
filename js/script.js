// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di klik
document.querySelector('#Menu').onclick = () => {
navbarNav.classList.toggle('active')
};

// klik di luar sidebar untuk menghilangkan navbar
const menu = document.querySelector('#Menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})