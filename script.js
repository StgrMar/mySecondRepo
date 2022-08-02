'use strict';

const title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов разработать?', 'Пример: Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', 'Пример: 12000');
let rollback = 10;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Например: service1 , service2');
let servicePrice1 = +prompt('Сколько это будет стоить?', 'Например: 7000');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'Например: service1 , service2');
let servicePrice2 = +prompt('Сколько это будет стоить?', 'Например: 4000');
//let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getAllServicePrices = function (sP1, sP2) {
    return sP1 + sP2;
};

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
};

let fullPrice = getFullPrice(screenPrice, allServicePrices);

const getTitle = function (title) {
    return title[0].toUpperCase() + title.slice(1).toLowerCase();
};

const getServicePercentPrices = function (fullPrice, rollback) {
    return fullPrice - rollback;
};

let servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

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

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('Общая стоимость за доп. услуги: ' + allServicePrices);
console.log('Стоимость верстки и доп. услуг: ' + fullPrice);
console.log('Размер скидки: ' + getRollbackMessage(fullPrice));
console.log('Проект:' + getTitle(title));
console.log('Тип экрана: ' + screens);
console.log('Цена: ' + screenPrice);
console.log('Нужен адаптив?: ' + adaptive);
console.log('Цена за услугу1: ' + servicePrice1);
console.log('Цена за услугу2: ' + servicePrice2);
console.log('Полная цена: ' + fullPrice);
console.log('Цена с откатом: ' + Math.ceil(servicePercentPrice));
