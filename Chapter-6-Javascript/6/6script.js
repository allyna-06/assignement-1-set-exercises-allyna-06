// When the user clicks the button, this function runs
function calculateTotal() {
  // Grab the value the user entered for petrol price per liter
  const costPerLiter = parseFloat(document.getElementById('costPerLiter').value);

  // Grab the number of liters the user says they bought
  const litersPurchased = parseFloat(document.getElementById('litersPurchased').value);

  // Multiply the two to get the total cost
  const totalCost = costPerLiter * litersPurchased;

  // Show the result nicely rounded to 2 decimal places in the <p> tag
  document.getElementById('result').innerText = `Total cost: £${totalCost.toFixed(2)}`;
}
