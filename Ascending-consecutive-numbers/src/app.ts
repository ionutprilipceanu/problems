// Ascending consecutive numbers

// Write a function called `ascending` that returns true if a string consists of ascending and consecutive numbers.

// Example 1:

// ascending("232425") ➞ true // Consecutive numbers 23, 24, 25

// Example 2:

// ascending("2324256") ➞ false // No matter how this string is divided, the numbers are not consecutive.

// Example 3:

// ascending("444445") ➞ true // Consecutive numbers 444 and 445.

// Notes:

// A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.

function ascending(str: string) {
  // variable to store starting number
  // length of the input String
  let length = str.length;

  // find the number till half of the String
  for (let i = 0; i < length / 2; i++) {
    // new String containing the starting
    // substring of input String
    let new_str = str.substring(0, i + 1);

    // converting starting substring into number
    let num = parseInt(new_str);

    // backing up the starting number in start

    // while loop until the new_String is
    // smaller than input String
    while (new_str.length < length) {
      // next number
      num++;

      // concatenate the next number
      new_str = new_str + num.toString();
    }

    // check if new String becomes equal to
    // input String
    if (new_str === str) return true;
  }

  // if String doesn't contains consecutive numbers
  return false;
}

console.log(ascending("444445"));
