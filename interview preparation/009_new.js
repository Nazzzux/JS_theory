// New

function Cat(color, name) {
   this.color = color;
   this.name = name
}

const cat = new Cat('black', 'Кот')
console.log(cat); // инстанс класса Cat

// собственное new
// создаем ф-цию, в которую мы получаем конструктор и с помощью оператора rest получаем массив аргументов (поля, к-рые нам необходимы для создания нового инстанса/экземпляра)
// релизация в (ES5)
function myNew(constructor, ...args) {
   const obj = {} // создаем пустой объект, который нужно будет вернуть на выходе
   Object.setPrototypeOf(obj, constructor.prototype) // с помощью глобального класса Object и его метода .setPrototypeOf указываем для нового объекта прототип ф-ции-конструктора
   return constructor.apply(obj, args) || obj // возвращаем данный объект. Конструктор - это ф-ция, у которой есть метод .apply() куда мы можем передавать контекст (с к-рым вызываем - obj) и все пераметры в массиве args. 
   // Если это не работает возвращаем сам объект (|| obj)
}

const cat = myNew(Cat, 'black', 'Кот')
console.log(cat) // принцип работы new

const cat = Cat()
console.log(cat); // undefined - ф-ция Cat ничего не возвращает