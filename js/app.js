let firstNum;
let secondNum;
let result;

function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
alert("Biến result trước khi gọi hàm: " + result);
result = addNumbers();
alert("Biến result sau khi gọi hàm: " + result);