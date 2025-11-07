import { expect, test } from "bun:test"
import { dicewareEN } from "../src"
import { BLACKLIST } from "./blacklist"

test("List should not contain words that depending on the context may be problematic", () => {

    const problematicWords: string[] = []

    dicewareEN.words.forEach((word) => {
        if (BLACKLIST.includes(word.toLowerCase())) {
            problematicWords.push(word)
        }
    })

    expect(problematicWords).toEqual([])
})
