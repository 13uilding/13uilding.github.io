// Functions
function randomInt(n){
    result = Math.floor(Math.random() * n);
    return result
};
// Checks to see if any element in an array is in another array
// I realize I could have programmed this a different way, but I wanted to experience
function charInArray(arrMain, arrTest){
    for ( let i = 0; i < arrTest.length; i++ ){
        if ( arrMain.includes(arrTest[i]) ){
            return true;
        };
    };
    return false;
};
// The Join method does this better, but I already wrote it, so whatever.
const toString = (letters, letter) => letters + letter;
// Arrays
let upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let specialArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-'];
let numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// While loop condition & While loop
let questionTime = true;
while (questionTime){
    var userLength = prompt("What length do you want for your password (between 8-128 characters)");
    // Determines if the user input is the correct length
    if ((userLength < 8) || (userLength > 128)){
        alert("Please enter another number between 8-128.")
        continue
    };
    var userSpecialCase = confirm("Do you want any special characters?");
    var userLowerCase = confirm("Do you want lowercase characters?");
    var userUpperCase = confirm("Do you want uppercase characters?");
    var userNumberCase = confirm("Do you want numbers?")
    console.log(userSpecialCase)
    // If any of the criteria is accepted, we break the while loop
    if (userSpecialCase || userLowerCase || userUpperCase || userNumberCase){
        questionTime = false;
    } else { alert("Please accept one of the given criteria.")};
};

// Building my potential character array for the password
let charArr = [];
if (userSpecialCase){ charArr = [...specialArr]};
if (userUpperCase){ charArr = [...charArr, ...upperArr]};
if (userLowerCase){ charArr = [...charArr, ...lowerArr]};
if (userNumberCase){ charArr = [...charArr, ...numberArr]};

let notContainsCriteria = true;
while(notContainsCriteria) {
    var result = "";
    lenCharArr = charArr.length;
    passwordArr = [];
    for (let i = 0; i < userLength; i++){
        newCharIndex = randomInt(lenCharArr);
        // console.log("New char index is " + newCharIndex);
        let newChar = charArr[newCharIndex];
        passwordArr[i] = newChar;
    };
    // Makes sure that we have every type FIX THIS
    if (userSpecialCase) {
        let specialCharTest = charInArray(passwordArr, specialArr);
        if (specialCharTest === false){
            continue;
        };
    };
    if (userNumberCase){
        let numberCharTest = charInArray(passwordArr, numberArr);
        if (numberCharTest === false){
            continue;
        };
    };
    if (userUpperCase){
        let upperCharTest = charInArray(passwordArr, upperArr); 
        if (upperCharTest === false){
            continue;
        }  
    };
    if (userLowerCase){
        let lowerCharTest = charInArray(passwordArr, lowerArr);
        if (lowerCharTest === false){
            continue;
        };
    };
    notContainsCriteria = false;
};

// Writing to the page!
function newContent() {
    document.open();
    document.write("<h1>Out with the old - in with the new!</h1>");
    document.close();
}
result = passwordArr.reduce(toString);
alert(result);
document.write(result);

