const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let currentExpression = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (button.id === 'clear') {
      currentExpression = '';
      display.value = '';
      return;
    }

    if (button.id === 'equals') {
      try {
        const result = eval(currentExpression);
        display.value = result;
        currentExpression = String(result);
      } catch (error) {
        display.value = 'Error';
        currentExpression = '';
      }
      return;
    }

    if (value) {
      currentExpression += value;
      display.value = currentExpression;
    }
  });
});
