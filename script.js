console.log("--------------------")
console.log("Question 1")
console.log("--------------------")


var ASCII = prompt("Enter the ASCII value to know the alphabet: ");
alert("The Alphabet of that ASCII code is: " + String.fromCharCode(ASCII));

console.log("--------------------")
console.log("Question 2")
console.log("--------------------")

var num1 = Number(prompt("Enter first number: "));
var num2 = Number(prompt("Enter second number: "));

if (num1 > num2) {
    console.log(num1)
}else if (num1 < num2) {
    console.log(num2)
}else if (num1 == num2) {
    console.log("1)", num1, "2)", num2);
    console.log("Both numbers are equal");
}else{
    console.log("Invalid input");
}


console.log("--------------------")
console.log("Question 3")
console.log("--------------------")

var num = Number(prompt("Enter a number: "));

if (num > 0) {
    console.log(num, "is a positive number");
}else if (num < 0) {
    console.log(num, "is a negative number");
}else if (num == 0) {
    console.log("Number is zero");
}else{
    console.log("Invalid input");
}


console.log("--------------------")
console.log("Question 4")
console.log("--------------------")

var checkVowel = prompt("Enter a single string character: ").toLowerCase()

if (checkVowel == "a" || checkVowel == "e" || checkVowel == "i" || checkVowel == "o" || checkVowel == "u"){
    console.log(true);
}else{
    console.log(false);
}


console.log("--------------------")
console.log("Question 5")
console.log("--------------------")

var password = "Soban";
var inputPassword = prompt("Enter Password: ");

if (inputPassword.length == 0){
    alert("Please enter a password");
}else if (inputPassword == password){
    alert("Correct! Password you entered matches the original password");
}else{
    alert("Incorrect Password");
}


console.log("--------------------")
console.log("Question 6")
console.log("--------------------")


var greeting;
var hour = 13;

if (hour < 18){
    greeting = "Good Day"
}else{
    greeting ="Good Evening";
}

console.log(greeting);


console.log("--------------------")
console.log("Question 7")
console.log("--------------------")

var time = prompt('Enter time in 24 hour format (without colon ":" e.g: 1900): ');

if(time >= "0000" && time < "1200"){
    alert("Good Morning!")
}else if(time >= "1200" && time < "1700"){
    alert("Good Afternoon!")
}else if(time >= "1700" && time < "2100"){
    alert("Good Evening!")
}else if(time >= "2100" && time < "2359"){
    alert("Good Night!")
}