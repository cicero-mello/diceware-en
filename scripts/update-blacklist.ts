import fs from "fs/promises"

console.log(`\x1b[32m|\x1b[0m Updating "BLACKLIST" const...`)

const text = await fs.readFile("blacklist.txt", "utf8")

const words = text
    .split(/\r?\n/)
    .map(w => w.trim())
    .filter(Boolean)

const sortedWords = words.sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" })
)

const newContent = sortedWords.join("\n") + "\n"
await fs.writeFile("blacklist.txt", newContent, "utf-8")

await fs.writeFile(
    "./tests/blacklist.ts",
    `export const BLACKLIST = ${JSON.stringify(sortedWords, null, 4)}\n`
)

console.log(`\x1b[32m|\x1b[0m "BLACKLIST" const updated`)
