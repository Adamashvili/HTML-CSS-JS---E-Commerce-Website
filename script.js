const bar = document.getElementById("bar");
const closeX = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (closeX) {
    closeX.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}