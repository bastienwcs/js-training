
'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = (string) => {
    const words = string.split(' ')
    words.forEach((word, i, words) => {
        words[i] = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    })
    return words.join(' ')
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('How are you?'), 'How Are You?')
assert.strictEqual(jadenCase('ThIS Is MadNEsS!'), 'This Is Madness!')
// End of tests */
