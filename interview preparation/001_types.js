// В JS есть семь типов данных

// null, undefined, boolean, number, string, object, {symbol (ES6)}
// все типы данных являются примитивами, кроме object

console.log(typeof 0) // number 
console.log(typeof true) //boolean
console.log(typeof 'Javascript') //string
// три типа кавычек: '', "", ``(обратные кавычки или литералы, используются для динамической передачи данных)
console.log(typeof undefined) //undefined
console.log(typeof {} /*Date, Math*/ ) // object
console.log(typeof Symbol('JS')) // symbol

console.log(typeof null) //object - только через typeof. 
console.log(typeof
   function () {}) // function. Нет такого типа как функции. По сути - это объекты. Но это сделано для удобства разработчика

console.log(typeof NaN) // number


// Приведение типов

let language = 'Javascript'
if (language) {
   console.log('The best language is', language);
}
// if работает только с будевыми значениями. ЖС приводит строковый тип данных к булевому. 
// Falsy values - всегда приводятся к значению false. Это - ''(empty string), 0, null, undefined, NaN, false. Все это возвразает false при приведении.
// обращаемся к глобальному классу Boolean
console.log(Boolean(' ')) // true. Строка не пустая, она содержит пробел
console.log(Boolean('0')) // true. Строка не пустая, а содержит символ  
console.log(Boolean(0)) // false

console.log(Boolean([])) // true
console.log(Boolean({})) // true
console.log(Boolean(function () {})) // true


// Строки и числа

console.log(1 + '2') // string '12'  
// и для чисел (сложение), и для строк (конкатинация) существует действие для '+'. Приводит единицу к строковому формату
console.log('' + 1 + 0) // string '10'
// первой идет пустая строка, поэтому все остальные числа приводятся к строке
console.log('' - 1 + 0) // number -1
// для строк не определен оператор '-'
console.log('3' * '8') // number 24 
// для строк не определен оператор '*'. при умножении строки на строку JS приводит эти строки к числам

// ТУТ ВАЖЕН ПОРЯДОК НАПИСАНИЯ.
console.log(4 + 10 + 'px') // string '14px'
// в первую очередь складываються два числа (4 и 10), результат приводится потом к строке и конкатинируется с 'px'
console.log('px' + 5 + 10) // string 'px510'
//мзначально выражение было приведено к строке. А при конкатинации строки и числа - числа приводятся к строке
console.log('42' - 40) // number 2
// для строки не определен оператор '-', поэтому она приводится к числу.
console.log('42px' - 40) // NaN
// при приведении '42px' получаем NaN
console.log(null + 2) // number 2
// при приведении к числу null будет равняться 0
console.log(undefined + 42) // NaN
// undefined невозможно привести к числу.

// == vs ===

// == сравнивает значения с приведением типов (приведение к общему типу и потом сравнение)
// === сравнивает только сами значения
console.log(2 == '2') // true
console.log(2 === '2') // false (разные типы данных)
console.log(undefined == null) // true
console.log(undefined === null) // false (разные типы данных)

console.log('0' == false) // true. Интерпритатор приводит оба значения к одному (числовому значению) и сравнивает
console.log('0' == 0) // true. Интерпритатор приводит оба значения к одному (числовому значению) и сравнивает


// ============
console.log(false == '') // true (пустая строка)
console.log(false == []) // true (пустой массив)
console.log(false == {}) // false (пустой объект)
console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false
console.log(0 == []) // true
console.log(0 == {}) // false
console.log(0 == null) // false