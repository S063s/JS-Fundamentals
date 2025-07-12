const numberofarguments = process.argv.length - 2;
if (numberofarguments ===0) {
  console.log("No argument");

}if (numberofarguments ===1) {
  console.log("argument found");

} else {
  console.log("arguments found");
}