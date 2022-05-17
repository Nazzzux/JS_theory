// Async

// js работает в одном потоке

const first = () => console.log('First');
const second = () => console.log('Second');
const third = () => console.log('Third');

// выводится последовательно
first()
second()
third()

// 1 3 2
first()
setTimeout(second(), 0)
third()