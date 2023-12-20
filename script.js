// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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
  let pwLengthPrompt = prompt("How many characters would you like your password to be? (Must be more than 8 and less than 128)");
  let pwLength = parseInt(pwLengthPrompt);
  
  if (pwLength < 8 || pwLength > 128) {
    alert("Invalid password length. Please make it between 8 and 128 characters!")
    return;
  }

  let specialChar = confirm("Would you like special characters in your password?");
  let numericChar = confirm("Would you like numeric characters in your password?");
  let upperCasedChar = confirm("Would you like upper case characters in your password?");
  let lowerCaseChar = confirm("Would you like lower case characters in your password?");

  let pwoptions = { 
    length: pwLength,
    special: specialChar,
    number: numericChar,
    upper: upperCasedChar,
    lower: lowerCaseChar
  };

  return pwoptions;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();

  // Array to contain one of each type of chosen character to ensure each will be used
  let guarnateedChar = [];
  let pwresult = [];
  let possibleChar = [];

  if (options.special){
    possibleChar = possibleChar.concat(specialCharacters)
    guarnateedChar.push(getRandom(specialCharacters));
  }

  if (options.upper){
    possibleChar = possibleChar.concat(upperCasedCharacters)
    guarnateedChar.push(getRandom(upperCasedCharacters));
  }

  if (options.lower){
    possibleChar = possibleChar.concat(lowerCasedCharacters)
    guarnateedChar.push(getRandom(lowerCasedCharacters));
  }

  if (options.number){
    possibleChar = possibleChar.concat(numericCharacters)
    guarnateedChar.push(getRandom(numericCharacters));
  }
  
  for (let i = 0; i < options.length; i++) {
    var singlechar = getRandom(possibleChar);
    pwresult.push(singlechar);
  }

  for (let i = 0; i < guarnateedChar.length; i++) {
    const char = guarnateedChar[i];
    pwresult[i] = char;
  }

  return pwresult.join ('')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Function for getting a random element from an array
function getRandom(arr) {
  let randomi = Math.floor (Math.random()*arr.length) 
  let randomel = arr[randomi]
  return randomel
}
