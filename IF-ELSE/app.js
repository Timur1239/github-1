// bulean = true false


// let a = parseInt(prompt('A'))
// let b = parseInt(prompt('B'))

// if (a>b) {
//     console.log("A chon");
// }
// else if (a<b) {
//     console.log("B chon");
// }
// else if (a===b) {
//     console.log("Ekoo barabar");
// }
// else {
//     console.log("tuura emes maalymat");
// }

// let age = parseInt(prompt('Siz kancha jastasyz?' ));

//  if (age>18) {
//     console.log("Kosh keliniz")
//  } else {
//     console.log("Kechiriniz sizge bolboit"); 
// }
 
const day = parseInt(prompt("Какой сегодня день?"));
switch (day) {
   case 1:
      console.log('Понедельник');
      break
   case 2:
      console.log('Вторник');
      break
   case 3:
      console.log('Среда');
      break
   case 4:
      console.log('Четверг');
      break
   case 5:
      console.log('Пятница');
      break
   case 6:
      console.log('Суббота');
      break
   case 7: 
   console.log('Воскресенье');
   break
   default:
      console.log('Error number')
}