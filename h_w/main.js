//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
//  let arr1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
// arr1.forEach(item => console.log(item.length));

//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// let toUpperCase = arr1.map(item => item.toUpperCase());
// console.log(toUpperCase);

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let arr2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// let toLowerCase = arr2.map(item => item.toLowerCase());
// console.log(toLowerCase);

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
//  let str1 = str.trim();
// console.log(str1);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let stringToarray = (s) =>{
//    return s.split(' ');
// };
// let arr = stringToarray(str);
// console.log(arr);
// document.writeln(arr);

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// //     document.writeln(delete_characters(str, 7)); // Каждый
//     let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => str.slice(0,length);
// console.log(delete_characters(str, 7));
// document.writeln(delete_characters(str, 7));

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => str.split(' ').join('-').toUpperCase();
// console.log(insert_dash(str));

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'hrrii';
// let fitstLeterToUper = (string) => string.charAt(0).toUpperCase() + string.slice(1);
// console.log(fitstLeterToUper(str));

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'heee hoo hqqq';
// let capitalize = (str) => str.split(' ').map(itam => itam.charAt(0).toUpperCase() + itam.slice(1)).toString();
// console.log(capitalize(str));
