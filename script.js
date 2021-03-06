//============================================

//PASSWORD GENERATOR!!!!!!!!!!!!!!

//===========================================

//Different choices
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numeric = "1234567890".split("");

//random number function
const randomNumber = (between) => Math.floor(Math.random() * between) + 1;

//hookup button
let button = document.querySelector("#generate");

//function
button.addEventListener("click", () => {
  //clearing the previous content.
  let passwordArray = [];

  //length of password
  let passwordLength = prompt(
    "How many characters would you like your password to be."
  );

  //length check ---
  if (passwordLength < 8 || passwordLength > 128) {
    alert("the password must be at least 8 characters and no more than 128. ");
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
  //===========================================================================

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
  //========================================================================
  //checking if nothing was confirmed
  if (
    !lowerCaseConfirm &&
    !upperCaseConfirm &&
    !numericConfirm &&
    !specialCharactersConfirm
  ) {
    alert("You must pick at least one character for you password.");
    return;
  }

  //looping through passwordArray and creating password string
  let finalPassword = [];
  for (let i = 1; i <= passwordLength; i++) {
    let randomIndex = randomNumber(passwordArray.length - 1);
    finalPassword.push(passwordArray[randomIndex]);
  }
  console.log(finalPassword.length);
  console.log(finalPassword.join(""));

  //Selecting and displaying password to user
  let passWordTextArea = document.querySelector("#password");
  passWordTextArea.innerText = finalPassword.join("").toString();
});
