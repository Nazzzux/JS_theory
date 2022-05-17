// Dependancy Inversion Principle

// Верхний уровень модулей не должен завичеть от абстракций нижнего уровня. Любые уровни должны зависеть от абстракций, а не от конкретики

class Fetch {
   request(url) {
      // return fetch(url).then(r => r.json())
      return Promise.resolve('data from fetch')
   }
}

// Нужно реализовать потом хранение не на удаленном сервере, а на localStorage

class LocalStorage {
   get() {
      const dataFromLocalStorage = 'data from local storage'
      return dataFromLocalStorage
      // return localStorage.gettItem('key')
   }
}

// в этом случае класс зависит от конкретных реализаций, и мы должны его переписывать
// нужно создать класс- интерфейс, который и будет связующим звеном

class FetchClient {
   constructor() {
      this.fetch = new Fetch()
   }

   clientGet() {
      return this.fetch.request('vk.com')
   }
}

class LocalStorageClient {
   constructor() {
      this.localStorage = new LocalStorage()
   }

   clientGet() {
      return this.localStorage.get()
   }
}


// class Database {
//    constructor() {
//       // this.fetch = new Fetch()
//       this.LocalStorage = new localStorage()
//    }
//    getData() {
//       // return this.fetch.request('vk.com')
//       return this.localStorage.get('is key')
//    }
// }

class Database {
   constructor(client) {
      this.client = client
   }

   getData() {
      return this.client.clientGet()
   }
}

// const db = new Database()
// console.log(db.getData())


// мы не изменяем Database, localStorage. Иы просто передаем другой класс в конструктор. Мы изменяем порядок зависимости. Это использует Angular в своем ядре. 

const db = new Database(new FetchClient())
const db2 = new Database(new LocalStorageClient())
console.log(db.getData(rand))
// Платежные системы - вместо того, чтобы каждый раз переисывать код код под разные вылюты, мы будем передавать новые классы валют, не меняя агрегатор