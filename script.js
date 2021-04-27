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

let uppercaseAllowed = false;
let lowercaseAllowed = false;
let numberAllowed = false;
let symbolAllowed = false;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=-";
let characterFunctions = [];

function clearOldPasswordData() {
    dataEl.innerText = "";
}

function generatePassword() {
    clearOldPasswordData();
    checkConditions();
}

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
        for (let i = 0; i < 10; i++) {
            generateData();
        }
    }
}

function generateData() {
    passwordGenerated += characterFunctions[
        Math.floor(Math.random() * characterFunctions.length)
    ]();

    dataEl.innerText = passwordGenerated;
}

function lengthChanged(data) {
    hintLengthEl.innerText = `LENGTH - ${data}`;
}

function getUppercaseCharacter() {
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getLowerCharacter() {
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getNumberCharacter() {
    return number[Math.floor(Math.random() * number.length)];
}

function getSymbolCharacter() {
    return symbol[Math.floor(Math.random() * symbol.length)];
}

function copyPasswordToClipboard() {
    const textarea = document.createElement("textarea");
    const password = dataEl.innerText;

    if (!password) return;

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard !");
}

generateEl.addEventListener("click", () => {
    generatePassword();
});

uppercaseEl.addEventListener(
    "click",
    () => (uppercaseAllowed = !uppercaseAllowed)
);

numberEl.addEventListener("click", () => (numberAllowed = !numberAllowed));

lowercaseEl.addEventListener(
    "click",
    () => (lowercaseAllowed = !lowercaseAllowed)
);

symbolEl.addEventListener("click", () => (symbolAllowed = !symbolAllowed));

copyEl.addEventListener("click", (e) => {
    copyPasswordToClipboard();
});
