//- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let f1 = n1.replace('..', ' ');
// let f2 = n2.replace('---', ' ');
// let f3 = n3.replace('__', ' ');
// console.log(f1);
// console.log(f2);
// console.log(f3);

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let f1 = () =>{
    let arr1 = [];
    for (let i = 1; i < 11; i++) {
        arr1.push( Math.floor(Math.random() * 100));
    }
   return arr1;
}
let randomArr = f1();
console.log(randomArr);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let sort = randomArr.sort(function(a, b){return a - b});
// console.log(sort);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let filter = randomArr.filter(item => !(item % 2));
// console.log(filter);
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let toStrinckArr = randomArr.map(num => num.toString());
// console.log(toStrinckArr);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//  let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// function sortNums(v) {
//     if (v === 'ascending'){
//      return   nums.sort((a, b) => a - b);
//     }else if(v === 'descending'){
//        return  nums.sort((a, b) => b - a);
//     }
// }
// console.log(sortNums('ascending'));
// console.log(sortNums('descending'));

//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//

//  -- відсортувати його за спаданням за monthDuration
// let sortArr = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortArr);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterArr = coursesAndDurationArray.filter(item => item.monthDuration >= 5);
// console.log(filterArr);
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// // document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) =>{
    let arr = [];
    while (str.length){
    arr.push(str.substring(0, n));
    str = str.substring(0, n)
    }
  return arr;
}
console.log(cutString('наслаждение',3));