// Functions ===========================================================================
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
// Writing to the page!
function newContent() {
    document.open();
    document.write("<h1>Out with the old - in with the new!</h1>");
    document.close();
}

// Control
var generateBtn = document.getElementById("generateBtn");
var copyBtn = document.getElementById("copyBtn");
var eraseBtn = document.getElementById("eraseBtn");
var passwordText = document.getElementById("passwordText");
// Value grabs this and it is in string format

// I'll use the .checked element to determine if the boxes are checked
var userSpecialCase = document.getElementById("specialCase");
var userLowerCase = document.getElementById("lowerCase");
var userUpperCase = document.getElementById("upperCase");
var userNumberCase = document.getElementById("numberCase");

// Arrays ===========================================================================
let upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let specialArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-'];
let numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Generate Functionality ===========================================================
generateBtn.addEventListener("click", function(){
    var userLength = parseInt(document.getElementById("lengthInput").value);
    // Checks all the scenarios that would prevent us from creating a useful password
    if ((userLength < 8) || (userLength > 128) || (isNaN(userLength)) || (typeof userLength !== "number")){
        alert("Please enter a number between 8-128.")
        return 0;
    };
    // Ensures the user has checked one of the bexes
    if (userSpecialCase.checked || userLowerCase.checked || userUpperCase.checked || userNumberCase.checked){
        console.log("Generating Password")
    } else { alert("Please accept one of the given criteria.")};
    // Here I create my character array to generate my password from
    let charArr = [];
    if (userSpecialCase.checked){ charArr = [...specialArr]};
    if (userUpperCase.checked){ charArr = [...charArr, ...upperArr]};
    if (userLowerCase.checked){ charArr = [...charArr, ...lowerArr]};
    if (userNumberCase.checked){ charArr = [...charArr, ...numberArr]};
    
    // While loop which creates the password and then tests to verify it contains all the given characters
    let notContainsCriteria = true;
    while(notContainsCriteria) {
        // Initializes variables
        var result = "";
        var passwordArr = [];
        // Generates password
        for (let i = 0; i < userLength; i++){
            newCharIndex = randomInt(charArr.length);
            // console.log("New char index is " + newCharIndex);
            let newChar = charArr[newCharIndex];
            passwordArr[i] = newChar;
        };
        // Checks to see if each of the given criteria has an element in the generated password
        if (userNumberCase.checked){
            let numberCharTest = charInArray(passwordArr, numberArr);
            if (numberCharTest === false){
                continue;
            };
        };
        if (userSpecialCase.checked) {
            let specialCharTest = charInArray(passwordArr, specialArr);
            if (specialCharTest === false){
                continue;
            };
        };
        if (userUpperCase.checked){
            let upperCharTest = charInArray(passwordArr, upperArr); 
            if (upperCharTest === false){
                continue;
            }  
        };
        if (userLowerCase.checked){
            let lowerCharTest = charInArray(passwordArr, lowerArr);
            if (lowerCharTest === false){
                continue;
            };
        };
        notContainsCriteria = false;
    };
    
    var generatedPassword = passwordArr.reduce(toString);
    passwordText.textContent = generatedPassword;

});
 
// Copy button functionality
copyBtn.addEventListener("click", function(){
    if (typeof passwordText === "object"){
        alert("Generate the password before copying.");
        return 0;
    };
    console.log("copying");
    passwordText.select();
    passwordText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the password: " + passwordText.value);
});

// Erase functionality
eraseBtn.addEventListener("click", function(){
    console.log("erasing");
    passwordText.textContent = " "
});


// -----------------This is my prompt program. It worked fine, but I gave it up for fancy buttons!!!

// // Arrays ===========================================================================
// let upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// let lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// let specialArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-'];
// let numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//This worked with the prompts
// // While loop which controls the prompt and confirms that the user provides
// let questionTime = true;
// while (questionTime){
//     // var userLength = prompt("What length do you want for your password (between 8-128 characters)");
//     // Determines if the user input is the correct length
//     if ((userLength < 8) || (userLength > 128)){
//         alert("Please enter another number between 8-128.")
//         continue
//     };
//     // var userSpecialCase = confirm("Do you want any special characters?");
//     // var userLowerCase = confirm("Do you want lowercase characters?");
//     // var userUpperCase = confirm("Do you want uppercase characters?");
//     // var userNumberCase = confirm("Do you want numbers?")
//     // console.log(userSpecialCase)
//     // If any of the criteria is accepted, we break the while loop
//     if (userSpecialCase || userLowerCase || userUpperCase || userNumberCase){
//         questionTime = false;
//     } else { alert("Please accept one of the given criteria.")};
// };

// // Building my character array for the password
// let charArr = [];
// if (userSpecialCase){ charArr = [...specialArr]};
// if (userUpperCase){ charArr = [...charArr, ...upperArr]};
// if (userLowerCase){ charArr = [...charArr, ...lowerArr]};
// if (userNumberCase){ charArr = [...charArr, ...numberArr]};

// // While loop which creates the password and then tests to verify it contains all the given characters
// let notContainsCriteria = true;
// while(notContainsCriteria) {
//     var result = "";
//     lenCharArr = charArr.length;
//     passwordArr = [];
//     for (let i = 0; i < userLength; i++){
//         newCharIndex = randomInt(lenCharArr);
//         // console.log("New char index is " + newCharIndex);
//         let newChar = charArr[newCharIndex];
//         passwordArr[i] = newChar;
//     };
//     // Makes sure that we have every type FIX THIS
//     if (userNumberCase){
//         let numberCharTest = charInArray(passwordArr, numberArr);
//         if (numberCharTest === false){
//             continue;
//         };
//     };
//     if (userSpecialCase) {
//         let specialCharTest = charInArray(passwordArr, specialArr);
//         if (specialCharTest === false){
//             continue;
//         };
//     };
//     if (userUpperCase){
//         let upperCharTest = charInArray(passwordArr, upperArr); 
//         if (upperCharTest === false){
//             continue;
//         }  
//     };
//     if (userLowerCase){
//         let lowerCharTest = charInArray(passwordArr, lowerArr);
//         if (lowerCharTest === false){
//             continue;
//         };
//     };
//     notContainsCriteria = false;
// };

// result = passwordArr.reduce(toString);


