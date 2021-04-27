//Declaration of all needed references to DOM elements
const dataEl = document.getElementById("password-data");
const uppercaseEl = document.getElementById("password-uppercase");
const lowercaseEl = document.getElementById("password-lowercase");
const symbolEl = document.getElementById("password-symbol");
const numberEl = document.getElementById("password-number");
const lengthEl = document.getElementById("password-length");
const generateEl = document.getElementById("password-generate");
const hintLengthEl = document.getElementById("hint-length");
const copyEl = document.getElementById("copy");

let passwordGenerated = "";

//Conditions predefined before user toggle
let uppercaseAllowed = false;
let lowercaseAllowed = false;
let numberAllowed = false;
let symbolAllowed = false;

//Declaring all set of available character options for given category
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=-";

let characterFunctions = [];
let passwordLength = 15;

/**
 * @author Jeeva Kalaiselvam
 * This function remove any text shown in password area
 */
function clearOldPasswordData() {
    dataEl.innerText = "";
}

/**
 * @author Jeeva Kalaiselvam
 * This function will check for any conditions based on user selection and generate a new password for the user conforming to the given said conditions
 */
function generatePassword() {
    clearOldPasswordData();
    checkConditions();
}

/**
 * @author Jeeva Kalaiselvam
 * This function checks for the conditions and generate password. It randomly selects a character for the password based on user conditions
 */
function checkConditions() {
    characterFunctions = [];
    if (uppercaseAllowed) characterFunctions.push(getUppercaseCharacter);
    if (lowercaseAllowed) characterFunctions.push(getLowerCharacter);
    if (numberAllowed) characterFunctions.push(getNumberCharacter);
    if (symbolAllowed) characterFunctions.push(getSymbolCharacter);

    passwordGenerated = "";
    if (characterFunctions.length == 0) {
        alert("Need to have atleast one selection !!");
        passwordGenerated = "";
    } else {
        for (let i = 0; i < passwordLength; i++) {
            generateData();
        }
    }
}

/**
 * @author Jeeva Kalaiselvam
 * This will generate the password data based on user conditions by randomly selecting a function that will return a single character by a category.
 * All functions are present in a array and it is being randomly chosen based on the condition user selected.
 */
function generateData() {
    passwordGenerated += characterFunctions[
        Math.floor(Math.random() * characterFunctions.length)
    ]();

    dataEl.innerText = passwordGenerated;
}

/**
 * @author Jeeva Kalaiselvam
 * @param {String} data - Length of the Range Input element when user changes it
 * This function will change the hint and display current range size use selected when they scroll over it.
 */
function lengthChanged(data) {
    hintLengthEl.innerText = `LENGTH - ${data}`;
    passwordLength = data;
}

/**
 * @author Jeeva Kalaiselvam
 * @returns String - Return a character which is uppercase
 * This function will return a randomly chosen uppercare letter from given class of elements in the complete data set declared above.
 */
function getUppercaseCharacter() {
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}

/**
 * @author Jeeva Kalaiselvam
 * @returns String - Return a character which is lowercase
 * This function will return a randomly chosen lowercase letter from given class of elements in the complete data set declared above.
 */
function getLowerCharacter() {
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}

/**
 * @author Jeeva Kalaiselvam
 * @returns String - Return a character which is number
 * This function will return a randomly chosen number  from given class of elements in the complete data set declared above.
 */
function getNumberCharacter() {
    return number[Math.floor(Math.random() * number.length)];
}

/**
 * @author Jeeva Kalaiselvam
 * @returns String - Return a character which is symbol
 * This function will return a randomly chosen symbol from given class of elements in the complete data set declared above.
 */
function getSymbolCharacter() {
    return symbol[Math.floor(Math.random() * symbol.length)];
}

/**
 * @author Jeeva Kalaiselvam
 * This function will copy the password generated to the clipboard so that user can easily use in some other program if needed.
 */
function copyPasswordToClipboard() {
    const textarea = document.createElement("textarea");
    const password = dataEl.innerText;

    if (!password) return;

    //Create a temporary TEXTAREA and use it to copy into clipboard. Delete it later.
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard !");
}

//Listen to when use clicks Generate Password button
generateEl.addEventListener("click", () => {
    generatePassword();
});

//Listen to when user chooses uppercase option
uppercaseEl.addEventListener(
    "click",
    () => (uppercaseAllowed = !uppercaseAllowed)
);

//Listen to when user chooses number option
numberEl.addEventListener("click", () => (numberAllowed = !numberAllowed));

//Listen to when user chooses lowercase option
lowercaseEl.addEventListener(
    "click",
    () => (lowercaseAllowed = !lowercaseAllowed)
);

//Listen to when user chooses symbol option
symbolEl.addEventListener("click", () => (symbolAllowed = !symbolAllowed));

//Listen to when user chooses copy option
copyEl.addEventListener("click", (e) => {
    copyPasswordToClipboard();
});
