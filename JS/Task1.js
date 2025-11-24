window.onload = function () {
  Swal.fire({
    title: "Welcome!",
    text: "Let's start your calculator!",
    icon: "success",
    confirmButtonText: "Start"
  }).then(() => {
    getOperation();
  });
};

function getOperation() {
  Swal.fire({
    title: "Enter Operation",
    input: "text",
    inputPlaceholder: "+  -  *  /",
    confirmButtonText: "Next",
    inputValidator: (value) => {
      if (!["+","-","*","/"].includes(value)) {
        return "Please enter a valid operation (+, -, *, /)";
      }
    }
  }).then((result) => {
    let operation = result.value;
    document.getElementById("op").textContent = operation;
    getNumber1(operation);
  });
}

function getNumber1(operation) {
  Swal.fire({
    title: "Enter First Number",
    input: "number",
    confirmButtonText: "Next",
    inputValidator: (value) => {
      if (value === "") {
        return "Number is required";
      }
    }
  }).then((result) => {
    let num1 = parseFloat(result.value);
    document.getElementById("num1").textContent = num1;
    getNumber2(operation, num1);
  });
}

function getNumber2(operation, num1) {
  Swal.fire({
    title: "Enter Second Number",
    input: "number",
    confirmButtonText: "Calculate",
    inputValidator: (value) => {
      if (value === "") {
        return "Number is required";
      }
    }
  }).then((result) => {
    let num2 = parseFloat(result.value);
    document.getElementById("num2").textContent = num2;

    calculate(operation, num1, num2);
  });
}

function calculate(operation, num1, num2) {
  let result;

  if (operation === "+") result = num1 + num2;
  if (operation === "-") result = num1 - num2;
  if (operation === "*") result = num1 * num2;
  if (operation === "/") result = num1 / num2;

  console.log("Result:", result);
}






