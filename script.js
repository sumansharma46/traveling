AOS.init(
    {
        offset: 60,
        delay: 800,
        duration: 800,
        easing: 'ease'
    }
);

/*================ SHOW MENU ====================*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*=========== MENU SHOW =========*/

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*=========== MENU HIDEN =========*/

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=========== REMOVE MENU MOBILE ============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ==================== ADD BLUR TO HEADER =====================*/

const blurHeader = () => {
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* ================= SCROL BAR ================= */

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

   window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
       
}
window.addEventListener('scroll', scrollUp)

/* ================= SCROLL SECTIONS ACTIV LINK ================= */

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

