// Vowel skewers

// An authentic vowel skewer is a skewer with a delicious and juicy mix of consonants and vowels. However, the way they are made must be just right:

// * Skewers must begin and end with a consonant.
// * Skewers must alternate between consonants and vowels.
// * There must be an even spacing between each letter on the skewer, so that there is a consistent flavour throughout.

// Create a function called `isAuthenticSkewer` which returns whether a given vowel skewer is authentic.

// Example 1:

// isAuthenticSkewer("B--A--N--A--N--A--S") ➞ true

// Example 2:

// isAuthenticSkewer("A--X--E") ➞ false // Should start and end with a consonant.

// Example 3:

// isAuthenticSkewer("C-L-A-P") ➞ false // Should alternate between consonants and vowels.

// Example 4:

// isAuthenticSkewer("M--A---T-E-S") ➞ false // Should have consistent spacing between letters.

// Notes:

// * All tests will be given in uppercase.
// * Strings without any actual skewer "-" or letters should return false.
// * This must be solved in a single return.

function isAuthenticSkewer(chr: string) {
  // check if first and last letter is consoant
  let isFirstConsoant = "AEIOU".indexOf(chr[0]) !== 0;
  let isLastConsoant = "AEIOU".indexOf(chr.charAt(chr.length - 1)) !== 0;

  // get the number of vowels and consoants and calculate the difference btw
  let vowelsNumbers: number | any = chr.match(/[AEIOU]/gi)?.length;
  let consonantsNumbers: number | any = chr
    .replace(/[-]/gi, "")
    .match(/[^aeiou]/gi)?.length;
  let differenceBtwVowelsConsoants = consonantsNumbers - vowelsNumbers;

  for (let i = 0; i < chr.length; i++) {
    if (
      chr[i] === "A" ||
      chr[i] === "E" ||
      chr[i] === "I" ||
      chr[i] === "O" ||
      chr[i] === "U"
    ) {
      if (
        chr[i - 3] === "A" ||
        chr[i - 3] === "E" ||
        chr[i - 3] === "I" ||
        chr[i - 3] === "O" ||
        chr[i - 3] === "U" ||
        chr[i - 2] !== "-" ||
        chr[i - 1] !== "-" ||
        chr[i + 1] !== "-" ||
        chr[i + 2] !== "-" ||
        chr[i + 3] === "A" ||
        chr[i + 3] === "E" ||
        chr[i + 3] === "I" ||
        chr[i + 3] === "O" ||
        chr[i + 3] === "U"
      ) {
        return false;
      }
    }
  }
  if (
    isFirstConsoant &&
    isLastConsoant &&
    vowelsNumbers < consonantsNumbers &&
    differenceBtwVowelsConsoants === 1
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(isAuthenticSkewer("C--P--A--A--P"));
