// Convert an arrow function to a regular function

// In JavaScript ES6 an arrow function expression is a syntactically compact alternative to a regular function expression.

// Create a function that takes a string representing a function and converts between an arrow function and a regular function. If the input is a regular function, return an equivalent arrow function. If the input is a arrow function, return an equivalent regular function.

// Examples:

// // Function to arrow

// "function () {}" ➞ "() => {}"

// "function name() {}" ➞ "const name = () => {}"

// "function name(str) { console.log(str); }" ➞ "const name = (str) => { console.log(str); }"

// // Arrow to function

// "() => {}" ➞ "function () {}"

// "const name = () => {}" ➞ "function name() {}"

// "let name = (str) => { console.log(str); }" ➞ "function name(str) { console.log(str); }"

// Notes:

// * The body of the function can be multiline.
// * Be careful with spaces, sometimes they're optional.
// * An arrow function can be declared using const / let / var or nothing at all. However, when converting a regular function to an arrow, always use const (unless you're dealing with an anonymous function).

function toggleFunctionType(fnString: any) {
  const arrowRegexParam = /\s*=>\s*/;
  const regularRegex = /^function\s*\w*\s*\([\w\s,]*\)\s*/;

  const arrowFunctionName = fnString.match(/\S+/gi)[1].split("=")[0];
  const regularFunctionName = fnString.match(/\S+/gi)[1].split("(")[0];

  const params = fnString.split("(").pop().split(")")[0];
  const body = fnString.split("{").pop().split("}")[0];

  if (!arrowRegexParam.test(fnString) && !regularRegex.test(fnString)) {
    throw new Error("Invalid function string");
  }

  if (arrowRegexParam.test(fnString)) {
    // Arrow function to regular function
    if (arrowFunctionName !== ">") {
      return `function ${arrowFunctionName} (${params}) {${body}}`;
    } else {
      return `function (${params}) {${body}}`;
    }
  }

  if (regularRegex.test(fnString)) {
    // Function declaration to arrow function
    if (regularFunctionName) {
      return `const ${regularFunctionName} = (${params}) => {${body}}`;
    }
    // Function Expression to arrow function
    return `(${params}) => {${body}}`;
  }
}
console.log("---------------------------------------");
console.log(toggleFunctionType("function () {};"));
console.log(toggleFunctionType("function (ceva) {altceva};"));
console.log(toggleFunctionType("function name (str) {body};"));
console.log("---------------------------------------");
console.log(toggleFunctionType("() => {}"));
console.log(toggleFunctionType("const ceva = () => {}"));
console.log(toggleFunctionType("const ceva=(str)=>{altceva}"));
