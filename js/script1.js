// Задание:
// Исправьте ошибки, добавив недостающие операторы

let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
let product2 = "Биндеры для бумаги 51 мм";
let product3 = "Ручка шариковая синяя";

let productPrice1 = 280.25;
let productPrice2 = 56;
let productPrice3 = 12.50;

let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

let totalPrice = 0;

totalPrice = totalPrice + productPrice1 * productQuantity1;
totalPrice = totalPrice + productPrice2 * productQuantity2;
totalPrice = totalPrice + productPrice3 * productQuantity3;

alert(`Общая сумма ${totalPrice}`);