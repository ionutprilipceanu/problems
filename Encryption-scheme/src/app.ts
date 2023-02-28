// Encryption scheme

// An English text needs to be encrypted using Reign's special encryption scheme. Your task is to write a function called `encryption` who will convert a string into its encrypted counterpart, following the rules below.

// First, the spaces are removed from the text. Let L be the length of this text. Then, characters are written into a grid, whose rows and columns have the following constraints:

// 1. For example, the sentence "if man was meant to stay on the ground god would have given us roots", after removing spaces, is 54 characters long. The square root of 54 is between 7 and 8, so it is written in the form of a grid with 7 rows and 8 columns. This will result in the grid below:

// ifmanwas
// meanttos
// tayonthe
// groundgo
// dwouldha
// vegivenu
// sroots

// 2. Ensure that rows x column >= L
// 3. If multiple grids satisfy the above conditions, choose the one with the minimum area (in the example above, we choose a grid of 8x8 - we cannot fit the entire text in a grid of 7x7, and a grid of 9x9 would be a waste of space).

// The encoded message is obtained by displaying the characters in a column, inserting a space, and then displaying the next column and inserting a space, and so on. For example, the encoded message for the above rectangle is: "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau".

// Example 1:

// encryption("haveaniceday") will produce the following grid:

// // have
// // anic
// // eday

// And the end result that the function returns is "hae and via ecy".

// Example 2:

// encryption("feedthedog") ➞ "fto ehg eed d"

// Notes:

// * Ensure capitalization remains the same in encrypted text.
// * Do not remove special characters.

const encryption = (textInput: string) => {
  let whiteSpaceRemoved = textInput.replace(/\s/g, "");
  let L = whiteSpaceRemoved.length;
  let findSqrt = Math.sqrt(L);
  let rowGrid = Math.round(findSqrt);
  // let columnGrid = Math.ceil(findSqrt);

  let encryptedText = "";
  for (let j = 0; j < rowGrid; j++) {
    for (let i = j; i < L; i += rowGrid) {
      encryptedText += whiteSpaceRemoved[i];
    }
    encryptedText = encryptedText + "\n";
    // console.log(encryptedText);
  }
  return encryptedText;
};
console.log(encryption("feedthedog"));
