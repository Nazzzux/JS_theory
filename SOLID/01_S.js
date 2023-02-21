// Single Responsibility Principle (Одна зона ответственности )

// Какой-то новый фунционал, который добавляют к классу, может смешивать повидение этого класса. И это другое повидение нужно выносить в отдельный класс

class News {
   constructor(title, text) {
      this.title = title;
      this.text = text;
      this.modified = false; //было ли изменение 
   }

   update(text) {
      this.text = text;
      this.modified = true;
   }

   toHTML() {
      return `
         <div class="news">
            <h1>${this.title}</h1>
            <p>${this.text}</p>
         </div>
      `
   }
   // Добавлением toHTML мы нарушаем этот принцип. Она отвечает за отображение новости на сайте, а не её формировании. Лучше выносить в отдельный класс.
   toJSON() {
      return JSON.stringify({
         title: this.title,
         text: this.text,
         modified: this.modified
      }, null, 2) //узнать о значении двух двугих параметров в JSON.stringify
   }
}

// класс NewsPrinter принимает в себя одну новость и трансформирует ее в разные форматы для отображения
class NewsPrinter {
   constructor(news) {
      this.news = news
   }

   html() {
      return `
      <div class="news">
         <h1>${this.news.title}</h1>
         <p>${this.news.text}</p>
      </div>
   `
   }

   json() {
      return JSON.stringify({
         title: this.news.title,
         text: this.news.text,
         modified: this.news.modified
      }, null, 2)
   }
}

const printer = new NewsPrinter(
   new News('Коронавирус', 'Новый штам')
);


// const news = new News('Коронавирус', 'Новый штам')
console.log(printer.html())
console.log(printer.json())

// класс NewsPrinter содержит только методы
