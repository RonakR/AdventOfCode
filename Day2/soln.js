const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');
const inputArray = input.split('\n');

// const testInputArray  = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];

const part1 = () => {
    let twoOccurances = 0
    let threeOccurances = 0

    let foundTwo = false;
    let foundThree = false;

    let accObj = {}

    inputArray.forEach((eachInput) => {
        const letterArray = eachInput.split('');
        letterArray.forEach((letter) => {
            if (!accObj[letter]) accObj[letter] = 1;
            else accObj[letter] = accObj[letter] + 1;
        });
    
        for (letter in accObj) {
            if (accObj[letter] == 2 && !foundTwo) {
                twoOccurances += 1;
                foundTwo = true;
            } else if (accObj[letter] == 3 && !foundThree) {
                threeOccurances += 1;
                foundThree = true;
            }
        }

        foundTwo = false;
        foundThree = false;
        accObj = {};
    })

    return twoOccurances * threeOccurances;
}

const inputArraySorted = inputArray.sort();
const part2 = () => {
    let diff1;
    let diff2;
    let diffSeen = false;
    let winnerFound = false;
    let resultingWord = '';

    inputArraySorted.some((eachInput, index) => {
        if (index === inputArraySorted.length -1 ) return true;
        for (let i = 0; i < eachInput.length; i++) {
            let nextInput = inputArraySorted[index+1];
            if (eachInput[i] !== nextInput[i]) {
                if (!diffSeen) {
                    diffSeen = true;
                    diff1 = eachInput[i];
                    diff2 = nextInput[i];
                    resultingWord = eachInput.slice(0, i) + eachInput.slice(i+1);
                } else {
                    diffSeen = false;
                    break;
                }
            }
            if (i === eachInput.length - 1) {
                winnerFound = true;
                console.log(eachInput, nextInput, diff1, diff2, resultingWord);
            }
        }
        return winnerFound;
    });
    return resultingWord;
}

// const part1soln = part1();
// console.log(part1soln);
const part2soln = part2();
console.log(part2soln);