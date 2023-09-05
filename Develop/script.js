// Assignment code here

// user input variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// function to get user input for password criteria
// *Watched a couple of youtube videos 
function getPasswordCriteria() {
  enter = parseInt(prompt("Select the amount of characters you would like your password. Choose between 8 and 128"));

  if (!enter || enter <8 || enter > 128) {
    alert("Please choose between 8 and 128 characters");
    return;
  }


confirmNumber = confirm("Will the password contain numbers?");
confirmCharacter = confirm("Will the password contian special characters?");
confirmUppercase = confirm("Will this password contain Uppercase letters?");
confirmLowercase = confirm("WIll the password contain Lowercase letters?");

if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  alert("You must choose at least one criteria!");
  return;
}

generatePassword() ;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
