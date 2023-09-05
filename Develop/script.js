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

// function to generate password based on user input
// Used Google to understand what types of arrays i'm adding 
function generatePassword() {
  var choices = "";

  if (confirmCharacter) choices += "!@#$%^&*()_+}{|:;'><?/";
  if (confirmNumber) choices += "123456789";
  if (confirmLowercase) choices += "abcdefghijklmnopqrstuvwxyz";
  if (confirmUppercase) choices += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var password = "";

  for (var i = 0; i < enter; i++) {
    var randomIndex = Math.floor(math.random() * choices.length);
    password += choices.charAt(randomIndex);
  }

  document.querySelector("password").textContent = password;
}

// Event Listener for the generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", getPasswordCriteria);
