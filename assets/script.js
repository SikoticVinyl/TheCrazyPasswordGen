
var generateBtn = document.querySelector("#generate");

function generatePassword(useUpperCase, useLowerCase, useNumbers, useSymbols) {
  console.log("Clicked!");

  var optPool = ""

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lower = "abcdefghijklmnopqrstyvwxyz"
  const nums = "0123456789"
  const symb = "!@#$%^&*()-_=+"

  const length = parseInt(promt("Enter password lenght, MUST be between 8 and 128.")); 

  if (isNaN(length) || length < 8 || length > 128){
    alert("You must choose a number between 8 and 128 please.");
    return null;
  }

  if (useUpperCase) optPool += upper;
  if (useLowerCase) optPool += lower;
  if (useNumbers) optPool += nums;
  if (useSymbols) optPool += symb;

  const useUpperCase = confirm("Would you like to include Capitol letters? Cancel = No");
  const useLowerCase = confirm("Would you like to include lowercase letters? Cancel = No");
  const useNumbers = confirm("would you like to include numbers? Cancel = No");
  const useSymbols = confirm("Would you like to include Symbols? Cancel = No");

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
