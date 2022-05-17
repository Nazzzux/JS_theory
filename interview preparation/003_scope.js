//Scope (область видимости) - указывает на доступность определенных переменных
function funcA() {
   let a = 1;

   function funcB() {
      let b = 2;

      function funcC() {
         let c = 3;

         console.log('funcC:', a, b, c) // 1 2 3
      }

      funcC() // вызываем функцию
      console.log('funcB:', a, b) // 1 2
      // переменная c недоступна для этой функции, т.к объявлена она только в области видимости функции funcC
      // переменная же a доступна для дочерних элементов
   }

   funcB()
   console.log('funcA:', a) // 1
}