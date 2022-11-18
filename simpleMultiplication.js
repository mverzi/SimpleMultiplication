/**
 * This function multiplies a given number by eight if it is an even number and by nine otherwise.
 * @param {integer} number 
 * @returns number multiplied by 8 or 9
 */
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}