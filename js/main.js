const toggler = document.querySelector(".header__toggler");
const mobileMenu = document.querySelector(".header__mobile-menu");
const body = document.querySelector("body");

toggler.addEventListener('click', () => {
    toggler.classList.toggle("open");
    mobileMenu.classList.toggle("active");

    if(mobileMenu.classList.contains("active")) {
        body.classList.add("noscroll");
    }
    else {
        body.classList.remove("noscroll");
    };
});