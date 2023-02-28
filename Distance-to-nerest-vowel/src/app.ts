// Distance to nearest vowel

// Write a function called `distanceToNearestVowel` that takes in a string and, for each character, returns the distance to the nearest vowel in the string. If the character is a vowel itself, return 0.

// Example 1:

// distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

// Example 2:

// distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

// Example 3:

// distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

// Notes:

// * Assume all input strings will contain at least one vowel.
// * Strings will be lowercased.
// * Vowels are: a, e, i, o, u.
// * Try to do this in one single return.

const distanceToNearestVowel = (s) =>
  [...s].map((l, li) =>
    Math.min(
      ...[...s].map((v, vi) => Math.abs(/[aeiou]/.test(v) ? vi - li : s.length))
    )
  );

console.log(distanceToNearestVowel("abdfa"));
