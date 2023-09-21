
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')

var a = ""
var value = []
var operation = ""
var result = 0
var previousCalculate = false
var previousOperator = false
var previousClear = false

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {

   const key = e.target
   const action = key.dataset.action

   if (!action) {
    console.log('number key!')
    a += key.innerText
    console.log(a)
    if(previousOperator){ display.innerHTML += a; previousOperator = false}
    else{display.innerHTML = a}
   }

   if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    console.log('operator key!')
    if (action === 'add'){display.innerHTML += '+'}
    if (action === 'subtract'){display.innerHTML += '-'}
    if (action === 'multiply'){display.innerHTML += '*'}
    if (action === 'divide'){display.innerHTML += '÷'}
    operation = action
    if(!previousCalculate || previousClear) {value.push(parseFloat(a)); previousCalculate = false}
    console.log(value)
    a = ""
    previousOperator = true
  }

  if(action === 'decimal'){
    console.log('decimal key!')
    a += key.innerText
    display.innerHTML = a
  }

  if(action === 'clear'){
    console.log('clear key!')
    display.innerHTML = "0"
    a = ""
    value = []
    result = 0
    operation = ""
    previousClear = true
  }

  if(action === 'calculate'){
    console.log('calculate key!')
    if(a!==""){ /*A la espera de otro operando*/
        value.push(parseFloat(a));
        console.log(operation)
        if (operation === 'add'){result = value[0] + value[1]; display.innerHTML = String(result)}
        if (operation === 'subtract'){result = value[0] - value[1]; display.innerHTML = String(result)}
        if (operation === 'multiply'){result = value[0] * value[1]; display.innerHTML = String(result)}
        if (operation === 'divide'){result= value[0] / value[1]; display.innerHTML = String(result)}
        value = []
        a = ""
        value.push(result) 
        previousCalculate = true
        previousClear = false
    }
  }
 }
})