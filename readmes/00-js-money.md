---
<a name="Back_To_Top"></a> Top
---

- ### [Allocating](#Allocating)
- ### [Arithmetic](#Arithmetic)
- ### [Comparison](#Comparison)

---

https://www.npmjs.com/package/js-money

`npm i js-money`

## <a name="Allocating"></a>Allocating

```js
const Money = require("js-money");

var tenEur = new Money(1000, Money.EUR);

// divide 10 EUR into 3 parts
var shares = tenEur.allocate([1, 1, 1]);
// returns an array of Money instances worth [334,333,333]

// split 5 EUR 70/30
var fiveEur = new Money(500, Money.EUR);
var shares = fiveEur.allocate([70, 30]);
// returns an array of money [350,150]
```

---

- [Top](#Back_To_Top)

---

## <a name="Arithmetic"></a>Arithmetic

```js
const Money = require("js-money");

//Define monetary values
let fiveEur = new Money(500, Money.EUR);
console.log(fiveEur);

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
```

---

- [Top](#Back_To_Top)

---

## <a name="Comparison"></a>Comparison

```js
const Money = require("js-money");

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
```

---

- [Top](#Back_To_Top)

---
