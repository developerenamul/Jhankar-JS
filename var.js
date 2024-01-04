let name = "jhankar";
console.log(name, typeof name);
let n1 = "10";
let n2 = 15;
console.log(n1 + n2);
console.log(n2 + n1);
console.log(n2 * n1);
console.log(n1 * n2);
// string concatenation
let firstName = "nushu";
let lastName = "mamu";
console.log(firstName + " " + lastName);

// problem 1

const totalMoneyReserved = 1000;
const perKgApplePrice = 350;
const perKgOrangePrice = 350;
const totalCost = perKgApplePrice + perKgOrangePrice;
console.log(totalCost);
const moneyLeft = totalMoneyReserved - totalCost;
console.log(moneyLeft);

// problem 2

let ban = 70.5;
let eng = 35;
let math = 65.59;
let soci = 90.53;

const totalMark = (ban + eng + math + soci).toFixed(3);
console.log(totalMark);
