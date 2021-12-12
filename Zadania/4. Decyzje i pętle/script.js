var numericVal = 7;


function ifEven(numericVal) {
    if (numericVal % 2 == 0) {
        console.log('Liczba parzysta')
    }
    else {
        console.log('Liczba nieparzysta')
    }
}
ifEven()

console.log('----------------------------------------')

/*
function countNumber() {
    var counter = 0;
    for (var i = 1; i < 100; i++) {
        if (i % 3 == 0) {
            counter += 1
        }

    }
    return counter;
}
var result = countNumber();
console.log(result);
*/
//zle

function someFunction() {
    for (let i = 1; i <=100; i++) {
        if (i % 3 == 0) {
            console.log(i)
        }
    }
}
someFunction();