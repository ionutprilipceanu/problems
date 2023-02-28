// Casual string builder

// The function `stringBuilder` is given a string with some square brackets in it. You need to build the outcome string using the rule: `k[substring]` is replaced by the `substring` inside the square brackets being repeated exactly `k` times.

// Example 1:

// stringBuilder("3[a]2[bc]") ➞ "aaabcbc"

// Example 2:

// stringBuilder("3[a2[c]]") ➞ "accaccacc"

// Example 3:

// stringBuilder("2[abc]3[cd]ef") ➞ "abcabccdcdcdef"

// Notes:

// * `k` is a positive integer.
function stringBuilder(str: any) {
  let integerstack = [];
  let stringstack = [];
  let temp = "",
    result = "";

  // Traversing the string
  for (let i = 0; i < str.length; i++) {
    let count = 0;

    // If number, convert it into number
    // and push it into integerstack.
    if (str[i] >= "0" && str[i] <= "9") {
      while (str[i] >= "0" && str[i] <= "9") {
        count = count * 10 + str[i] - 0;
        i++;
      }

      i--;
      integerstack.push(count);
    }

    // If closing bracket ']', pop element
    // until '[' opening bracket is not found
    // in the character stack.
    else if (str[i] === "]") {
      temp = "";
      count = 0;

      if (integerstack.length > 0) {
        count = integerstack[integerstack.length - 1];
        integerstack.pop();
      }

      while (
        stringstack.length > 0 &&
        stringstack[stringstack.length - 1] !== "["
      ) {
        temp = stringstack[stringstack.length - 1] + temp;
        stringstack.pop();
      }

      if (
        stringstack.length > 0 &&
        stringstack[stringstack.length - 1] === "["
      ) {
        stringstack.pop();
      }

      // Repeating the popped string 'temo'
      // count number of times.
      for (let j = 0; j < count; j++) {
        result = result + temp;
      }

      // Push it in the character stack.
      for (let j = 0; j < result.length; j++) {
        stringstack.push(result[j]);
      }

      result = "";
    }

    // If '[' opening bracket, push it
    // into character stack.
    else if (str[i] === "[") {
      if (str[i - 1] >= "0" && str[i - 1] <= "9") {
        stringstack.push(str[i]);
      } else {
        stringstack.push(str[i]);
        integerstack.push(1);
      }
    } else {
      stringstack.push(str[i]);
    }
  }

  // Pop all the element, make a
  // string and return.
  while (stringstack.length > 0) {
    result = stringstack[stringstack.length - 1] + result;
    stringstack.pop();
  }

  return result;
}
console.log(stringBuilder("2[abc]3[cd]ef"));
