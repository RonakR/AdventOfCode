const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');
const inputArray = input.split('\n');

// const testInput = '+7, +7, -2, -7, -4';
// const testInputArray = testInput.split(',');

const part1 = () => {
    let acc = 0;
    for (let num of inputArray){
        acc = acc + Number(num);
    }
    return acc;
}

const part2 = () => {
    const frequencies = Array();
    let found = false;
    let acc = 0;
    let frequency = 0;
    while (!found) {
        for (let num of inputArray){
            acc = acc + Number(num);
            if (frequencies[acc]) {
                found = true;
                frequency = acc;
                break;
            } else {
                frequencies[acc] = 1;
            }
        }
    }
    
    return frequency;
}

// const part1soln = part1();
// console.log(part1soln);
const part2soln = part2();
console.log(part2soln);