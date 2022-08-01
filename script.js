'use strict';
let title = prompt('Как называется ваш проект?');
console.log('Проект:' + title);
let screens = prompt('Какие типы экранов разработать?', 'Пример: Простые, Сложные, Интерактивные');
console.log('Тип экрана: ' + screens);
let screenPrice = +prompt('Сколько будет стоить данная работа?', 'Пример: 12000');
console.log('Цена: ' + screenPrice);
let rollback = 99;
let adaptive = confirm('Нужен ли адаптив на сайте?');
console.log('Нужен адаптив?: ' + adaptive);
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Например: service1 , service2');
let servicePrice1 = +prompt('Сколько это будет стоить?', 'Например: 7000');
console.log('Цена за услугу1: ' + servicePrice1);
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'Например: service1 , service2');
let servicePrice2 = +prompt('Сколько это будет стоить?', 'Например: 4000');
console.log('Цена за услугу2: ' + servicePrice2);
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log('Полная цена: ' + fullPrice);
let minuscash = +prompt('Стоимость услуги посредника', 'Например: 1000');
console.log('Откат посреднику:' + minuscash);
let servicePercentPrice = fullPrice - minuscash;
console.log('Цена с откатом: ' + Math.ceil(servicePercentPrice));
if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 15000 && fullPrice <= 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice > 0 && fullPrice <= 15000) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice <= 0) {
    console.log('Что-то пошло не так');
}
// alert('домашка для первого урока');
// console.log('текст для домашки в консоле');

// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);
// console.log(screens.length);
// console.log('Стоимость верстки экранов ' + screenPrice + ' попугаев');
// console.log('Стоимость разработки сайта ' + fullPrice + ' попугаев');
// console.log(screens.toLowerCase());
// console.log(screens.split(', '));
// console.log(fullPrice * (rollback / 100));
