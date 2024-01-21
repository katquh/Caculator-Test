window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = getCurrentUIValues();

  values.amount = "500";
  values.years = "5";
  values.rate = "3";

  document.getElementById("loan-amount").value = values.amount;
  document.getElementById("loan-years").value = values.years;
  document.getElementById("loan-rate").value = values.rate;
  update();

  // calculateMonthlyPayment(values);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(values).toString();
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //get the principle
  let p = values.amount;
  //get the month rate
  let i = values.rate/12/100;
  //get the term lenght in months
  let months = values.years *12;
  //formula to calculate monthly payment 
  let monthlyPayment = (p * i)/(1-(1+i)**-months);
  //round month payment to 2 decimal point 
  monthlyPayment = Math.round(monthlyPayment*100)/100;
  return monthlyPayment;

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$"+ monthly;
}

