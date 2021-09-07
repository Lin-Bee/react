const animals = ['개','고양이','토끼'];
const anotherAnimals = [...animals, '새'];

const numbers = [1,2,3,4,5];

//1,2,3,4,5,10,1,2,3,4,5
const spNumbers = [...numbers, 10, ...numbers];

// const slime = {
//     name : '슬라임'
// }

// const cuteslime = {
//     name : '슬라임',
//     attribute : 'cute'
// }

// const cuteslime = {
//     name : '슬라임',
//     attribute : 'cute',
//     color:'purplue'
// }

//▽▽▽▽▽▽▽▽▽▽▽▽▽▽▽▽

// const slime = {
//     name : '슬라임'
// }

// const cuteslime = {
//     ...slime,
//     attribute : 'cute'
// }

// const cuteslime = {
//     ...slime,
//     color:'purplue'
// }
