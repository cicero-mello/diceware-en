## Standard Flow:
 - Fork the repository.
 - Create a branch (based on "main"), add, commit and push your changes.
 - Open a Pull Request from the branch created in your fork, pointing to the "main" branch of the original repo.

## How to Make a Good Contribution:
 - Focus on the "words.txt" file.
 - Replace "Bad Words" with "Good Words".
 - Do not add words that are:
     - offensive
     - fewer than 4 letters
     - more than 7 letters
     - names (brands or people)
     - inappropriate (such as sexually explicit words)
     - sensitive (things commonly linked to trauma, such as abuse, difficult diseases...)
     - strongly linked to social groups (especially religious)
     - related to children or minors
     - express nationality

### ~ "Good Words" ~
These are words with fewer letters, well-known, with low/no variation in the list, easy to memorize and visualize.
Between singular and plural words, prefer singular.
If it's a verb, use the infinitive form.
Prefer American English (USA) only.


### ~ "Bad Words" ~
These are words with more letters, little known, with more than one variation in the list,
abbreviations, onomatopoeia, words difficult to memorize or visualize.
Words that are valid in English but not in American English also fall into this category.


## Tips:
 - If you don't have it, install Bun to run scripts more easily (bun.sh)
 - After modifying "words.txt", run "bun run update-words"
   (this will sort the words and update the project with the new version)
 - Before push your changes, run tests locally with "bun run test"
   (as these will be executed after opening the PR, and will be requirements for its approval)
