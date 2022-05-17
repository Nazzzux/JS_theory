// Context

//  скоуп указывает на видимость определенных переменных

// Контекст указывает на то, как функция была вызвана. Он постоянно указывает на ключевое слово this в текущем участке кода.

const person = {
   surname: 'Старк',
   knows: function (what, name) {
      console.log(`Ты ${what} знаешь, ${name} ${this.surname}`); // this совпадает с person. Эта ф-ция создала свой контекст, но она создана в контексте person (this = person)
   }
}

const john = {
   surname: 'Сноу'
}

person.knows('все', 'Бран') //Ты Все знаешь, Бран Старк

// Форсированная передача котнекста. Контекст в JS является объектом
person.knows.call(john, 'ничего не', 'Джон') // Ты ничего не знаешь, Джон Сноу
// surname был взят из другого контекста

person.knows.apply(john, ['ничего не', 'Джон'])
person.knows.call(john, ...['ничего не', 'Джон']) // разворачиваем с помощью spread

// .call(принимает контекст и параментры через запятую) и .apply(принимает контекст и через запятую массив параметров) вызывают функцию сразу


person.knows.bind(john, 'ничего не', 'Джон')

// .bind(принимает контекст и неограниченное количество параметров) возвращает новую функцию. Му можем сразу вызвать эту ф-цию (IIFE) или создать переменную и вызвать функцию через нее

// ===========

// Создание классов через function (ES5)

function Person(name, age) {
   this.name = name
   this.age = age

   console.log(this);
}

const elena = new Person('Elena', 20)
// этот объект - инстанс класса Person


// существует explicit binding (явный байндинг) - когда мы явно указываем контекст
function logThis() {
   console.log(this);
}

const obj = {
   num: 42
}
logThis.apply(obj) // { num: 42 }
logThis.call(obj) // { num: 42 }
logThis.bind(obj)() // { num: 42 }

// Implicit binding (неявная передача контекста)

const animal = {
   legs: 4,
   logThis: function () {
      console.log(this);
   }
}

animal.logThis() //{ legs: 4, logThis: [Function: logThis] }
// получаем тот объект, в контексте которого был вызван данный метод. 


//  Arrow functions 
// когда создаем через function - создается новый контекст

function Cat(color) {
   this.color = color
   console.log('This', this);
   (() => console.log('Arrow this', this))() // IIFE
}

new Cat('red'); //This Cat { color: 'red' }
// Arrow this Cat { color: 'red' }

// стрелочная функция не создает своего контекста. В этом случае контекст у стрелочной ф-ции - это сам объект