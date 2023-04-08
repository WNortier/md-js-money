const Money = require('js-money');

var fiveEur = new Money(500, Money.EUR);
var anotherFiveEur = new Money(500, Money.EUR);
var sevenEur = new Money(700, Money.EUR);
var fiveDollars = new Money(500, Money.USD);

fiveEur.equals(fiveDollars); // return false
fiveEur.equals(anotherFiveEur); // return true

fiveEur.compare(sevenEur); // return -1
sevenEur.compare(fiveEur); // return 1
fiveEur.compare(anotherFiveEur); // return 0

fiveEur.compare(fileDollars); // throw Error

fiveEur.greaterThan(sevenEur); // return false
fiveEur.greaterThanOrEqual(sevenEur); // return false
fiveEur.lessThan(sevenEur); // return true
fiveEur.lessThanOrEqual(fiveEur); // return true