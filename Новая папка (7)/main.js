let hamburger = document.querySelector('.hamburger');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click',function(){
    this.classList.toggle('active');
});

