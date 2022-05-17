console.log(sum(1, 41))

function sum(a, b) {
   return a + b
}
// вызвали функцию перед тем, как мы ее определили. 
//hoisting - когда при интерпритации (чтении кода строка за строкой последовательно) какого-либо файла, javascript перемещает определение некоторых переменных и функций в начало файла. Т.е мы можем к ним обращаться до того, как мы их определили (как в примере выше)

console.log(i) //undefined
var i = 42
console.log(i) // 42

// JS видит, что переменная существует в коде, но в первом логе она еще не определена (undefined)

// const и let не подвержени hoisting


// Function Expression & Function Declaration

console.log(square(25)) // 625
// function declaration - можем вызывать функцию где угодно, без разницы, где она была объявлена

// function square(num) {
//    return num ** 2;
// }


// function expression
console.log(square(25)) // TypeError
const square = function (num) {
   return num ** 2
}