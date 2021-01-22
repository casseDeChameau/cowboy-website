/* ------------------       VARIABLES       --------------------------- */
let hWindow = window.innerHeight;
let halfWindow = (hWindow / 1.5);
let nav = document.querySelector('.main-nav');
let navBtn = document.querySelector('nav .two-btn');
let lastScroll = 0;
let timeOutID;
let logo = document.querySelector('.logo-svg');
// ? 2
let burger = document.querySelector('.burger-menu');

/* ------------------       FUNCTIONS       --------------------------- */
function showTabs() { nav.classList.remove('scroll-nav'); }
function hideTabs() { nav.classList.add('scroll-nav'); }
function showNavBTN() { navBtn.classList.add('show-btn'); }
function hideNavBTN() { navBtn.classList.remove('show-btn'); }
function addShadowBG() { nav.classList.add('shadowBG'); }
function remShadowBG() { nav.classList.remove('shadowBG'); }
function showTabsBg() { showTabs(); addShadowBG(); }
function hideTabsBG() { hideTabs(); remShadowBG(); }
function reduceLogo() { logo.classList.add('c-chevron')}
function enlargeLogo() { logo.classList.remove('c-chevron')}
// ? 2

/* ------------------       INSTRUCTIONS       --------------------------- */
// ? 1 - EFFETS SELON SCROLL
window.addEventListener('scroll', function () {
    let currentScroll = window.scrollY; /* scroll position */
    window.clearTimeout(timeOutID); /* reset timeOut at new scroll event*/

    if (currentScroll > 40) { /* hide tabs if not on top page */
        hideTabs();
        reduceLogo();
    } else { /* show tabs at top page */
        showTabs();
        enlargeLogo();
    }
    
    if (currentScroll > halfWindow) { /* show nav btn if half window scrolled */
        showNavBTN();
    } else { /* hide nav btn if above half window from top */
        hideNavBTN();
    }

    if (currentScroll <= lastScroll && currentScroll > 50) { /* show tabs if scroll up */
        showTabs();
        addShadowBG();
        enlargeLogo();
    } else {
        remShadowBG();
    }
    timeOutID = window.setTimeout(showTabsBg, 10000); /* show tabs after 5sec */
    
    lastScroll = currentScroll; /* record last scroll position */

    nav.addEventListener('mouseover', function () {
        if (window.scrollY != 0) {
            showTabsBg();
        }
    });
    nav.addEventListener('mouseout', function () {
        if (window.scrollY != 0) {
            hideTabsBG();
        }
    });
});
// ? 2 - CLICK SUR BURGER
burger.addEventListener('click', function () {
    burger.classList.toggle('burger-cross');
    nav.classList.toggle('nav-pan');
});