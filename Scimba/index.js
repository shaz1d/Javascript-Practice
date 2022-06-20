const inputEl = document.getElementById("input");
const feetText = document.getElementById("feet-text");
const meterText = document.getElementById("meter-text");
const literText = document.getElementById("liter-text");
const gallonText = document.getElementById("gallon-text");
const killogramText = document.getElementById("killogram-text");
const poundText = document.getElementById("pound-text");
const inputText = document.querySelectorAll(".input-val");

const calcValue = () => {
  let inputVal = parseInt(inputEl.value);
  let feetVal = (inputVal * 3.28084).toFixed(2);
  let meterVal = (inputVal * 0.3048).toFixed(2);
  let literVal = (inputVal * 3.7854).toFixed(2);
  let gallonVal = (inputVal * 0.2641729).toFixed(2);
  let killogramVal = (inputVal * 0.4535924).toFixed(2);
  let poundVal = (inputVal * 2.204623).toFixed(2);
  inputText.forEach((el) => (el.textContent = inputVal));

  feetText.textContent = feetVal;
  meterText.textContent = meterVal;
  literText.textContent = literVal;
  gallonText.textContent = gallonVal;
  killogramText.textContent = killogramVal;
  poundText.textContent = poundVal;
};
