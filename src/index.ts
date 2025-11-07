import type { DicewareKey } from "./types"
import { words } from "./words"

/**
 * Generates a random int number using crypto.getRandomValues.
 * @param max Max random int number (inclusive)
 * @returns Random int number from 0 to max
 */
export const getRandomInt = (max: number): number => {
    const randomBuffer = new Uint32Array(1)
    crypto.getRandomValues(randomBuffer)
    return randomBuffer[0]! % (max + 1)
}

const generateKey = (): DicewareKey => {
    let key = ""
    for (let i = 0; i < 5; i++) {
        key += getRandomInt(5) + 1
    }
    return key as DicewareKey
}

const keyToIndex = (key: DicewareKey): number => {
    let index = 0
    for (let i = 0; i < 5; i++) {
        const digit = parseInt(key.charAt(i), 10) - 1
        index = index * 6 + digit
    }
    return index
}

const getWord = (key: DicewareKey): string => {
    const index = keyToIndex(key)
    return words[index]!
}

const generatePhrase = (wordsQuantity: number): string => {
    let phrase = ""

    if (!wordsQuantity) return phrase

    for (let i = 0; i < wordsQuantity; i++) {
        if (i != 0) phrase += " "
        phrase += words[keyToIndex(generateKey())]
    }

    return phrase
}

export type { DicewareKey } from "./types"
export const dicewareEN = {
    words,
    /**
     * Generates a random diceware key based on crypto.getRandomValues.
     * @returns Diceware Key ("11111"-"66666")
     */
    generateKey,
    /**
     * Converts a Diceware Key into a word list index.
     * @param key Diceware Key ("11111"-"66666")
     * @returns Word index (number from 0 to 7775)
     */
    keyToIndex,
    /**
     * Get the corresponding word of the Diceware Key.
     * @param key Diceware Key ("11111" - "66666")
     * @returns Corresponding word
     */
    getWord,
    /**
     * Generates a random passphrase.
     * @param wordsQuantity Number of words in the passphrase
     * @returns String following the format: "word1 word2 word3"
     */
    generatePhrase
}
