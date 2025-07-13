const message ={
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
};
let finalOutput = "";
for (let i = 0; i < message.length; i++) {
    finalOutput += message[i] + "\n";
}
console.log(finalOutput.slice(1));