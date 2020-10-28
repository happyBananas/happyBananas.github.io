const btn_nav_bars = document.querySelector('.btn-nav-bars');
const navbar = document.querySelector('.navbar');

const btn_search_mb = document.querySelector('.btn-nav-search-top');
const modal_search_mb = document.querySelector('.modal-search');
const btn_close_modal_top = document.querySelector('.btn-close-modal-top');
const input_search_top = document.querySelector('.input-search-top');

// untuk efek toggle rotate tombol bars untuk menu 
btn_nav_bars.addEventListener('click', ()=>{
    navbar.classList.toggle('show');
    btn_nav_bars.classList.toggle('rotate');
});


// untuk efek toggle hide tombol pencarian
btn_search_mb.addEventListener('click', ()=>{
    modal_search_mb.classList.add('show');
    btn_close_modal_top.classList.add('show');
    input_search_top.classList.add('show');
});


// untuk efek close modal dengan tekan tombol close pada modal
btn_close_modal_top.addEventListener('click', ()=>{
    modal_search_mb.classList.remove('show');
    btn_close_modal_top.classList.remove('show');
    input_search_top.classList.remove('show');
});



