// Prototypes

// 1) Каждый объект имеет свой прототип, который берется от родительского от которого и был создан данный объект 

// __proto__ 
// указывает на прототип родительского класса или объекта (ES6)

// Object.getPrototypeOf() 
// указывает на прототип родительского класса или объекта (ES5)

// в JavaScript любоое наследование - прототипированное (все идет по цепочке, по дереву)

// 2) Свойство прототайп у различных функцийб которые по сути служит для того, чтобы передавать эти свойства для объектов, которые создаются например через ключевое слово new

function Cat(name, color) {
   this.name = name
   this.color = color
}
// данная функция по сути выступает в роли класса

// Можем расширять функционал этого класса. Можем занести сюда например функцию
Cat.prototype.voice = function () {
   console.log(`Cat ${this.name} says meow`);
}
// function создает свой контекст, который как раз и будет указывать на прототип (класс Cat)

const cat = new Cat('Кот', 'white')
cat.voice() // { voice: [Function (anonymous)] } 
console.log(Cat.prototype);

// ============
function Person() {}
Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Elena' // обращение у самому объекту, а не к его прототипу

console.log('skin' in person); //есть ли свойство skin в переменной person

console.log(person.legs); // 2
console.log(person.name); // Elena

console.log(person.hasOwnProperty('name')); //собственное свойство (true) или свойство из прототипа (false)

// Oblect.create() - создает новые объекты используя уже существующй прототип
const proto = {
   year: 2019
}
const myYear = Object.create(proto)
console.log(myYear.year); // 2019
console.log(myYear.hasOwnProperty(year)); // false
console.log(myYear.__proto__ === proto); // true

// Если значения поменять в прототипе, то оно будет изменено и у всех последователей