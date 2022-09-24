const theme1 = document.getElementById("1");
const theme2 = document.getElementById("2");
const theme3 = document.getElementById("3");
const body = document.getElementById("body");
const inputs = document.querySelectorAll(".input");
const curInput = document.getElementById("curInput");
const prevInput = document.getElementById("prevInput");
const resetButton = document.getElementById("reset");
const delButton = document.getElementById("del");
let isSolved = false;
const equalBtn = document.getElementById("equalbtn");

//THEME CHANGER
const changeTheme = function (num) {
  num = this.value;
  body.className = `theme-${num}`;
};

theme1.addEventListener("click", changeTheme);
theme2.addEventListener("click", changeTheme);
theme3.addEventListener("click", changeTheme);

//PASS INPUTS
const passInput = function () {
  let testStr = curInput.innerText.charAt(curInput.innerText.length - 1);
  let lastInput = prevInput.innerText.charAt(prevInput.innerText.length - 1);
  let isOperator = /^[\+\-\*\/]{1}$/;
  let hasUslessComma = /^[0-9]+[,]{1}[0]*$/;

  
  if (hasUslessComma.test(curInput.innerText) && isOperator.test(this.value)) {
    curInput.innerText = curInput.innerText.substring(0, curInput.innerText.indexOf(","));
  }
  if (testStr === "∞" || testStr ==="N") {
    resetButton.click();
    return
  }
  if (
    isOperator.test(lastInput) && 
    isOperator.test(this.value) &&
    curInput.innerText === "0"
  ) {
    prevInput.innerText = prevInput.innerText.slice(0, -1);
    prevInput.innerText += ` ${this.value} `;
    return
  }
    if 
      (testStr === "," && isOperator.test(this.value)
    ) {
      console.log("its me")
      curInput.innerText = curInput.innerText.slice(0, -1);
    }

  //Check if user wants to continue with result else start new
  if (
    isSolved &&
    isOperator.test(this.value)
  ) {
    prevInput.innerText = "";
    isSolved = false;
  } else if (isSolved) {
    curInput.innerText = 0;
    prevInput.innerText = "";
    isSolved = false;
  }

  //allow only one ','
  if (this.value == "," && curInput.innerText.indexOf(",") !== -1) {
    return;
  }

  //pass inputs(check for operators, and 0 in the beginning)
  if (
    isOperator.test(this.value)
  ) {
    curInput.innerText += ` ${this.value} `;
    prevInput.innerText += " " + curInput.innerText.replaceAll("= ", "");
    curInput.innerText = "0";
  } else if (curInput.innerHTML == "0" && this.value != ",") {
    curInput.innerHTML = "";
    curInput.innerHTML += this.value;
  } else {
    curInput.innerHTML += this.value;
    let point = curInput.innerText.indexOf(",");
    if (point == -1) {
      curInput.innerText = Number(
        curInput.innerText.replaceAll(".", "")
      ).toLocaleString("de-DE");
    }
  }

  //change font size based on the length of the input
  if (curInput.innerHTML.length > 19) {
    curInput.style.fontSize = "24px";
    curInput.style.marginTop = "7.2px";
  }
  if (curInput.innerHTML.length > 27) {
    curInput.style.fontSize = "16px";
    curInput.style.marginTop = "15.2px";
  }
};

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", passInput);
}

//SOLVE

const solve = function (event) {
  let testStr = curInput.innerText.charAt(curInput.innerText.length - 1);
  let hasUslessComma = /^[0-9]+[,]{1}[0]*$/;
  console.log(curInput.innerText);
  if (hasUslessComma.test(curInput.innerText)) {
    curInput.innerText = curInput.innerText.substring(0, curInput.innerText.indexOf(","));
  }

  if (testStr === ",") {
    curInput.innerText = curInput.innerText.slice(0, -1);
  }

  if (isSolved || prevInput.innerText == "") {
    return;
  }
  let newInput = curInput.innerText.replaceAll(".", "");
  prevInput.innerText += " " + newInput.toLocaleString("de-DE");
  let prevEval = prevInput.innerText.replaceAll(".", "");
  let result = eval(prevEval.replaceAll(",", "."));
  curInput.innerText = "= " + result.toLocaleString("de-DE");
  isSolved = true;
};

equalBtn.addEventListener("click", solve);

//RESET

resetButton.onclick = function () {
  curInput.innerText = 0;
  prevInput.innerHTML = "";
  curInput.style.fontSize = "32px";
  curInput.style.marginTop = "0px";
};

//DELETE LAST

delButton.onclick = function () {
  let testStr = curInput.innerText.charAt(curInput.innerText.length - 1);
  if (curInput.innerText.length == 1 || isSolved) {
    curInput.innerText = 0;
    console.log("1");
  } else {
    console.log("3");
    curInput.innerText = curInput.innerText.slice(0, -1);
  }
  if (curInput.innerHTML.length <= 19) {
    curInput.style.fontSize = "32px";
    curInput.style.marginTop = "0px";
  } else if (curInput.innerHTML.length <= 27) {
    curInput.style.fontSize = "24px";
    curInput.style.marginTop = "7.2px";
  }
};

document.addEventListener(
  "keydown",
  (event) => {
    let name = event.key;
    let code = event.code;
    let inputsValues = [];
    for (let i = 0; i < inputs.length; i++) {
      inputsValues.push(inputs[i].innerHTML);
    }
    let index = inputsValues.indexOf(name);
    if (name === "*") {
      index = inputsValues.indexOf("x");
    }
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    switch (name) {
      case "1":
        inputs[index].click();
        break;
      case "2":
        inputs[index].click();
        break;
      case "3":
        inputs[index].click();
        break;
      case "4":
        inputs[index].click();
        break;
      case "5":
        inputs[index].click();
        break;
      case "6":
        inputs[index].click();
        break;
      case "7":
        inputs[index].click();
        break;
      case "8":
        inputs[index].click();
        break;
      case "9":
        inputs[index].click();
        break;
      case "0":
        inputs[index].click();
        break;
      case ",":
        inputs[index].click();
        break;
      case "+":
        inputs[index].click();
        break;
      case "-":
        inputs[index].click();
        break;
      case "/":
        inputs[index].click();
        break;
      case "*":
      case "x":
        inputs[index].click();
        break;
      case "Enter":
        equalBtn.click();
        break;
      case "Backspace":
        delButton.click();
        break;
      case "Delete":
        resetButton.click();
        break;
    }
  },
  false
);

curInput.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  curInput.scrollLeft += evt.deltaY;
});

prevInput.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  prevInput.scrollLeft += evt.deltaY;
});
