var billInput = document.getElementById("bill-input");
var splitterNumPpl = document.getElementById("splitter-number-people");
var fivePercent = document.getElementById("fivePercent");
var tenPercent = document.getElementById("tenPercent");
var fifteenPercent = document.getElementById("fifteenPercent");
var twoFivePercent = document.getElementById("twoFivePercent");
var fiveZeroPercent = document.getElementById("fiveZeroPercent");
var customTip = document.getElementById("customTip");
var resetBtn = document.getElementById("resetBtn");

var tipAmount = 0;
var billAmount = 0;
var pplAmount = 0;

resetBtn.addEventListener("click", () => {
  window.location.reload();
});

billInput.addEventListener("change", (e) => {
  changeBillInput(parseFloat(e.target.value).toFixed(2));
});

function changeBillInput(value) {
  billAmount = parseFloat(value).toFixed(2);
  console.log(billAmount);
}

splitterNumPpl.addEventListener("change", (e) => {
  console.log(e.target.value);
  changeNumPplInput(e.target.value);
});

function changeNumPplInput(value) {
  pplAmount = value;
  console.log(pplAmount);
  tipAmountInDollars = parseFloat(billAmount * tipAmount).toFixed(2);
  tipCalculation = parseFloat(tipAmountInDollars / pplAmount).toFixed(2);
  document.getElementById("tipPrice").innerText = `$${tipCalculation}`;

  totalAmountPerPerson = (
    (parseFloat(billAmount) + parseFloat(tipAmountInDollars)) /
    pplAmount
  ).toFixed(2);

  document.getElementById("totalPrice").innerText = `$${totalAmountPerPerson}`;
}

fivePercent.addEventListener("click", (e) => {
  selectTip(e.target.value);
});

tenPercent.addEventListener("click", (e) => {
  selectTip(e.target.value);
});

fifteenPercent.addEventListener("click", (e) => {
  selectTip(e.target.value);
});

twoFivePercent.addEventListener("click", (e) => {
  selectTip(e.target.value);
});

fiveZeroPercent.addEventListener("click", (e) => {
  selectTip(e.target.value);
});

customTip.addEventListener("change", (e) => {
  selectTip(e.target.value);
});

function selectTip(value) {
  tipAmount = value;
  console.log(tipAmount);
}
