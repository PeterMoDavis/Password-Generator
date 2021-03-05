//============================================

//PASSWORD GENERATOR!!!!!!!!!!!!!!

//===========================================

//Different choices
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numeric = "1234567890".split("");

//hookup button

let button = document.querySelector("#generate");

button.addEventListener("click", () => {
  //length of password
  let passwordLength = prompt("How long would you like the password to be");
  console.log(passwordLength);

  //length check ---
  if (passwordLength < 8 || passwordLength > 128) {
    alert("the password must be at least 8 characters and no more than 128 ");
  }
  //=========================================================================

  //confirms lowerCase
  let lowerCaseConfirm = confirm("Would you like lowercase in your password?");
  console.log(lowerCaseConfirm);
  //==========================================================================

  //confirms upperCase
  let upperCaseConfirm = confirm("Would you like uppercase in your password?");
  console.log(upperCaseConfirm);
  // ===========================================================================

  //confirms numeric
  let numericConfirm = confirm("Would you like numerals in your password?");
  console.log(numericConfirm);
  //
  if (
    lowerCaseConfirm === false &&
    upperCaseConfirm === false &&
    numericConfirm === false
  ) {
    alert("You must pick at least one character for you password.");
  }
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
