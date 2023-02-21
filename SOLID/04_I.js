// Interface Segregation Principle

class Animal {
   constructor(name) {
      this.name = name
   }

//    вот такого и нужно избегать
   walk() {
      console.log(`${this.name} умеет ходить`)
   }
   swim() {
      console.log(`${this.name} умеет плавать`)
   }
   fly() {
      console.log(`${this.name} умеет летать`)
   }
}

class Dog extends Animal {
   fly() {
      return null
   }
}
class Eagle extends Animal {
   swim() {
      return null
   }
}
class Whale extends Animal {
   walk() {
      return null
   }
   fly() {
      return null
   }
}

const dog = new Dog('Рекс')
dog.walk()
dog.swim()
dog.fly() // собака не умеет летать

const eagle = new Eagle('Орел')
eagle.walk()
eagle.swim() // орел не плавает
eagle.fly()

const whale = new Whale('Большой синий друг')
whale.walk() // киты не могут ходить
whale.swim()
whale.fly() // киты не могут летать

// в данном случае базовый класс очень сильно обобщен, у него много свойств, которые подходят не всем дочерним классам. И их приходится отменять для каждого дочернего класса отдельно. Это не правильно. 

class Animal {
   constructor(name) {
      this.name = name
   }
}

// эти объекты добавляют повидение
const walker = {
   walk() {
      console.log(`${this.name} умеет ходить`)
   }
}

const swimmer = {
   swim() {
      console.log(`${this.name} умеет плавать`)
   }
}

const flier = {
   fly() {
      console.log(`${this.name} умеет летать`)
   }
}

class Dog extends Animal {

}
class Eagle extends Animal {

}
class Whale extends Animal {

}

// Object.assign мерджит несколько объектов
Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)
