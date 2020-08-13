const addButton = document.querySelector('.add');
const subButton = document.querySelector('.sub');
const drinkCount = document.querySelector('.drink-cnts');

addButton.onclick = () => {
  const curr = parseInt(drinkCount.innerText, 10);
  drinkCount.innerText = curr + 1;
};
subButton.onclick = () => {
  const curr = parseInt(drinkCount.innerText, 10);
  if (curr === 0) return drinkCount.innerText;
  drinkCount.innerText = curr - 1;
};
