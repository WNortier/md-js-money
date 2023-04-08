const Money = require('js-money');

//Define monetary values
let fiveEur = new Money(500, Money.EUR);
console.log(fiveEur)

//Basic arithmetic

// add
fiveEur.add(new Money(250, Money.EUR)); // 7.50 EUR

// subtract 
fiveEur.subtract(new Money(470, Money.EUR)); // 0.30 EUR

// multiply
fiveEur.multiply(1.2345); // 6.17 EUR
fiveEur.multiply(1.2345, Math.ceil); // 6.18 EUR

// divide 
fiveEur.divide(2.3456); // 2.13 EUR
fiveEur.divide(2.3456, Math.ceil); // 2.14 EUR