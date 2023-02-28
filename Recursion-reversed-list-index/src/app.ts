// Recursion: reversed list index

// Write a recursive function called `getItemsAt` that filters the items in an array (given as parameter `arr`) by positional parity (odd or even), given as parameter `par`, starting from the opposite end. Return an array of items on odd positions (... 5, 3, 1) or on even positions (... 6, 4, 2) and counting from the last item in the array.

// Example 1:

// getItemsAt([2, 4, 6, 8, 10], "odd") ➞ [2, 6, 10]
// // 2, 6 & 10 occupy the 5th, 3rd and 1st positions from right.
// // Odd positions, hence the parity, and from the opposite.

// Example 2:

// getItemsAt(["E", "D", "A", "B", "I", "T"], "even") ➞ ["E", "A", "I"]
// // E, A and I occupy the 6th, 4th and 2nd positions from right.
// // Even positions, hence the parity, and from the opposite.

// Notes:

// * Items in the array may contain duplicates.
// * The last item in the array is always the first item to start a positional count.
// * The sequence of the items in the resulting array should be retained (i.e. example #1 - 6 should come after 2 and before 10, example #2 - "A" should come after "E" and before "I").
function getItemsAt(value: any, str: string) {
  if (str === "odd") {
    let filtered = value
      .reverse()
      .filter(function (element: number, index: number, array: number) {
        return index % 2 === 0;
      });
    console.log(filtered.reverse());
  } else if (str === "even") {
    let filtered = value
      .reverse()
      .filter(function (element: number, index: number, array: number) {
        return index % 2 === 1;
      });
    console.log(filtered.reverse());
  } else {
    if (str !== "odd") throw Error("str must be odd or even");
    return;
  }
}

try {
  getItemsAt([2, 4, 6, 8, 10], "odd");
} catch (error) {
  console.log(error);
}
