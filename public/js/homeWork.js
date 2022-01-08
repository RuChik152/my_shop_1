'use strict';


let headerBoxBasket = document.querySelector('.header__box__basket');

let basketArr = [];
const basketArrSort = [];
const basket = [];

let countItemBasket = Number();





function addProduct(item) {
    //содает масссив дата атрибутов
    let arr = item.dataset;

    //из дата атрибутов создаем переменные, так как мне хотелось, что бы далее передавались не только string но где необходимо number значения, а метод dataset возвращает мне только string
    let id = Number(arr['id']);
    let price = Number(arr['price']);
    let name = String(arr['name']);


    let prod = new Product(id, price, name);

    // проверяю, есть ли в корзине уже такой элемент или нет
    let state = basketArrSort.findIndex(item => item.id == prod.id);


    //добавляем товар если его еще нет
    if (state == -1) {
        basketArrSort.push(prod);
    } else {
        console.log('есть совпадения, не добавлять');
    }

    countItemBasket = Number(basketArrSort.length);
    headerBoxBasket.setAttribute('data-basket', countItemBasket);
    
}



class Product {
    constructor(id, price, name, count = 1) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.count = count;
    }
}




let infoBasket = document.querySelector('.info__basket');
let totalAmount = document.querySelector('.total');


headerBoxBasket.addEventListener('click', showBasket);



function showBasket() {

    if (!infoBasket.classList.contains('info__basket-active')) {
        infoBasket.classList.add('info__basket-active');

        let str = ''
        let tabelHeder = '<tr><td>Название товара</td><td>Стоимость</td><td>Количество</td><td>Cумма</td></tr>'
        let sum = Number();

        for (let i = 0; i < basketArrSort.length; i++) {
            str += `<tr class="product__item"><td>${basketArrSort[i].name}</td><td>${basketArrSort[i].price}</td><td><input class="basket__count__product" type="number" value="${basketArrSort[i].count}"></td><td class="product__item__summ">${basketArrSort[i].price}</td></tr>`;
            sum += basketArrSort[i].price;
        }

        infoBasket.insertAdjacentHTML('afterbegin', `<table>${tabelHeder}${str}</table>`);
        totalAmount.innerText = sum;
    } else {
        infoBasket.classList.remove('info__basket-active');
        infoBasket.querySelector('table').remove();
    }
}




infoBasket.addEventListener('input', function (e) {

    let productitemSummAll = document.querySelectorAll('.product__item__summ');
    let summ = Number();
    let count = e.target.value
    let price = Number(e.target.parentNode.parentNode.children[1].innerText);
    let productItemSumm = e.target.parentNode.parentNode.children[3];

    productItemSumm.innerText = count * price;

    for (let i = 0; i < productitemSummAll.length; i++) {
        summ += Number(productitemSummAll[i].innerText);
    }

    totalAmount.innerText = summ;

})

