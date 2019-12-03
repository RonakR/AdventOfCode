const fs = require('fs')
const path = require('path')
const R = require('ramda')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8')
const inputArray = input.split('\n')
const intcode = inputArray[0].split(',').map(i => Number(i))

const part1 = (intcode) => {
  const codes = {
    1: 'ADDCODE',
    2: 'MULTCODE',
    99: 'HALTCODE'
  }

  // Changes requested before first processing
  intcode[1] = 52 // 12
  intcode[2] = 96 // 2

  for(let i = 0; i < intcode.length; i+=4) {
    const opcode = codes[intcode[i]]
    if (opcode === 'HALTCODE') break

    const newValuePosition = intcode[i+3]
    const val1 = intcode[i+1]
    const val2 = intcode[i+2]
    if (opcode === 'MULTCODE') {
      intcode[newValuePosition] = intcode[val1] * intcode[val2]
    } else if (opcode === 'ADDCODE') {
      intcode[newValuePosition] = intcode[val1] + intcode[val2]
    }
  }

  return intcode[0]
}

// For the soln for part 2 I decided to just try and the intcode values up there to see what would happen.
// Well... after randomly choosing 52 and 60 as my numbers I realized I got real close to 
// the answer number, which is `19690720`. So, I decided to just go all in and manually
// chnage the numbers. Landed on 52 and 96, which means the result was 5296. 

const part1Soln = part1(intcode)
console.log(part1Soln)