function exercise1() {
    const userInput1 = document.getElementById('input1').value;
    let divSection1 = document.getElementById("user-out-1");
    displayText(userInput1, divSection1);
}

function exercise2() {
    let userInput2 = document.getElementById('input2').value;
    let divSection2 = document.getElementById("user-out-2");
    let newNum = addition(userInput2);
    displayText(newNum, divSection2);
    
}

function exercise3() {
    const calcNum1 = document.getElementById("calc-input-1").value;
    const calcNum2 = document.getElementById("calc-input-2").value;

}

function displayText (userInput) {
    document.getElementById(divSection).textContent = userInput
}

function addition(userInput) {
    let lastNum = 0
    let 
}