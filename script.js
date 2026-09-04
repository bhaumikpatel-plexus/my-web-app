let count = 0;
const countDisplay = document.getElementById('count');
const button = document.getElementById('increment-btn');

button.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});
