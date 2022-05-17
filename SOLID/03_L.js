// Liskov Substitution Principle

class Person {

}

// нарушает принцип Лисков. Она некорректно работает с базовым классом PersonFromDifferenCompany. Нужно пересмотротреть уровень наследования. Мы можем добавить еще один уровень абстракции добавив класс Member. Мы не избывили их от "людей", но при этом они являются разными типами людей

// Member наследуется от человека, но у него разные доступы
class Member extends Person {
   access() {
      console.log('У тебя есть доступ')
   }
}

// есть другой класс - Guest. Он тоже наследуется от Person, но у него немного другой доступ, т.к он не является членом компании
class Guest extends Person {
   access() {
      isGuest = true
   }
}

class Frontend /*extends Person*/ extends Guest {
   canCreateFrontend() {}
}

class Backend /*extends Person*/ extends Guest {
   canCreateBackend() {}
}

class PersonFromDifferrentCompany /*extends Person*/ extends Guest {
   access() {
      throw new Error('У тебя нет доступа! Иди к себе!')
   }
}

// и теперь эта функция работает с member, а не с person
function openSecretDoor( /*person*/ member) {
   // person.access()
   member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferrentCompany()) // Here should be member, not just person

// =====================

class Component {
   // render() {
   //    return `<div>Component</div>`
   // }
   isComponent = true
}

class ComponentWithTemplate extends Component {
   render() {
      return `<div>Component</div>`
   }
}

class HigherOrderComponent {

}

class HeaderComponent extends ComponentComponentWithTemplate {
   onInit() {}
}

class FooterComponent extends ComponentComponentWithTemplate {
   afterInit() {}
}

// HOC не имеет метода рендер. Они возвращают модифицированный класс
class HOC /*High Order Component*/ extends HigherOrderComponent {
   render() {
      throw new Error('Render is imposiible here')
   }

   wrapComponent(component) {
      component.wrapped = true
      return component
   }
}

function renderComponent(component) {
   component.render()
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())