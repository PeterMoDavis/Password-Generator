//============================================

//PASSWORD GENERATOR!!!!!!!!!!!!!!

//===========================================

//Different choices
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numeric = "1234567890".split("");
let passwordArray = [];

//hookup button

let button = document.querySelector("#generate");

button.addEventListener("click", () => {
  //length of password
  let passwordLength = prompt("How long would you like the password to be");
  console.log(passwordLength);

  //length check ---
  if (passwordLength < 8 || passwordLength > 128) {
    alert("the password must be at least 8 characters and no more than 128 ");
    return;
  }
  //=========================================================================
  //confirms lowerCase
  let lowerCaseConfirm = confirm("Would you like lowercase in your password?");
  if (lowerCaseConfirm) {
    passwordArray.push(...lowerCase);
  }
  //==========================================================================

  //confirms upperCase
  let upperCaseConfirm = confirm("Would you like uppercase in your password?");
  if (upperCaseConfirm) {
    passwordArray.push(...upperCase);
  }

  // ===========================================================================

  //confirms numeric
  let numericConfirm = confirm("Would you like numerals in your password?");
  if (numericConfirm) {
    passwordArray.push(...numeric);
  }
  //=======================================================================
  //confirms specialCharacters
  let specialCharactersConfirm = confirm(
    "Would you like special characters in your password?"
  );
  if (specialCharactersConfirm) {
    passwordArray.push(...specialCharacters);
  }

  if (
    !lowerCaseConfirm &&
    !upperCaseConfirm &&
    !numericConfirm &&
    !specialCharactersConfirm
  ) {
    alert("You must pick at least one character for you password.");
    return;
  }
  console.log(passwordArray);
});

// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
