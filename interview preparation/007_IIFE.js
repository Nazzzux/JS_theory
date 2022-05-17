// Immidiatelly Invoked Function Expression

// IIFE - функции, которые сразу вызываются. Зачастую используются для создание какого-нибудь локального скоупа

let result = []
/*
for (var i = 0; i < 5; i++) {
   result.push(function () {
      console.log(i);
   })
}
*/
// так как это функция, то она может быть сразу вызвана
/*
result[2]() // 5
result[4]() // 5
*/
// обращаемся к переменной i, которая всегда равна 5 (var)

for (var i = 0; i < 5; i++) {
   (function () {
      var j = i // скопировали примитивное значение
      result.push(function () {
         console.log(j);
      })
   })()
}

result[2]() // 2
result[4]() // 4
result[4] // nothing
// result[]() // is not a function
// result() // is not a function
console.log(result[4]) // [Function (anonymous)]
console.log(result[4]()) // 4 undefined