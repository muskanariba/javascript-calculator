
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
     document.getElementById('display').value = eval(display.value)
   
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deletelast(){
  document.getElementById('display').value = display.value.slice(0, -1);
   
}