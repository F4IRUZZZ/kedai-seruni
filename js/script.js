// Toggle class active untuk Coffee Menu
const navbarNav = document.querySelector('.navbar-nav');
//ketika coffee menu di klik
document.querySelector('#coffee-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    navbarNav.focus();
    e.preventDefault();
};

// Toggle class active untuk Shopping Cart 
const shoppingCart = document.querySelector('.shopping-cart');
//ketika shopping Cart di klik
document.querySelector('#shopping-cart-btn').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    shoppingCart.focus();
    e.preventDefault();
};

//Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
//ketika search button di klik
document.querySelector('#search-btn').onclick =(e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};


//Klik diluar elemen
const coffee = document.querySelector('#coffee-menu');
const sb = document.querySelector('#search-btn');
const sc = document.querySelector('#shopping-cart-btn');

document.addEventListener('click', function(e) {
    if(!coffee.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});

//modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailBtn = document.querySelectorAll('.item-detail-btn');

itemDetailBtn.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
 
})


//klik tombol close Modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display ='none'
    e.preventDefault();
}

// klik diluar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
};