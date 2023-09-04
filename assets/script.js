// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lower = "abcdefghijklmnopqrstyvwxyz"
  const nums = "0123456789"
  const symb = "!@#$%^&*()-_=+"
  
  let optPool = ""

  if (useUpperCase) optPool += upper;
  if (useLowerCase) optPool += lower;
  if (useNumbers) optPool += nums;
  if (useSymbols) optPool += symb;
}
console.log(generatePass());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
