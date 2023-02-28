// Frequency by level of nesting

// Create a function called `freqCount` that takes in a nested Array and an element and returns the frequency of that element by nested level.

// Example 1:

// freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1) ➞ [[0, 1], [1, 2], [2, 3]] // The array has one 1 at level 0, 2 1's at level 1, and 3 1's at level 2.

// Example 2:

// freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5) ➞ [[0, 3], [1, 4], [2, 0]]

// Example 3:

// freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2) ➞ [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]

// Notes:

// * Start the default nesting (an Array with no nesting) at 0.
// * Output the nested levels in order (e.g.: 0 first, then 1, then 2, etc.).
// * Output 0 for the frequency if that particular level has no instances of that element (see example #2).

function freqCount(arr: number[] | any, element: number) {
  let result: any = [];

  function traverse(arr: any, level: number) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        traverse(arr[i], level + 1);
      }

      if (arr[i] === element) {
        if (!result[level]) {
          result[level] = 1;
        } else {
          result[level]++;
        }
      }

      if (result[level] === undefined) {
        result[level] = 0;
      }
    }
  }
  traverse(arr, 0);
  return result.map((count: number, index: number) =>
    console.log([index, count])
  );
}
freqCount([1, 2, 1, 1, 2, [3, 4, [4]], 5], 4);
