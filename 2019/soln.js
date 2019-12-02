const fs = require('fs')
const path = require('path')
const R = require('ramda')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8')
const inputArray = input.split('\n')

const divideBy3 = R.divide(R.__, 3)
const floor = R.curry(Math.floor)
const subtract2 = R.subtract(R.__, 2)
const fuelCalculation = R.compose(subtract2(), floor(), divideBy3())

const part1 = massArray => {
  return R.reduce((acc, mass) => acc + fuelCalculation(mass), 0, massArray)
}

const part2 = () => {
  const reduceFuelCalculations = R.reduce((acc, fuel) => acc + fuel, 0)

  const fuelCalculationIsGTZero = R.compose(
    R.lte(0),
    R.tap(x => console.log(x)),
    R.curry(fuelCalculation)
  )

  const mapMassToFuelCosts = R.map(mass => {
    let fuelValue = fuelCalculation(mass)
    let acc = 0
    R.until(fuelCalculationIsGTZero, () => {
      console.log('fuelValue', fuelValue)
      acc = acc + fuelValue
      fuelValue = fuelCalculation(fuelValue)
    })(fuelValue)
    return acc
  })

  return R.compose(reduceFuelCalculations, mapMassToFuelCosts)(inputArray)
}

const part1soln = part1(inputArray)
console.log('3325342', part1soln)

const part2soln = part2()
console.log('4985158', part2soln)

// const fuelCalculation = mass => Math.floor(mass / 3) - 2

// const part1 = massArray => {
//   return massArray.reduce((acc, mass) => acc + fuelCalculation(mass), 0)
// }

// const part2 = () => {
//   const fuelArray = inputArray.map(mass => {
//     let fuelValue = fuelCalculation(mass)
//     let acc = fuelValue
//     while (fuelCalculation(fuelValue) > 0) {
//       fuelValue = fuelCalculation(fuelValue)
//       acc = acc + fuelValue
//     }
//     return acc
//   })
//   return fuelArray.reduce((acc, fuel) => acc + fuel, 0)
// }
