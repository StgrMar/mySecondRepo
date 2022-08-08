'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    rollback: 10,
    adaptive: true,
    services: {},
    servicePercentPrice: 0,
    fullPrice: 0,
    allServicePrices: 0,

    start: function () {
        const asking = function () {

            do {
                appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
            } while (isNumber(appData.title));

            for (let i = 0; i < 2; i++) {
                let name;
                let price = 0;

                do {
                    name = prompt('Какие типы экранов разработать?', 'Простые, Сложные, Интерактивные');
                } while (isNumber(name));

                do {
                    price = +prompt('Сколько будет стоить данная работа?', 12000);
                } while (!isNumber(price));

                appData.screens.push({ id: i, name: name, price: price });

            }

            for (let i = 0; i < 2; i++) {
                let name;
                let price = 0;

                do {
                    name = prompt('Какой дополнительный тип услуги нужен?', 'service1');
                } while (isNumber(name));


                do {
                    price = prompt('Сколько это будет стоить?', 8000);
                }
                while (!isNumber(price));

                appData.services[name] = +price;
            };

            appData.adaptive = confirm('Нужен ли адаптив на сайте?');
        };

        const addPrices = function () {

            for (let screen of appData.screens) {
                appData.screenPrice += + screen.price;
            };

            for (let screen of appData.screens) {
                appData.screenPrice += + screen.price;
            };
        };

        const isNumber = function (num) {
            return !isNaN(parseFloat(num) && isFinite(num));
        };

        const getFullPrice = function () {
            appData.fullPrice = appData.screenPrice + appData.allServicePrices;
        };

        const getTitle = function () {
            appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
        };

        const getServicePercentPrices = function () {
            appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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

        addPrices();

        getFullPrice();

        getServicePercentPrices();

        getTitle();

        appData.logger();

    },



    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);

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