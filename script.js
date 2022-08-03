'use strict';
let title;
let screens;
let screenPrice;
let rollback = 10;
let adaptive;
let service1;
let service2;
let servicePercentPrice;
let fullPrice;
let allServicePrices;

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));

};

const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    screens = prompt('Какие типы экранов разработать?', 'Простые, Сложные, Интерактивные');

    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
    }
    while (!isNumber(screenPrice));

    adaptive = confirm('Нужен ли адаптив на сайте?');
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getAllServicePrices = function () {
    let a;
    let b;
    let sum;
    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'service1');
            do {
                a = +prompt('Сколько это будет стоить?', 7000);
            }
            while (!isNumber(a));
        }
        else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'service2');
            do {
                b = +prompt('Сколько это будет стоить?', 8000);
            }
            while (!isNumber(b));
        }
    }
    sum = a + b;
    return sum;
};

function getFullPrice() {
    return screenPrice + allServicePrices;
};

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
};

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
};

const getRollbackMessage = function (price) {
    if (price > 30000) {
        return 'Даем скидку в 10%';
    } else if (price > 15000 && price <= 30000) {
        return 'Даем скидку в 5%';
    } else if (price > 0 && price <= 15000) {
        return 'Скидка не предусмотрена';
    } else if (price <= 0) {
        return 'Что-то пошло не так';
    }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('Общая стоимость за доп. услуги: ' + allServicePrices);
console.log('Стоимость верстки и доп. услуг: ' + fullPrice);
console.log('Размер скидки: ' + getRollbackMessage(fullPrice));
console.log('Проект:' + title);
console.log('Тип экрана: ' + screens);
console.log('Цена: ' + screenPrice);
console.log('Нужен адаптив?: ' + adaptive);
console.log('Полная цена: ' + fullPrice);
console.log('Цена с откатом: ' + Math.ceil(servicePercentPrice));