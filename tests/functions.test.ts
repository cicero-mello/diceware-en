import { expect, test } from "bun:test"
import { dicewareEN, getRandomInt } from "../src"
import type { DicewareKey } from "../src/types"

test("Must generate valid random keys", () => {
    const keys = [
        dicewareEN.generateKey(),
        dicewareEN.generateKey(),
        dicewareEN.generateKey(),
        dicewareEN.generateKey(),
        dicewareEN.generateKey(),
        dicewareEN.generateKey()
    ]

    const uniqueKeys = new Set(keys)
    expect(uniqueKeys.size).toBeGreaterThan(3)

    const allKeysHave5Length = !keys.find(
        key => key.length != 5
    )
    expect(allKeysHave5Length).toBe(true)

    const regexDicewareKey = /^[1-6]{5}$/
    const allKeysHaveOnlyValidCharacters = !keys.find(
        key => !regexDicewareKey.test(key)
    )
    expect(allKeysHaveOnlyValidCharacters).toBe(true)
})

test("Must convert equally keys to word list index", () => {
    const allDicewareKeys = ((): DicewareKey[] => {
        const keys: DicewareKey[] = []

        for (let d1 = 1; d1 <= 6; d1++) {
            for (let d2 = 1; d2 <= 6; d2++) {
                for (let d3 = 1; d3 <= 6; d3++) {
                    for (let d4 = 1; d4 <= 6; d4++) {
                        for (let d5 = 1; d5 <= 6; d5++) {
                            keys.push(`${d1}${d2}${d3}${d4}${d5}` as DicewareKey)
                        }
                    }
                }
            }
        }

        return keys
    })()

    expect(dicewareEN.keyToIndex("11111")).toBe(0)
    expect(dicewareEN.keyToIndex("11112")).toBe(1)
    expect(dicewareEN.keyToIndex("11113")).toBe(2)

    expect(dicewareEN.keyToIndex("33333")).toBe(3110)
    expect(dicewareEN.keyToIndex("33334")).toBe(3111)
    expect(dicewareEN.keyToIndex("33335")).toBe(3112)

    expect(dicewareEN.keyToIndex("66664")).toBe(7773)
    expect(dicewareEN.keyToIndex("66665")).toBe(7774)
    expect(dicewareEN.keyToIndex("66666")).toBe(7775)

    expect(allDicewareKeys.length).toBe(7776)

    allDicewareKeys.forEach((value, index) => {
        expect(dicewareEN.keyToIndex(value)).toEqual(index)
    })
})

test("Must return words", () => {
    expect(dicewareEN.getWord("11111")).toEqual("abandon")
    expect(dicewareEN.getWord("11111")).toEqual(dicewareEN.words[0] as string)
    expect(dicewareEN.getWord("23144")).toBeTypeOf("string")
})

test("Must generate random passphrase", () => {
    expect(dicewareEN.generatePhrase(6)).toBeTypeOf("string")
    expect(dicewareEN.generatePhrase(4).split(" ").length).toBe(4)
    expect(dicewareEN.generatePhrase(8).split(" ").length).toBe(8)
    expect(dicewareEN.generatePhrase(1).split(" ").length).toBe(1)

    const uniqueWordsInPassphrase = new Set(
        dicewareEN.generatePhrase(6).split(" ")
    )

    expect(uniqueWordsInPassphrase.size).toBeGreaterThan(3)
})

test("Must generate valid passphrase", () => {
    const phrase = dicewareEN.generatePhrase(999)
    const words = phrase.split("")

    words.forEach(word => {
        expect(word != "undefined").toBeTruthy()
        expect(word != "null").toBeTruthy()
        expect(word).toBeTruthy()
    })
})

test("Must generate valid int values", () => {
    const values = Array.from({ length: 100 }).map(() => (
        getRandomInt(10)
    ))

    expect(new Set(values).size).toBeGreaterThan(2)

    values.forEach((value) => {
        expect(value).toBeGreaterThanOrEqual(0)
        expect(value).toBeLessThanOrEqual(10)
    })
})
