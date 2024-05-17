function calculateFactorial() {
    const number = document.getElementById('numberInput').value;
    const result = factorial(number);
    displayResult(result);
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  function generateRandomNumber() {
    const min = 1;
    const max = 100;
    const result = getRandomNumber(min, max);
    displayResult(result);
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>Result:</strong> ${result}`;
  }
  // Define other functions here
  // JavaScript functions
  function toggleClass() {
    $("button.toggle").click(function () {
        $("p.highlight").toggleClass("highlight");
    });
}

function fadeInOut() {
    $("button.fade").click(function () {
        $("p.fade").fadeOut(1000, function () {
            $(this).fadeIn(1000);
        });
    });
}

function slideUpDown() {
    $("button.slide").click(function () {
        $("p.slide").slideUp(1000, function () {
            $(this).slideDown("slow");
        });
    });
}

function showHide() {
    $("button.showHide").click(function () {
        $("p.showHide").show();
        $("div.showHide").hide();
    });
}

function toggleElement() {
    $("button.toggleElement").click(function () {
        $("p.toggleElement").toggle();
    });
}

function callbackExample() {
    $("button#callback").click(function () {
        $("div#callbackDiv").fadeOut("slow", function () {
            alert("Fade out complete.");
        });
    });
}

function eventHandling() {
    $("button#eventButton").on("click", function () {
        alert("Button clicked!");
    });
}

function ajaxGet() {
    $.ajax({
        url: "demo_test.txt",
        success: function (result) {
            $("div#ajaxDiv").html(result);
        },
    });
}

function formValidation() {
    $("form#validationForm").submit(function (event) {
        if ($("input#validationInput").val() === "") {
            alert("Input field is empty!");
            event.preventDefault();
        }
    });
}

// Initialize functions
toggleClass();
fadeInOut();
slideUpDown();
showHide();
toggleElement();
callbackExample();
eventHandling();
ajaxGet();
formValidation();

let display = document.getElementById('display');
let currentOperation = "";
let currentNumber = "";

function appendToDisplay(number) {
    display.value += number;
}

function appendToOperation(operation) {
    currentOperation = operation;
    display.value += " " + operation + " ";
}

function clearDisplay() {
    display.value = "";
    currentOperation = "";
    currentNumber = "";
}

function calculateResult() {
    let firstNumber = parseFloat(currentNumber);
    let secondNumber = parseFloat(display.value);
    let result;

    switch (currentOperation) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
    }

    display.value = result;
    currentOperation = "";
    currentNumber = "";
}
