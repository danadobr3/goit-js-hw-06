const counter = document.getElementById(`counter`);
const valueSpan = document.getElementById(`value`);

let counterValue = 0;

function updateValue() {
  valueSpan.textContent = counterValue;
}
counter.addEventListener('click', function (event) {
    const action = event.target.dataset.action;
    if (action === "decrement") {
        counterValue -= 1;
    } else if (action === "increment") {
        counterValue += 1;
    }
    updateValue();
});
updateValue();