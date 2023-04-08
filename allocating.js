const Money = require('js-money');

var tenEur = new Money(1000, Money.EUR);

// divide 10 EUR into 3 parts
var shares = tenEur.allocate([1, 1, 1]);
// returns an array of Money instances worth [334,333,333]

// split 5 EUR 70/30
var fiveEur = new Money(500, Money.EUR);
var shares = fiveEur.allocate([70, 30]);
// returns an array of money [350,150]