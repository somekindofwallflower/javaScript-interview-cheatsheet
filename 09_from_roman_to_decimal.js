/**
=====================================
Converting Roman Numerals to Decimal
INFO -> https://it.wikipedia.org/wiki/Sistema_di_numerazione_romano
=====================================
Given a Roman numeral, the task is to find its 
corresponding decimal value.

Examples
---
Input: IX
Output: 9
---
Input: XL
Output: 40
---
Input: MCMIV
Output: 1904
---

Ⅰ = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1 000

**************************************************/
const romanMap = new Map();
romanMap.set("I", 1);
romanMap.set("V", 5);
romanMap.set("X", 10);
romanMap.set("L", 50);
romanMap.set("C", 100);
romanMap.set("D", 500);
romanMap.set("M", 1000);

const convertRomanToDecimal = (romanNumber) => {
  // WRITE YOUR CODE HERE
  const romanNumberArray = romanNumber.split("");
  const result = romanNumberArray.map((el) => romanMap.get(el));

  let total = 0;
  for (let i = 0; i < result.length; i++) {
    let prevIndex;
    if (i > 0) {
      prevIndex = i - 1;
    }
    if (prevIndex !== "undefined" && result[i] > result[prevIndex]) {
      total += result[i] - 2 * result[prevIndex];
    } else {
      total += result[i];
    }
  }
  return total;
};

console.log(convertRomanToDecimal("IX"));
console.log(convertRomanToDecimal("XL"));
console.log(convertRomanToDecimal("MCMIV"));
