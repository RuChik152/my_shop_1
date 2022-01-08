// function showMenu() {
//     let moveMenu = document.querySelector(".navbar__menu");
//     moveMenu.classList.toggle("navbar__menu__deactive");
// }

let productItem = document.querySelectorAll('.product__item');
let productBoxButton = document.querySelectorAll('.product__box__button');

productItem.forEach(function (item) {
    item.addEventListener('mouseover', function (event) {
        event.currentTarget.children[1].style.display = 'block';
        console.log('event.currentTarget');
    });

    item.addEventListener('mouseout', function (event) {
        event.currentTarget.children[1].style.display = '';
        console.log('event.currentTarget');
    });
});

productBoxButton.forEach(function (item) {
    item.addEventListener('click', function (event) {
        let tag = event.currentTarget.closest('.market__product__item');
        addProduct(tag);
        event.preventDefault();
    });
});