// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstyvwxyz"
var nums = "0123456789"
var symb = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/"
var plength = (8,128)
var pass = ""

function generatePass() {
}
console.log(generatePass());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
