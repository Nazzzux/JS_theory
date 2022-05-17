// Open Close Principle

// Некоторые классы должны быть открыты для расширения, но закрыты для модификаций. Это значит, что новый фунционал не должен изменять старый код


// чтобы соответствовать этому принципу, добавляем один базовый класс Shape, который уже бы реализовывали в дочерних классах
class Shape {
   area() {
      // Базовая имплементация, если она не переписана, будет выдавать ошибку
      throw new Error('Area method should be implemented')
   }
}

class Square extends Shape { // extends Shape - добавлено
   constructor(size) {
      super() // при наличии extend и constructor
      // this.type = 'square',
      this.size = size
   }

   area() {
      return this.size ** 2
   }
}

class Circle extends Shape {
   constructor(radius) {
      super()
      // this.type = 'circle',
      this.radius = radius
   }

   area() {
      return (this.radius ** 2) * Math.PI
   }
}

// Прибегает заказчик, и говорит что есть еще прямоугольники, и поэтому нужно считать и их сумму
// Вместо кругов, квадратов и прямоугольников в жизни могут быть разные типы инпутов. Но сами инпуты - однотипны элементы
// Создаем новый класс Rectangle с двумя параметрами

class Rectangle extends Shape {
   constructor(width, height) {
      super()
      // this.type = 'rect'
      this.width = width
      this.height = height
   }

   area() {
      return this.width * this.height
   }
}

class Triangle extends Shapes {
   constructor(a, b) {
      super()
      this.a = a
      this.b = b
   }

   area() {
      return (this.a * this.b) / 2
   }
}


class AreaCalculator {
   constructor(shapes = []) {
      this.shapes = shapes
   }

   sum() {
      return this.shapes.reduce((acc, shape) => {
         // if (shape.type === 'circle') {
         //    acc += (shape.radius ** 2) * Math.PI
         // } else if (shape.type === 'square') {
         //    acc += shape.size ** 2
         // } else if (shape.type = 'rect') {
         //нарушение приципа open close. Мы ддобавили новый функционал в старый код, написанный нами
         //    acc += shape.width * shape.height
         // }
         acc += shape.area() // этот метод реализован у каждого класса
         return acc
      }, 0)
   }
}

const calc = new AreaCalculator([
   new Square(10),
   new Circle(1),
   new Circle(5),
   new Rectangle(3, 5),
   new Triangle(12, 3)
])

// Класс AreaCalculator открыт для расширения, но закрыт для модификации. Мы один раз прописали формулу, и не меняем ее

console.log(calc.sum())