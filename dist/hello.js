"use strict";
function hello(firstName) {
    console.log(`hello ${firstName}`);
}
hello("prateek");
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 3));
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
console.log(isLegal(20));
