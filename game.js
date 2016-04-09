
var userName = prompt('What\'s your name?'); //This is asking the user what their name is
console.log('The visitor\'s name is: ' + userName); //This is logging the visitors answer to the system
var favFood = prompt('Do I like tacos?'); //This is a prompt that pops up and asks if I like tacos.
if (favFood.toLowerCase() === 'yes') {
  alert('You are correct, ' + userName + '. I love tacos.'); // This will alert the visitor if they typed yes into the entry box.
  console.log('The user entered:' + favFood + ' Which equates to Yes.'); //This is logging the visitors answer to the system
} else {
    alert('You are incorrect, ' + userName + '. I love Tacos.'); // This is what the viewer will see if they answer anything besides yes
    console.log('The user entered: ' + favFood + ' Which equates to No.'); //This is logging the visitors answer to the system
}
var favDrink = prompt('Do I like the drink called, "Tom Collins?"'); //This is asking the user if I like Tom Collins'
if (favDrink.toLowerCase() === 'yes') {
  alert('You are correct, ' + userName + '. That is my drink of choice!'); // This will alert the visitor if they typed yes into the entry box.
  console.log('The user entered:' + favDrink + ' Which equates to Yes.'); //This is logging the visitors answer to the system
} else {
    alert('You are incorrect, ' + userName + '. Tom Collins is my drink of choice.'); // This is what the viewer will see if they answer anything besides yes
    console.log('The user entered: ' + favDrink + ' Which equates to No.'); //This is logging the visitors answer to the system
}
var favMusician = prompt('Do I like the musician named Future?');
if (favMusician.toLowerCase() === 'yes') {
  alert('You are right, ' + userName + '. Future is one of my favorite rappers at this moment.'); // This will alert the visitor if they typed yes into the entry box.
  console.log('The user entered: ' + favMusician + ' Which equates to Yes.'); //This is logging the visitors answer to the system
} else {
    alert('You\'re wrong, ' + userName + '. I like Future and think he is crushing the rap game right now.'); // This is what the viewer will see if they answer anything besides yes
    console.log('The user entered: ' + favMusician + ' Which equates to No.'); //This is logging the visitors answer to the system
}
var favNumber = prompt('Guess my favorite number');
if (favNumber === '13') {
  alert('Woah, ' + userName + '. That is correct. How did you pull that off?');
  console.log('Number input from user Prompt: ' + favNumber); //This is logging the visitors answer to the system
} else if (favNumber < '13') {
    alert('You guessed: ' + favNumber + '. That is too low.'); // This is what the viewer will see if they answer anything less than 23
    console.log('Number input from user Prompt: ' + favNumber); //This is logging the visitors answer to the system
} else {
    alert('You guessed: ' + favNumber + '. That is too high.'); // This is what the viewer will see if they answer anything more than 23
    console.log('Number input from user Prompt: ' + favNumber); //This is logging the visitors answer to the system
}




//var userName = prompt('Tell me your name.');
//var message = 'This is a test.';
//if (username === 'Scott') {
//    message = 'That\'s  right, Scott was the right answer';
//} else if (userName === 'Benzo') {
//    message = 'That\'s right, Bambi was the right answer.';
//  } else {
//  message = 'Sorry. You were way off';
//} //No need to have a semicolon here. This is a code block.
//  console.log(message);
// var arr = [1,3, 'Blue', true, 'Dog'];
// for (var i = arr.length - 1; i >= 0; i--) { // for (start, stop, step)
//   console.log(arr [i]+ ': ' + typeof arr[i]);
//   // if (typeof arr[i] === 'string') {
//   //   console.log(arr[i]); // if the value is a string it will console.log that entry
//   // }
// }

// var userNum =parseInt(prompt('Guess my number'))
// while (userNum !== 10) {
//   console.log(userNum);
//   userNum = parseInt(prompt('Guess my number.'));
// }

// This is giving the user too many guesses
// var counter = 0;
// var userNum = parseInt(prompt('Guess my number'));
// while(counter <= 2) {
//   if (userNum === 10) {
//     alert('You nailed it.');
//     break;
//   } else if (userNum > 10) {
//     alert ('Your number was too high')
//     counter++;
//     console.log('The counter is at ' + counter);
//     userNum = parseInt(prompt('Guess lower.'));
//     // counter += 1;
//     // counter = conter + 1;
//   } else if (userNum < 10) {
//     alert('Your number was too low');
//     counter++;
//     console.log('The counter is at ' + counter);
//     userNum = parseInt(prompt('Guess higher.'));
//   }
// }
