// Завдання на практику
const fs = require('fs');
const path = require('path');

// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл,
// в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

// fs.writeFile(path.join(__dirname, 'file.txt'), 'Bye world', (err) => {
//   if (err) {
//     console.log(err)
//     throw new Error(err.message)
//   }
//
//   fs.readFile(path.join(__dirname, 'file.txt'), 'utf8', (err2, data) => {
//     if (err2) {
//       console.log(err2);
//       throw new Error(err2.message)
//     }
//
//     fs.writeFile(path.join(__dirname, 'fancyFile.txt'), data, (err3) => {
//         if (err3) {
//           console.log(err3)
//           throw new Error(err3.message)
//         }
//       }
//     )
//   })
// })


// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після
// того як все завершиться. Також вийде callback hell

// fs.writeFile(path.join(__dirname, 'superFile.txt'), 'Продам гараж в Бердичеві!!!!!!!', (err) => {
//   if (err) {
//     console.log(err)
//     throw new Error(err.message)
//   }
//
//   fs.readFile(path.join(__dirname, 'superFile.txt'), 'utf8', (err2, data) => {
//     if (err2) {
//       console.log(err2)
//       throw new Error(err2.message)
//     }
//
//     fs.mkdir(path.join(__dirname, 'megaDir'),(err3) => {
//       if (err3) {
//         console.log(err3)
//         throw new Error(err3.message)
//       }
//
//       fs.writeFile(path.join(__dirname, 'megaDir', 'awesomeFile.txt'), data, (err4) => {
//         if (err4) {
//           console.log(err4)
//           throw new Error(err4.message)
//         }
//
//         fs.unlink(path.join(__dirname, 'superFile.txt'), (err5) => {
//           if (err5) {
//             console.log(err5)
//             throw new Error(err5.message)
//           }
//         })
//       })
//     })
//   })
// })

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в
// файли запишіть якусь дату) ) і напишіть функцію яка буде зчитувати папку і перевіряти якщо
// дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам
// потрібно їх перейменувати і додати до назви префікс _new

// fs.mkdir(path.join(__dirname, 'coolDir'), err => {
//   if (err) {
//     console.log(err)
//     throw new Error(err.message)
//   }
//
//   fs.mkdir(path.join(__dirname, 'coolDir', 'superCoolDir'), err2 => {
//     if (err2) {
//       console.log(err2)
//       throw new Error(err2.message)
//     }
//   })
//
//   fs.mkdir(path.join(__dirname, 'coolDir', 'megaCoolDir'), err3 => {
//     if (err3) {
//       console.log(err3)
//       throw new Error(err3.message)
//     }
//   })
//
//   fs.writeFile(path.join(__dirname, 'coolDir', 'gorgeousFile.txt'),
//     'Тут могла бути ваша реклама', err4 => {
//       if (err4) {
//         console.log(err4)
//         throw new Error(err4.message)
//       }
//
//       fs.writeFile(path.join(__dirname, 'coolDir', 'fancyFile.txt'),
//         'Some data, Some data, Some data, Some data', err4 => {
//           if (err4) {
//             console.log(err4)
//             throw new Error(err4.message)
//           }
//         })
//     })
// })

// const directoryHandler = () => {
//   fs.readdir(path.join(__dirname, 'coolDir'), (err, data) => {
//     if (err) {
//       console.log(err)
//       throw new Error(err.message)
//     }
//
//     data.forEach(contentItem => {
//       if (contentItem.match(/\.txt$/)) {
//         fs.truncate(path.join(__dirname, 'coolDir', contentItem), err2 => {
//           if (err2) {
//             console.log(err2)
//             throw new Error(err2.message)
//           }
//         })
//       } else {
//         fs.rename(
//           path.join(__dirname, 'coolDir', contentItem),
//           path.join(__dirname, 'coolDir', `_new${contentItem}`), err3 => {
//           if (err3) {
//             console.log(err3)
//             throw new Error(err3.message)
//           }
//         })
//       }
//     })
//   })
// }
//
// directoryHandler()