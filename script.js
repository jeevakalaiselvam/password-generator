const dataEl = document.getElementById("password-data");
const uppercaseEl = document.getElementById("password-uppercase");
const lowercaseEl = document.getElementById("password-lowercase");
const symbolEl = document.getElementById("password-symbol");
const numberEl = document.getElementById("password-number");
const lengthEl = document.getElementById("password-length");
const generateEl = document.getElementById("password-generate");

let uppercaseAllowed = false;
let lowercaseAllowed = false;
let numberAllowed = false;
let symbolAllowed = false;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const lowecase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=-";

generateEl.addEventListener("click", () => {
    generatePassword();
});

function clearOldPasswordData() {
    dataEl.innerText = "";
}

function generatePassword() {
    clearOldPasswordData();
    checkConditions();
}

function checkConditions() {
    const characters = [];
    if (uppercaseAllowed) characters.push(getUppercaseCharacter);
    if (lowercaseAllowed) characters.push(getLowerCharacter);
    if (numberAllowed) characters.push(getNumberCharacter);
    if (symbolAllowed) characters.push(getSymbolCharacter);
}

function getUppercaseCharacter() {
    return uppercase[Math.floor((Math.random() * 100) / uppercase.length)];
}

function getLowerCharacter() {
    return lowercase[Math.floor((Math.random() * 100) / uppercase.length)];
}

function getNumberCharacter() {
    return number[Math.floor((Math.random() * 100) / uppercase.length)];
}

function getSymbolCharacter() {
    return symbol[Math.floor((Math.random() * 100) / uppercase.length)];
}

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
