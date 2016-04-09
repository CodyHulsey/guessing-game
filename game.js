
var userName = prompt('What\'s your name?'); //This is asking the user what their name is
console.log('The visitor\'s name is: ' + userName); //This is logging the visitors answer to the system
var rightAnswer = 0;
var wrongAnswer = 0;

var favFood = prompt('Do I like tacos?'); //This is a prompt that pops up and asks if I like tacos.
if (favFood.toLowerCase() === 'yes') {
  alert('You are correct, ' + userName + '. I love tacos.'); // This will alert the visitor if they typed yes into the entry box.
  rightAnswer++; //If the user gets the right answer they get 1 point.
  console.log('This answer was correct. ' + userName + ' gets a point.');
  console.log('The user entered:' + favFood + ' which equates to Yes.'); //This is logging the visitors answer to the system
} else {
    alert('You are incorrect, ' + userName + '. I love Tacos.'); // This is what the viewer will see if they answer anything besides yes
    wrongAnswer++; //If the user gets the wrong answer it does not give them a point.
    console.log('This answer was incorrect. ' + userName + ' doesn\'s get a point.');
    console.log('The user entered: ' + favFood + ' which equates to No.'); //This is logging the visitors answer to the system
}
var favDrink = prompt('Do I like the drink called, "Tom Collins?"'); //This is asking the user if I like Tom Collins'
if (favDrink.toLowerCase() === 'yes') {
  alert('You are correct, ' + userName + '. That is my drink of choice!'); // This will alert the visitor if they typed yes into the entry box.
  rightAnswer++; // If the user gets the right answer they get 1 point.
  console.log('This answer was correct. ' + userName + ' gets a point.');
  console.log('The user entered:' + favDrink + ' which equates to Yes.'); //This is logging the visitors answer to the system
} else {
    alert('You are incorrect, ' + userName + '. Tom Collins is my drink of choice.'); // This is what the viewer will see if they answer anything besides yes
    wrongAnswer++; //If the user gets the wrong answer it does not give them a point.
    console.log('This answer was incorrect. ' + userName + ' doesn\'t get a point.');
    console.log('The user entered: ' + favDrink + ' which equates to No.'); //This is logging the visitors answer to the system
}
var favMusician = prompt('Do I like the musician named Future?');
if (favMusician.toLowerCase() === 'yes') {
  alert('You are right, ' + userName + '. Future is one of my favorite rappers at this moment.'); // This will alert the visitor if they typed yes into the entry box.
  rightAnswer++; //If the user gets the right answer it gets them 1 point.
  console.log('This answer was correct. ' + userName + ' gets a point.');
  console.log('The user entered: ' + favMusician + ' which equates to Yes.'); //This is logging the visitors answer to the system
} else {
    alert('You\'re wrong, ' + userName + '. I like Future and think he is crushing the rap game right now.'); // This is what the viewer will see if they answer anything besides yes
    wrongAnswer++; //If the user gets the wrong answer it does not give them a point.
    console.log('This answer was incorrect. ' + userName + ' doesn\'t get a point.');
    console.log('The user entered: ' + favMusician + ' which equates to No.'); //This is logging the visitors answer to the system
}
var favNumber = prompt('Guess my favorite number');
if (favNumber === '13') {
  alert('Woah, ' + userName + '. That is correct. How did you pull that off?');
  rightAnswer++; //If the user gets the right answer it gets them 1 point.
  console.log('This answer was correct. ' + userName + ' gets a point.');
  console.log('Number input from user Prompt: ' + favNumber); //This is logging the visitors answer to the system
} else if (favNumber < '13') {
    alert('You guessed: ' + favNumber + '. That is too low.'); // This is what the viewer will see if they answer anything less than 23
    wrongAnswer++; //If the user gets the wrong answer it does not give them a point.
    console.log('This answer was incorrect. ' + userName + ' doesn\'t get a point.');
    console.log('Number input from user Prompt: ' + favNumber); //This is logging the visitors answer to the system
} else {
    alert('You guessed: ' + favNumber + '. That is too high.'); // This is what the viewer will see if they answer anything more than 23
    wrongAnswer++; //If the user gets the wrong answer it does not give them a point.
    console.log('This answer was incorrect. ' + userName + ' doesn\'t get a point.');
    console.log('Number input from user Prompt: ' + favNumber); //This is logging the visitors answer to the system
}

var counter = 0;
var userNum = parseInt(prompt('Guess my number!'));
while(counter <= 2) {
  if (userNum === 5) {
    alert('You nailed it.');
    rightAnswer++;
    console.log('This answer was correct. ' + userName + ' gets a point.');
    break;
  } else if (userNum > 5) {
    alert ('Your number was too high!')
    counter++;
    wrongAnswer++;
    console.log('This answer was incorrect. ' + userName + ' doesn\'t get a point.');
    console.log('The counter is at ' + counter);
    userNum = parseInt(prompt('Guess lower.'));
    // counter += 1;
    // counter = conter + 1;
  } else if (userNum < 5) {
    alert('Your number was too low!');
    counter++;
    wrongAnswer++;
    console.log('This answer was incorrect. ' + userName + ' doesn\'t get a point.');
    console.log('The counter is at ' + counter);
    userNum = parseInt(prompt('Guess higher.'));
  }
}

if (rightAnswer > wrongAnswer) {
  alert('Congratulations! You got ' + rightAnswer + ' answer(s) correct and ' + wrongAnswer + ' answer(s) wrong. You really know me.')
  console.log('The user got more questions right than wrong. They got ' + rightAnswer + ' correct.')
  } else {
    alert('Bummer! You got ' + wrongAnswer + ' answer(s) wrong and ' + rightAnswer + ' answer(s) right. Better luck next time.')
    console.log('The user got more questions wrong than right. They got ' + wrongAnswer + ' wrong.')
  }
