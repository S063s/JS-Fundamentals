const message ={
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
};

let finalOutput = "";
if (message.length > 0) {
    finalOutput += message[0];
}
for (let i = 1; i < message.length; i++){
   finalOutput += "\n" + message[i];
}
console.log(finalOutput);