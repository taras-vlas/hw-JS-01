const invoice = 100; 
const stock = 100;
// Write code under this line
const message = (invoice === 50 || invoice  === 100 || invoice  !== 150) ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!';
console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'  

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'  