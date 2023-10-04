// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
// prompts the user for password criteria
// prompted for password criteria I select which criteria to include
// length of the password: >8 and < 120 characters
// character types:lowercase, uppercase, numeric, and/or special characters
// input should be validated and at least one character type should be selected



// displayed password
return "password here.";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
