
var generateBtn = document.querySelector("#generate");

function generatePassword(useUpperCase, useLowerCase, useNumbers, useSymbols) {

  let optPool = ""

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lower = "abcdefghijklmnopqrstyvwxyz"
    const nums = "0123456789"
    const symb = "!@#$%^&*()-_=+"

    const length = parseInt(prompt("Enter password lenght, MUST be between 8 and 128.")); 

    if (isNaN(length) || length < 8 || length > 128){
     alert("You must choose a number between 8 and 128 please.");
      return null;
    }


  if (confirm("Would you like to include Capitol letters?")) {
    useUpperCase = true;
  }
  if (useUpperCase) {
    optPool += upper;
  }


  if (confirm("Would you like to include lowercase letters?")){
    useLowerCase = true;
  }
  if (useLowerCase) {
    optPool += lower;
  }


  if (confirm("Would you like to include numbers?")){
    useNumbers = true;
  }
  if (useNumbers) {
    optPool += nums;
  }


  if (confirm("Would you like to include Symbols?")){
    useSymbols = true;
  }
  if (useSymbols) {
    optPool += symb;
  }

  if (optPool === "") {
    alert("At least on character option must be chosen!")
  }


let password = ""

for (var i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * optPool.length);
  password += optPool.charAt(randomIndex);
}

return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);