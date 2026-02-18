const menu_off = document.querySelector('.ham_menu');
const menu = document.querySelector('#nav');
const logo_search = document.querySelector('.search_mini');
const main_search = document.querySelector('.search');
const logo_header = document.querySelector('.logo_header');
const logo_header_search = document.querySelector('#logo_header-search');
menu_off.addEventListener('click',()=>{
    menu_off.classList.toggle('active');
    menu.classList.toggle('active');
})

logo_search.addEventListener('click',()=>{
    logo_search.classList.toggle('active');
    main_search.classList.toggle('active');
    logo_header.classList.toggle('active');
    logo_header_search.classList.toggle('active');
    menu_off.classList.toggle('active_of');

})
