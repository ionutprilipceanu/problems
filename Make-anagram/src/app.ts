// Make anagram

// Given two strings, that may or may not be of the same length, write a function called `makeAnagram` to determine the minimum number of character deletions required to make an anagram. Any characters can be deleted from either of the strings.

// Example 1:

// makeAnagram("cde", "abc") ➞ 4
// // Remove d and e from cde to get c.
// // Remove a and b from abc to get c.
// // It takes 4 deletions to make both strings anagrams.

// Example 2:

// makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke") ➞ 30

// Example 3:

// makeAnagram("showman", "woman") ➞ 2

function makeAnagram(str1: string, str2: string) {
  // letter count
  function getCharFrequency(str: string) {
    const freq: Record<string, number> = {};
    for (const char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
  }

  // letter count for every string
  const freq1 = getCharFrequency(str1);
  const freq2 = getCharFrequency(str2);

  let deletions = 0;

  for (const char in freq1) {
    deletions += Math.abs((freq1[char] || 0) - (freq2[char] || 0));
  }

  return deletions;
}
console.log(makeAnagram("showman", "woman"));
