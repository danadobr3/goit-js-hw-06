


const selectors = {
  input: document.querySelector(".js-input"),
  create: document.querySelector(".js-create"),
  destroy: document.querySelector(".js-destroy"),
  boxes: document.querySelector('#boxes')
};
selectors.create.addEventListener("click", handlerCreate);
selectors.destroy.addEventListener("click", handlerDestroy);

function handlerCreate() {
  const amount = Number(selectors.input.value);
  createBoxes(amount);
  selectors.input.value = 0
}

function handlerDestroy() {
  selectors.boxes.innerHTML = ''
}

function createBoxes(amount) {
  handlerDestroy()
  let size = 20;
  const elements = []
 for (let i = 0; i < amount; i += 1) {
    size += 10;

    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor()
    elements.push(div)
  }
selectors.boxes.append(...elements)
}





function handlerDestroy() {
  selectors.boxes.innerHTML = ''
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


