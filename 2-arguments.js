const numberofarguments = process.argv.slice(2);
if (numberofarguments.length === 0) {
  console.log("No argument");

} else if (numberofarguments.length === 1) {
  console.log("argument found");

} else {
  console.log("arguments found");
}