// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
//   if (err) {
//     console.log(err)
//     throw new Error(err.message)
//   }
// })
//
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
//   if (err) {
//     console.log(err)
//     throw new Error(err.message)
//   }
// })

// -----------------------------------------------------------------------------------------------------

// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;
const onlineUsers = [
  {name: 'Petro', age: 22, status: false},
  {name: 'Oleg', age: 21, status: true},
  {name: 'Alina', age: 20, status: false},
  {name: 'Oleksandr', age: 22, status: false},
  {name: 'Denys', age: 23, status: true},
  {name: 'Martha', age: 28, status: false}
];

const inPersonUsers = [
  {name: 'Oleg', age: 20, status: false},
  {name: 'Mariana', age: 58, status: true},
  {name: 'Lisa', age: 20, status: false},
  {name: 'Orest', age: 22, status: true},
  {name: 'Kyrylo', age: 33, status: true},
];

// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл
// виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.

// FIRST METHOD (FOR ONLINE USERS):
// fs.writeFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), '', (err => {
//   if (err) {
//     console.log(err)
//     throw new Error(err.message)
//   }
// }));

// for (let user of onlineUsers) {
//   fs.appendFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'),
//     `NAME: ${user.name}, AGE: ${user.age}, STATUS: ${user.status}\n`,
//     {flag: 'a'},
//     (err) => {
//     if (err) {
//       console.log(err)
//       throw err
//     }
//   })
// }

// SECOND METHOD (for online users):
// for (let user of onlineUsers) {
//   fs.writeFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'),
//     `NAME: ${user.name}, AGE: ${user.age}, STATUS: ${user.status}\n`,
//     {flag: 'a'},
//     err => {
//       if (err) {
//         console.log(err)
//         throw new Error(err.message)
//       }
//     });
// }
//
// IN PERSON USERS:
// for (let user of inPersonUsers) {
//   fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'),
//     `NAME: ${user.name}, AGE: ${user.age}, STATUS: ${user.status}\n`,
//     {flag: 'a'},
//     err => {
//       if (err) {
//         console.log(err)
//         throw new Error(err.message)
//       }
//     });
// }

// -----------------------------------------------------------------------------------------------------

// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

// FIRST SOLUTION: ТУТ Я МІНЯВ ФАЙЛИ МІСЦЯМИ!

// const kamasutra = () => {
//     fs.rename(
//       // FROM
//       path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'),
//       // TO (and create file)
//       path.join(__dirname, 'main', 'online', 'inPersonUsers.txt'), err => {
//         if (err) {
//           console.log(err)
//           throw new Error(err.message)
//         }
//       })
//
//     fs.rename(
//       // FROM
//       path.join(__dirname, 'main', 'online', 'onlineUsers.txt'),
//       // TO (and create file)
//       path.join(__dirname, 'main', 'inPerson', 'onlineUsers.txt'), err => {
//         if (err) {
//           console.log(err)
//           throw new Error(err.message)
//         }
//       })
// }
//
// kamasutra();

// SECOND SOLUTION: ТУТ Я ПЕРЕНОСИВ ВМІСТ ФАЙЛІВ!

// const kamasutraNumberTwo = () => {
//   fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'),
//     'utf8',
//     (err, inPersonUsersData) => {
//       if (err) {
//         console.log(err);
//         throw new Error(err.message);
//       }
//
//     fs.readFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'),
//       'utf8',
//       (err2, onlineUsersData) => {
//       if (err2) {
//         console.log(err2);
//         throw new Error(err2.message);
//       }
//
//         fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'), onlineUsersData, err3 => {
//           if (err3) {
//             console.log(err3);
//             throw new Error(err3.message);
//           }
//
//           fs.writeFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), inPersonUsersData, err4 => {
//             if (err4) {
//               console.log(err4);
//               throw new Error(err4.message);
//             }
//           })
//         })
//       })
//     })
// }
//
// kamasutraNumberTwo();