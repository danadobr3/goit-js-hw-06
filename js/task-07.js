const fontSizeControl = document.querySelector(`#font-size-control`);
const textElement = document.querySelector(`#text`);

fontSizeControl.addEventListener("input", (event) => {
    const fontSize = fontSizeControl.value;
    textElement.style.fontSize = `${fontSize}px`;
});
