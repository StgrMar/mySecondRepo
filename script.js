'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    rollback: 10,
    adaptive: true,
    service1: '',
    service2: '',
    servicePercentPrice: 0,
    fullPrice: 0,
    allServicePrices: 0,

    start: function () {
        let asking = function () {
            appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
            appData.screens = prompt('Какие типы экранов разработать?', 'Простые, Сложные, Интерактивные');

            do {
                appData.screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
            } while (!isNumber(appData.screenPrice));

            appData.adaptive = confirm('Нужен ли адаптив на сайте?');
        };

        const isNumber = function (num) {
            return !isNaN(parseFloat(num) && isFinite(num));
        };

        const getAllServicePrices = function () {
            let sum = 0;

            for (let i = 0; i < 2; i++) {
                let price = 0;
                if (i === 0) {
                    appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'service1');

                } else if (i === 1) {
                    appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'service2');
                }
                do {
                    price = prompt('Сколько это будет стоить?', 8000);
                }
                while (!isNumber(price));

                sum += + price;
            };
            return sum;
        };

        const getFullPrice = function () {
            return appData.screenPrice + appData.allServicePrices;
        };

        const getTitle = function () {
            return appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
        };

        const getServicePercentPrices = function () {
            return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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

        appData.allServicePrices = getAllServicePrices();

        appData.fullPrice = getFullPrice();

        appData.servicePercentPrice = getServicePercentPrices();

        appData.title = getTitle();

        appData.logger();
    },

    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.allServicePrices);
        for (let key in appData) {
            console.log(key + '  ' + appData[key]);
        }
    },

};

appData.start();





// console.log('Общая стоимость за доп. услуги: ' + allServicePrices);
// console.log('Стоимость верстки и доп. услуг: ' + fullPrice);
// console.log('Размер скидки: ' + getRollbackMessage(fullPrice));
// console.log('Проект:' + title);
// console.log('Тип экрана: ' + screens);
// console.log('Цена: ' + screenPrice);
// console.log('Нужен адаптив?: ' + adaptive);
// console.log('Полная цена: ' + fullPrice);
// console.log('Цена с откатом: ' + Math.ceil(servicePercentPrice));