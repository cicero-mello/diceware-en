import { readFileSync, writeFileSync, existsSync } from "fs"

if (!existsSync("./CHANGELOG.md")) {
    console.error("❌ ERROR: CHANGELOG.md not found!")
    process.exit(1)
}

const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"))
const version = packageJson.version

const date = new Date().toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
}).split("/").reverse().join("-")

const changelog = readFileSync("./CHANGELOG.md", "utf-8")

if (changelog.includes(`## [${version}]`)) {
    console.log(`⏩ Skipping CHANGELOG update (version ${version} already exists)`)
    process.exit(0)
}

const newEntry = `## [${version}] - ${date}

### Changed

- Word list update

`

const lines = changelog.split("\n")

let insertIndex = lines.findIndex(line => line.startsWith("## ["))

if (insertIndex === -1) {
    insertIndex = lines.findIndex((line, idx) =>
        line.includes("Semantic Versioning") && lines[idx + 1] === ""
    )
    insertIndex = insertIndex !== -1 ? insertIndex + 2 : lines.length
}

lines.splice(insertIndex, 0, newEntry)

writeFileSync("./CHANGELOG.md", lines.join("\n"))
console.log(`✅ CHANGELOG updated for version ${version}`)
