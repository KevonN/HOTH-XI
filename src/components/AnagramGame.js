const fs = require('fs');
const readlineSync = require('readline-sync');
const permutations = require('js-combinatorics').permutations;

// Load dictionary from CSV file
const words = fs.readFileSync('dictionary.csv', 'utf-8').split('\n');

// Words for scrambling
const filteredWords = words.filter(word => word.trim().length === 7);

// Valid words for input
const allWords = words.filter(word => word.trim().length <= 15);

// Letter scrambling function
function scrambleWord(word) {
    const shuffled = word.split('').sort(() => Math.random() - 0.5).join('');
    return shuffled;
}

// All letter combinations in scrambling
function findCombinations(word) {
    const combinations = [];
    for (let r = 2; r <= word.length; r++) {
        permutations(word.split(''), r).forEach(combination => {
            combinations.push(combination.join(''));
        });
    }
    return combinations;
}


// All possible anagrams for a set of letters
function findAnagrams(scrambledWords, wordList) {
    const set1 = new Set(scrambledWords);
    const set2 = new Set(wordList);
    const commonWords = [...set1].filter(word => set2.has(word));
    return commonWords;
}

// Running functions
const library = filteredWords;
const randomWord = library[Math.floor(Math.random() * library.length)];
const scrambled = scrambleWord(randomWord);
const allCombinations = findCombinations(scrambled);
const anagrams = findAnagrams(allCombinations, allWords);

// THE GAME!
let count = 0;  // Initialize count outside the loop
const userInputs = [];  // Initialize an empty array to store user inputs

// // Set the duration of the game in seconds
const gameDuration = 60;  // 1 minute

// // Initialize the start time of the game
const startTime = Date.now();

while (true) {
    if ((Date.now() - startTime) >= gameDuration * 1000) {
        console.log("Time's up! Game over.");
        console.log("Thanks for playing! You scored", count, "points");
        break;
    }

    console.log("Your letters are:", scrambled);
    const userInput = readlineSync.question("Enter a word (or x to exit): ").trim().toLowerCase();

    if (userInput === 'x') {
        console.log("Thanks for playing! You scored", count, "points");
        break;
    }

    // Check if the user input is a valid word
    if (!allWords.includes(userInput)) {
        console.log("Not a valid word.");
    } else if (userInputs.includes(userInput)) {
        console.log("You have already entered this word.");
    } else {
        userInputs.push(userInput);  // Add the user input to the array

        let found = false;
        for (const word of anagrams) {
            if (userInput === word) {
                if (userInput.length === 3) {
                    console.log("+100");
                    count += 100;
                    console.log("Score:", count);
                } else if (userInput.length === 4) {
                    console.log("+200");
                    count += 200;
                    console.log("Score:", count);
                } else if (userInput.length === 5) {
                    console.log("+300");
                    count += 300;
                    console.log("Score:", count);
                } else if (userInput.length === 6) {
                    console.log("+400");
                    count += 400;
                    console.log("Score:", count);
                } else if (userInput === randomWord) {
                    console.log("Full points! (+500)");
                    count += 500;
                    console.log("Score:", count);
                }
                found = true;
                break;
            }
        }
        if (!found) {
            console.log("The word is valid but not in the list of anagrams.");
        }
    }
}