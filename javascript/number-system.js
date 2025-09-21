function convertNumber() {
    const fromBase = parseInt(document.getElementById("fromBase").value);
    const toBase = parseInt(document.getElementById("toBase").value);
    const inputVal = document.getElementById("inputNumber").value.trim();

  if (inputVal === "") {
    alert("Please enter a number!");
    return;
  }

  try {
    const decimalValue = parseInt(inputVal, fromBase);

    if (isNaN(decimalValue)) {
      alert("Invalid input for the selected base!");
      return;
    }

    const result = decimalValue.toString(toBase).toUpperCase();
    document.getElementById("outputNumber").value = result;
  } catch (e) {
    alert("Error in conversion!");
  }
}

function reset(){
    document.getElementById("inputNumber").value = "";
    document.getElementById("outputNumber").value = "";
    document.getElementById("fromBase").value = "10";
    document.getElementById("toBase").value = "10";
}