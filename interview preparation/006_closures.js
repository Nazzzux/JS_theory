// Closures

// момент, когда функция имеет доступ до переменных из вышестоящего scope

function sayHelloTo(name) {
   const message = 'Hello' + name;

   //имеет доступ до вышестоящего scope
   return function () {
      console.log(message)
   }
}

// переменная содержит в себе результат работы функции sayHelloTo с переданным значением Elena.
// грубо говоря, в переменной helloToElena мы замкнули функцию sayHelloTo на значении Elena
const helloToElena = sayHelloTo('Elena');

console.log(helloToElena); // Function
console.log(helloToElena());

// Hello Elena 
// undefinded (внутренняя функция ничего не возвращает, по умолчанию возвращает undefined),
// чтобы это исправить, нужно убрать один из console.log и просто вызвать функцию (ырутри уже есть console.log)

// Практическое применение

function createFrameworkManager() {
   const fw = ['Angular', 'React']

   // возвращаем объект с методами
   return {
      print: function () {
         console.log(fw.join(' '))
      },
      add: function (framework) {
         fw.push(framework)
      }
   }
}

const manager = createFrameworkManager();
console.log(manager); // объект с двумя методами: print и add
console.log(fw); // fw is not defined. Переменная fw не существует вне функции, но мы можем с ней взаимодействовать через объект manager.

manager.print() // Angular React
manager.add('VueJS') // добавление свойств
manager.print() // Angular React VueJS

// мы взаимодействуем с переменной fw, но она является приватной для объекта manager


// setTimeout

const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
   setTimeout(function () {
      console.log(`fib[${i}] = ${fib[i]}`);
   }, 1500)
}

// Result: fib[6] = undefined. Выведеться в консоль 6 раз. 
// Причина: переменная i создается один раз и дальше она изменяется как ссылка. Когда i = 6, цикл for возвращает false, но у i уже есть значение и спустя 1,5 сек setTimeout возвращает результат undefined (шестого индекса в массиве не существует)

// Существект два способа исправить эту ситуацию 

// 1) Изменить var на let (она будет существовать только внутри блочного scope)
/*
for (let i = 0; i < fib.length; i++) {
   setTimeout(function () {
      console.log(`fib[${i}] = ${fib[i]}`);
   }, 1500)
}
*/

// 2) Можно замкнуть цикл for


for (var i = 0; i < fib.length; i++) {
   (function (j) {
      setTimeout(function () {
         console.log(`fib[${j}] = ${fib[j]}`);
      }, 1500)
   })(i) // передаем значения i в качестве значений j
}