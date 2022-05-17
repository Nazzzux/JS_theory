//  Let (ES6)

// можем изменить в дальнейшем (переназначить)

let a = 'Variable a'
let b = 'Variable b'
// {} - block scope
{
   a = 'New Varaiable A'
   let b = 'Local Variable b'
   console.log('Scope A', a)
   console.log('Scope B', b)
}
console.log('A:', a)
console.log('B:', b)

// a была изменена, а scope b - существует внутри блока и это две разные переменные, которые не взаимосвязаны друг с другом


// Const

// Не могут быть переназначены. Это касается только примитивов. Хотя в const нельзя переназначить сам массив или объект, можно изменить (или удалить) значения внутри.