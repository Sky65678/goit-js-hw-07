function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesDiv = document.getElementById("boxes");
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = 30 + i * 10 + "px";
    box.style.height = 30 + i * 10 + "px";
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxesDiv.appendChild(fragment);
}
// Очищення
function destroyBoxes() {
  const boxesDiv = document.getElementById("boxes");
  boxesDiv.innerHTML = "";
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

// обробник події для кнопки Create
createBtn.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Error. Enter a number between 1 and 100.");
  }
});

// обробник події для кнопки Destroy
destroyBtn.addEventListener("click", destroyBoxes);
