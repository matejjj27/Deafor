
// 1. Create a program that takes the user for their age and then displays a message that says "You are [age] years old!".

let userAge = prompt("What is you age?", "");
alert(`You are ${userAge} years old`);



// 2. Write a program that takes the user to enter two numbers, then adds them together and displays the result.

let number1 = prompt("Enter first number", "");
let number2 = prompt("Enter second number", "");
alert(`${number1} + ${number2} = ${parseInt(number1) + parseInt(number2)}`);



// 3. Create a program that generates a random number between 1 and 10 and then prompts the user to guess the number.
// If the user's guess is correct, display a message that says "Congratulations, you guessed the number!". 
// If the user's guess is incorrect, give them a hint and let them try again.

min = 1;
max = 10;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let userGuess = prompt("Guess the number between 1-10", "");
while (parseInt(userGuess) !== randomNumber) {
    userGuess = prompt(`Hint: It is close to ${randomNumber-1}.`, "")
}
alert("Congratulations, you guessed the number!")



// 4. Write a program that takes the user for a string, then displays the string in reverse order.

let userString = prompt("Enter a string to be reversed", "");
let reversedString = "";
for (let i = userString.length - 1; i >= 0; i--) {
    reversedString += userString[i];
}

alert(`${userString} reversed is: ${reversedString}`);



// 5. Create a program that takes the user for their favorite color and then displays a message that says "Your favorite color is [color]!".

let favoriteColor = prompt("What is your favorite color?", "");
alert(`Your favorite color is "${favoriteColor}"`);



// 6. Write a program that takes the user to enter three numbers, then finds and displays the largest of the three numbers.

function biggestOfThree() {
    let userNumber1 = parseInt(prompt("Enter first number", ""));
    let userNumber2 = parseInt(prompt("Enter second number", ""));
    let userNumber3 = parseInt(prompt("Enter third number", ""));

    let biggest = userNumber1;
    if(biggest < userNumber2) {
        biggest = userNumber2
    }
    if(biggest < userNumber3) {
        biggest = userNumber3;
    }
    return biggest;
}

alert(`The biggest of the three is ${biggestOfThree()}`)



// 7. Create a program that takes the user for a number and then displays a message that says whether the number is even or odd.

let userNumber = parseInt(prompt("Enter a number to see if it is even or odd", ""));

function isEvenOrOdd(userNumber) {
    if (userNumber % 2 === 1) {
        return "odd";
    }
    return "even";
}
alert(`Number ${userNumber} is ${isEvenOrOdd(userNumber)}.`);



// 8. Write a program that takes the user to enter a word and then displays the word with the first letter capitalized.

let word = prompt("Enter a word to capitalize first letter", "");

function capitalizeFirst(word) {
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord;
}
alert(`${capitalizeFirst(word)}`);



// 9. Create a program that generates a random number between 1 and 100 and then prompts the user to guess the number.
// If the user's guess is too high or too low, give them a hint and let them try again. Limit the number of guesses to 10.

function guessTheNumber() {
    min = 1;
    max = 100;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let userGuess = prompt("Guess the number between 1-100", "");

    for (let i = 0; i < 10; i++) {
        if(userGuess != randomNumber) {
            if(userGuess > randomNumber) {
                userGuess = prompt(`Hint: Try smaller number`, "");
            } else {
                userGuess = prompt(`Hint: Try a bigger number`, "");
            }
        } else {
            return "Congratulations, you guessed right!";
        }
    }

    return `You have used all 10 of your guesses. The correct number was ${randomNumber}`;
}
alert(`${guessTheNumber()}`);



// 10. Write a program that takes the user to enter a sentence, then counts and displays the number of vowels in the sentence.

let userSentence = prompt("Enter a sentence.", "");

function countVowels(sentence) {
    counter = 0;
    const lowerSentence = sentence.toLowerCase();
    for (let char in lowerSentence) {
        const letter = lowerSentence[char];

        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            counter++;
        }
    }
    return counter;
}

alert(`"${userSentence}" has ${countVowels(userSentence)} vowels.`)