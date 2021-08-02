const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const colorSwitchBtnRef = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

let colorSwitchIntervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomBgColor = (colors) => {
  const currentIndex = randomIntegerFromInterval(0, colors.length);

  document.body.style.backgroundColor = colors[currentIndex];
};

colorSwitchBtnRef.start.addEventListener("click", () => {
  if (colorSwitchIntervalId) {
    return;
  }

  colorSwitchIntervalId = setInterval(
    setRandomBgColor.bind(this, colors),
    1000,
  );
});

colorSwitchBtnRef.stop.addEventListener("click", () => {
  clearInterval(colorSwitchIntervalId);
  colorSwitchIntervalId = null;
});
