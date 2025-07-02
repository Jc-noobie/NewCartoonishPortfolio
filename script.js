const nav = document.querySelector('.primary-nav') ;
const btn = document.querySelector('.menu-btn') ;

btn.addEventListener('click', () => {

    const visibility = nav.getAttribute("data-visible") ;

    if(visibility === "false") {
        nav.setAttribute('data-visible',true) ;
        btn.setAttribute('aria-expanded', true) ;
    } else if (visibility === "true") {
        nav.setAttribute('data-visible',false) ;
        btn.setAttribute('aria-expanded', false) ;
    }

}) ;