
var generateBtn = document.querySelector("#generate");

function generatePassword(useUpperCase, useLowerCase, useNumbers, useSymbols) {
  console.log("Clicked!");

  let optPool = ""

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lower = "abcdefghijklmnopqrstyvwxyz"
  const nums = "0123456789"
  const symb = "!@#$%^&*()-_=+"
  

  if (useUpperCase) optPool += upper;
  if (useLowerCase) optPool += lower;
  if (useNumbers) optPool += nums;
  if (useSymbols) optPool += symb;

  if (optPool === "") {
    alert("At least on character option must be chosen!")
  }

  return "Generated Pass goes here";
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
