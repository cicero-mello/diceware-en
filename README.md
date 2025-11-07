# diceware-en

### Recommended for use only from version 1.0.0 onwards (previous versions remain under review).

---
---

[![npm](https://img.shields.io/npm/v/diceware-en)](https://www.npmjs.com/package/diceware-en)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/diceware-en)](https://bundlephobia.com/package/diceware-en)

<img alt="demo" src="https://raw.githubusercontent.com/cicero-mello/diceware-en/refs/heads/main/demo.gif" style="max-height: 240px;"/>

English diceware list with useful functions.
*Free, typed and easy to use.*

---
---

### General Usage Example:
```typescript
import { dicewareEN } from "diceware-en"

console.log(
    dicewareEN.generatePhrase(4)
)
```

### Properties from ``dicewareEN`` object:

| Property          | Description                                           | Example                                           |
|-------------------|-------------------------------------------------------|---------------------------------------------------|
| `words`           | Array with all 7776 words from the diceware list      | ``dicewareEN.words``                            |
| `generatePhrase`  | Generates a random passphrase based on words quantity | ``dicewareEN.generatePhrase(8)``                |
| `generateKey`     | Generates a random Diceware Key                       | ``dicewareEN.generateKey()``                    |
| `keyToIndex`      | Converts a Diceware Key into a word list index        | ``dicewareEN.keyToIndex("11111")``              |
| `getWord`         | Get the corresponding word based on a Diceware Key    | ``dicewareEN.getWord("11111")``                 |

### Types:

| Name              | Description                                           | Example                                   |
|-------------------|-------------------------------------------------------|-------------------------------------------|
| `DicewareKey`     | String with 5 number characters from "1" to "6"       | ``"11111"``, ``"66666"``, ``"12346"``...  |

### Others:
| Name              | Description                                                                                       | Example               |
|-------------------|---------------------------------------------------------------------------------------------------|-----------------------|
| `getRandomInt`    | Generates a random int number from 0 to an max inclusive value using `crypto.getRandomValues()`   | `getRandomInt(10)`    |


---
---

## Notes
- All words have between 4 and 7 letters.
- Problematic words have been avoided.
<!-- - Excessive variations of the same word (such as verb conjugation) have been avoided. -->
<!-- - Extremely little-known words have been avoided. -->
- You can manually check all current used words [here](https://github.com/cicero-mello/diceware-en/blob/main/src/words.ts).

## Tips
- Warn your user that sentences with negative interpretations may arise due to the randomness of words (even with a set of words avoiding huge offenses, the random combination of words can generate a sentence that can be interpreted in a pejorative way about something)

<!-- ## Speaks portuguese? Fell free to improve the list! 😊
You can find more information about how to do that [here](https://gist.github.com/cicero-mello/1ad2669a5edf7584b3d8057b3108bd45). -->
