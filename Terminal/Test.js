function name(...data) {
  console.log(data);

  $.terminal.active().echo(`func - name   --  ${data}`);
}

function sum(a, b) {
  // let a = Number(a_);
  // let b = Number(b_);

  console.log(a + b);
  $.terminal.active().echo(`${outputSign} sum = ${a} + ${b} = ${a + b}`);
}

function setup() {
  noCanvas();
  console.log("Yep!!!");
}

function multiply(a,b) {
  console.log(a * b);
 $.terminal.active().echo(`${outputSign} product = ${a} * ${b} = ${a * b}`);
}

function divide(a,b) {
  console.log(a / b);
 $.terminal.active().echo(`${outputSign} product = ${a} / ${b} = ${a / b}`);
}

function binary(a) {
  console.log(a);
 $.terminal.active().echo(`${outputSign} Binary Conversion = ${a} -> ${a.toString(2)}`);
}

function hex(a) {
  console.log(a);
 $.terminal.active().echo(`${outputSign} Hexa Conversion = ${a} -> ${a.toString(16)}`);
}

function power(a,b){
  console.log(Math.pow(a,b));
  $.terminal.active().echo(`${outputSign} result = ${a} ^ ${b} -> ${Math.pow(a,b)}`);
}

function factorial(a){
  console.log(a);
  const calcRange = (a) => {
    return [...Array(a).keys()].map(i => i + 1)
  }
  if (a === 0) {
    $.terminal.active().echo(`${outputSign} the factorial of 0 is 1.}`);
  }
  if (a < 0) {
    $.terminal.active().echo(`${outputSign} Sorry, factorial does not exist for negative numbers.}`);
  }
  if (a > 0) {
    const range = calcRange(a)
    const factorial = range.reduce((a, c) => a * c, 1)
    $.terminal.active().echo(`${outputSign} The factorial of ${a} is ${factorial}`);
  }

}


