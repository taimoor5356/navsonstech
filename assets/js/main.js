/*=============== MENU ===============*/
const navMenu = document.getElementById('nav-menu');
var navToggle = document.getElementById('nav-toggle');
/* Menu show - hidden */

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
  navToggle.classList.toggle('animate-toggle');
});

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SERVICES SWIPER ===============*/
var servicesSwiper = new Swiper(".services-swiper", {
    spaceBetween: 32,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1208: {
            slidesPerView: 2,
        },
    },
});
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup('.work-container', {
    selectors: {
        target: ".mix",
        // filter: ".filter-item",
        // sort: false,
        // containerOrder: true,
        // transform: true,
    },
    animation: {
        duration: 300
    }
});
/* Active work */
const linkWork = document.querySelectorAll('.work-item');
function activeWork() {
    linkWork.forEach((link) => {
        link.classList.remove('active-work');
    });
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*=============== RESUME ===============*/
const accordionItems = document.querySelectorAll('.resume-item');

accordionItems.forEach((item) => {
    const header = item.querySelector('.resume-header'),
        content = item.querySelector('.resume-content'),
        icon = item.querySelector('.resume-icon i');
    header.addEventListener('click', () => {
        const isOpen = item.classList.toggle('accordion-open');
        content.style.height = isOpen ? content.scrollHeight + 'px' : '0';
        icon.className = isOpen ? 'ri-subtract-line' : 'ri-add-line';
        accordionItems.forEach((otherItem) => {
            if (otherItem!== item && otherItem.classList.contains('accordion-open')) {
                otherItem.classList.remove('accordion-open');
                otherItem.querySelector('.resume-content').style.height = '0';
                otherItem.querySelector('.resume-icon i').classList = 'ri-add-line';
            }
        });
    });
});

/*=============== TESTIMONIALS SWIPER ===============*/
var servicesSwiper = new Swiper(".testimonials-swiper", {
    spaceBetween: 32,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1208: {
            slidesPerView: 2,
        },
    },
});
/*=============== EMAIL JS ===============*/

/*=============== STYLE SWITCHER ===============*/
const navSettings = document.getElementById('nav-settings');
var styleSwitcher = document.getElementById('style-switcher');
var switcherClose = document.getElementById('style-switcher-close');
/* Menu show - hidden */

navSettings.addEventListener('click', () => {
    showHideSwitchMeny();
});

switcherClose.addEventListener('click', () => {
    showHideSwitchMeny();
});

function showHideSwitchMeny() {
    styleSwitcher.classList.toggle('show-switcher');
}
/* Switcher show */

/* Switcher hidden */

/*=============== THEME COLORS ===============*/
const colors = document.querySelectorAll('.style-switcher-color');
colors.forEach((color) => {
    color.onclick = () => {
        const activeColor = color.style.getPropertyValue('--hue');
        // colors.forEach((c) => {
        //     c.classList.remove('active-color');
        // });
        colors.forEach((c) => c.classList.remove('active-color'));
        color.classList.add('active-color');
        document.documentElement.style.setProperty('--hue', activeColor);
    };
});

/*=============== LIGHT/DARK MODE ===============*/
let currentTheme = 'light';
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
    input.addEventListener('change', () => {
        currentTheme = input.value;
        document.body.className = currentTheme;
    });
});