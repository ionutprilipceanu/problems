// Numbers first, letters second

// Write a function called `numThenChar` that sorts arrays while keeping the array structure. Numbers should be first then letters both in ascending order. Consider that the only elements of the main array are numbers, letters or other arrays of numbers/letters.

// Example 1:

// numThenChar([
//   [1, 2, 4, 3, "a", "b"],
//   [6, "c", 5], [7, "d"],
//   ["f", "e", 8]
// ]) ➞ [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, "a"],
//   ["b", "c"], ["d", "e", "f"]
// ]

// Example 2:

// numThenChar([
//   [1, 2, 4.4, "f", "a", "b"],
//   [0], [0.5, "d","X",3,"s"],
//   ["f", "e", 8],
//   ["p","Y","Z"],
//   [12,18]
// ]) ➞ [
//   [0, 0.5, 1, 2, 3, 4.4],
//   [8],
//   [12, 18, "X", "Y", "Z"],
//   ["a", "b", "d"],
//   ["e", "f", "f"],
//   ["p", "s"]
// ]

const numThenChar = (str: any[]) => {
  const sortedItems = str.flat().sort((a, b) => a - b);
  let resultArr: any[] = [];
  str.forEach((nestedArr: any) => {
    resultArr.push(sortedItems.splice(0, nestedArr.length));
  });
  console.table(resultArr);
};

numThenChar([
  [0, 0.5, 1, 2, 3, 4.4],
  [8],
  [12, 18, "X", "Y", "Z"],
  ["a", "b", "d"],
  ["e", "f", "f"],
  ["p", "s"],
]);
