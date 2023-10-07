// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  // create arraay variables to store character types/password criteria
  var characters = {
    lowerCaseLetters: "abcdefghijklmnopqrstuvwxyz".split(""),
    upperCaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    specialChars: "!#$%&'()*+,-./\:;<=>?@[]^_`{|}~".split(""),
    numbers: "0123456789".split(""),

    // Initialize array for possible password characters
    choosenChars: [],

    // Initialize array for generated password
    passGenerated: [],

    // prompt to ask the user to enter password length between 8 and 128
    passLength: parseInt(prompt("Please enter the length of the password between 8 and 128.")),

    // Prompt to ask user to confirm character type
    selectLower: confirm("Will you include Lower Case Letters?"),
    selectUpper: confirm("Will you include Upper Case Letters?"),
    selectSpecialChars: confirm("Will you include Special Characters?"),
    selectNumbers: confirm("Will you include Numbers?"),
  };

      // Add password characters to array of choices based on user input
      if (characters.selectLower) {
        characters.choosenChars = characters.choosenChars.concat(characters.lowerCaseLetters);
      }
      if (characters.selectUpper) {
        characters.choosenChars = characters.choosenChars.concat(characters.upperCaseLetters);
      }
      if (characters.selectSpecialChars) {
        characters.choosenChars = characters.choosenChars.concat(characters.specialChars);
      }
      if (characters.selectNumbers) {
        characters.choosenChars = characters.choosenChars.concat(characters.numbers)
      }

  // validated user imput
  if (characters.choosenChars.length) {
      // validate lenght of the pasword
      if (characters.passLength < 8 || characters.passLength > 128 || isNaN(characters.passLength)) {
          alert("Please enter a password length between 8 and 128 characters.");
          return "";

      } else {
            // Generate random characters to add to password
            for (var i = 0; i < characters.passLength; i++) {
                var randCharIndex =Math.floor(Math.random() * characters.choosenChars.length);
                characters.passGenerated.push(characters.choosenChars[randCharIndex]);
                
            }
                
            // display password
            var password = characters.passGenerated.join("");
            return password;
      }
    
  }else {
      // Alert if no character type is selected
      alert("Please select at least one charater type.");
      return "";
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
