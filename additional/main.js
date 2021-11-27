//- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе
// :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
// let checkMail = (mail) =>{
//     let l = mail.search('@');
//     let p = null;
//     mail.split('').map((item,index) => {
//         if(item === '.'){
//             p = index;
//         }});
//     if (l !== -1 && l !== 0) {
//         if (l === p || (l +1) === p || (l + 2) === p){
//             alert('You enter no correct point')
//         }
//     } else {
//         alert('Try entering your email again.');
//     }
// };
// let m1 = 'someemail@gmail.com';
// let m2 = 'someeMAIL@gmail.com';
// let m3 = 'someeMAIL@i.ua';
// let m4 = 'some.email@gmail.com';
// let m5 = 'someeMAIL@gmail.com';
// checkMail(m1);
// checkMail(m2);
// checkMail(m3);
// checkMail(m4);
// checkMail(m5);

//- є масив let coursesArray = [
//              {
//                  title: 'JavaScript Complex',
//                  monthDuration: 5,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//              },
//              {
//                  title: 'Java Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'java core',
//                      'java advanced']
//              },
//              {
//                  title: 'Python Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'python core',
//                      'python advanced']
//              },
//              {
//                  title: 'QA Complex',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//              },
//              {
//                  title: 'FullStack',
//                  monthDuration: 7,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'react',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'node.js',
//                      'python',
//                      'java']
//              },
//              {
//                  title: 'Frontend',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//              }
//          ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArray = [
             {
                 title: 'JavaScript Complex',
                 monthDuration: 5,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
             },
             {
                 title: 'Java Complex',
                 monthDuration: 6,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'angular',
                     'aws',
                     'docker',
                     'git',
                     'java core',
                     'java advanced']
             },
             {
                 title: 'Python Complex',
                 monthDuration: 6,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'angular',
                     'aws',
                     'docker',
                     'python core',
                     'python advanced']
             },
             {
                 title: 'QA Complex',
                 monthDuration: 4,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
             },
             {
                 title: 'FullStack',
                 monthDuration: 7,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'react',
                     'angular',
                     'aws',
                     'docker',
                     'git',
                     'node.js',
                     'python',
                     'java']
             },
             {
                 title: 'Frontend',
                 monthDuration: 4,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
             }
         ];
// let arr = coursesArray.map(item => item).sort((a, b) => a.modules.length < b.modules.length ? 1 : -1);
// console.log(arr);
// console.log(coursesArray);

//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
// let count = (str, stringsearch) => {
//         let coutSunb = null;
//         str.split('').map((item) => {
//         if(item === stringsearch){
//             coutSunb++
//         }});
//         return coutSunb;
// };
// console.log(count(str, symb));

//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let str = "Сила тяжести приложена к центру масс тела";
// let cutString = (str, n) =>{
//     return  str.split(' ').slice(0, n).toString().split(',').join(' ');
// }
// console.log(cutString(str, 5));