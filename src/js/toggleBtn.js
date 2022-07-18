let prodBtn = document.querySelector('.prodBtn');
let products__overlay = document.querySelector('.products__overlay');
prodBtn.onclick = function() {
    products__overlay.classList.toggle('active');
}

