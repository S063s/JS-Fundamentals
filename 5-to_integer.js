const school = "ALX school";
const firstArgument = process.argv[2];
const parsedNumber = parseInt(firstArgument);
const outputMessage = isNaN(parsedNumber)
    ? "Not a number"
    : `My number: ${parsedNumber}`;

console.log(outputMessage);