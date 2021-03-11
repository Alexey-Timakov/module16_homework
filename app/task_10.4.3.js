const inputString = "Тестовая строка";

function reverseStringFunc (string) {
    console.log("From:", inputString);
    let revString = string.split("").reverse().join("");    
    console.log("To:", revString);
    return revString;
}

module.exports.reverseStringFunc = reverseStringFunc

// reverseStringFunc(inputString);

reverseStringFunc("акортс яавотсеТ");

// И обратно:
// console.log(reverseArray.join("").split("").reverse().join(""));