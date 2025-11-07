import { expect, test } from "bun:test"
import { dicewareEN } from "../src"

test("List must have 7776 words", () => {
    expect(dicewareEN.words.length).toBe(7776)
})

test("List must not contain duplicate words", () => {
    const uniqueWords = new Set(dicewareEN.words)

    expect(uniqueWords.size).toBe(dicewareEN.words.length)
})

test("List must be in alphabetic order", () => {
    const normalizeWord = (word: string): string => (
        word
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
    )

    const sortedWords = [...dicewareEN.words].sort((a, b) => {
        const normalizedA = normalizeWord(a)
        const normalizedB = normalizeWord(b)
        return normalizedA.localeCompare(normalizedB)
    })

    const dicewareWords = dicewareEN.words as unknown as string[]
    expect(dicewareWords).toEqual(sortedWords)
})

test("Words must have at least 4 letters", () => {
    const wordWithLessThan4Letters = dicewareEN.words.find(
        word => word.length < 4
    )

    expect(wordWithLessThan4Letters).toBe(undefined)
})

test("Words must have max of 7 letters", () => {
    const wordWithMoreThan7Letters = dicewareEN.words.find(
        word => word.length > 7
    )

    expect(wordWithMoreThan7Letters).toBe(undefined)
})

test("Words must use English alphabet without hyphens", () => {
    const regex = /^[A-Za-z]+$/

    const notEnglishWord = dicewareEN.words.find(
        word => !regex.test(word)
    )

    expect(notEnglishWord).toBe(undefined)
})
