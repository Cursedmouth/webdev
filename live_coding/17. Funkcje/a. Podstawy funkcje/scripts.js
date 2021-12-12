function simpleFunction() {
    console.log('Simple function');
}

simpleFunction()

function showIt(text) {
    console.log('Otrzymany tekst to: ' + text);
}

showIt('Jakiś tekst');


function sumOfTwo(a, b) {
    var sum = a + b;
    console.log('Suma dodawania to: ' + sum)
}

sumOfTwo(2, 2);

function returnText() {
    return 'Jakiś tekst';
}

var text = returnText()
console.log(text)

// \/ tak jak poniżej nie można, pierwszą funkcję nadpisze druga
function f(p1) {
    console.log('Jeden parametr: ' + p1);
}

function f(p1, p2) {
    console.log('Dwa parametry: ' + p1 + ' ' + p2);
}
f(5);
f(1,2);
//