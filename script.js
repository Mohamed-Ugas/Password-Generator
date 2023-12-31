// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Length of password
  var lengthOfpassword = parseInt(prompt("How long do your want your password to be (It can be between 8 or 128 characters)"));

  if (lengthOfpassword < 8 || lengthOfpassword > 128) {
    alert("Invalid, Please enter a number between 8 and 128.");
  }

  let includeLowercase = confirm("Do you want to include lowercase characters?");
  let includeUppercase = confirm("Do you want to include uppercase characters?");
  let includeNumeric = confirm("Do you want to include numeric characters?");
  let includeSpecial = confirm("Do you want to include special characters ($@%&*, etc.)?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select one character type");
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomArray = Math.floor(Math.random() * arr.length);  
}

// Function to generate password with user input
function generatePassword() {
  var lengthOfpassword = parseInt(prompt("How long do your want your password to be (It can be between 8 or 128 characters)"));
  if (lengthOfpassword < 8 || lengthOfpassword > 128) {
    alert("Invalid, Please enter a number between 8 and 128.");
  }

  let includeLowercase = confirm("Do you want to include lowercase characters?");
  let includeUppercase = confirm("Do you want to include uppercase characters?");
  let includeNumeric = confirm("Do you want to include numeric characters?");
  let includeSpecial = confirm("Do you want to include special characters ($@%&*, etc.)?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select one character type");
  } 

  console.log(generatePassword);
  return(generatePassword);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

