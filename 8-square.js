const sizeArgument = process.argv[2];
const size = parseInt(sizeArgument);
if (isNaN(size)) {
  console.log("Missing size");
} else  {
    if (size > 0) {
        for (let i =0; < size; i++) {
            let rowString = "";
            for (let j = 0; j < size; j++) {
                rowString += "X";{
            }
            console.log(rowString);
    }

}