// Longest substring with non-repeating characters

// Write a function called `longestNonrepeatingSubstring` that returns the longest non-repeating substring for a string input.

// Example 1:

// longestNonrepeatingSubstring("abcabcbb") ➞ "abc"

// Example 2:

// longestNonrepeatingSubstring("aaaaaa") ➞ "a"

// Example 3:

// longestNonrepeatingSubstring("abcde") ➞ "abcde"

// Example 4:

// longestNonrepeatingSubstring("abcda") ➞ "abcd"

// Notes:

// * If multiple substrings tie in length, return the one which occurs first.
// * Bonus: Can you solve this problem in linear time?

const longestNonrepeatingSubstring = (str: string) =>
  [...new Set(str)].join("");

console.log(longestNonrepeatingSubstring("112323333fdfgfgffsdsssf"));
