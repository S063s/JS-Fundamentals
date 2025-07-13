const firstArgument = process.argv[2];
const numOccurrences = parseInt(firstArgument, 10);
if (isNaN(numOccurrences) || numOccurrences <= 0) {
  console.log("Missing number of occurrences");
} else {
let outputString = "";
if (numOccurrences > 0) {
  for (let i = 0; i < numOccurrences; i++) {
    outputString += "C is fun\n";
  }
}
console.log(outputString.slice(0, -1));