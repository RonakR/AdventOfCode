const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.js'), 'UTF8');
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

    inputArraySorted.forEach((eachInput, index) => {
        for (let letter in eachInput) {
            const nextInput = inputArraySorted[index+1];
            for 
        }
    })
}

// const part1soln = part1();
// console.log(part1soln);
const part2soln = part2();
console.log(part2soln);