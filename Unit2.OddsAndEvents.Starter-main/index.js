const form = document.querySelector('#numberForm');
const addNumButton = document.querySelector('#addNumberButton');
const numberOutput = document.querySelector('#numberOutput');
const sortOneButton = document.querySelector('#sortOne');
const sortAllButton = document.querySelector('#sortAll');
const evensOutput = document.querySelector('#even');
const oddsOutput = document.querySelector('#odd');
let numbersArray = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const inputNumber = document.querySelector('#inputNumber').value.trim();
  const number = parseInt(inputNumber);

  if (!isNaN(number)) {
    numbersArray.push(number);
    updateNumberBank();
  }

  document.querySelector('#inputNumber').value = '';
});


function updateNumberBank() {
  numberOutput.innerHTML = numbersArray.join(', ');
}
sortOneButton.addEventListener('click', (event) => {
  if (numbersArray.length > 0) {
    const firstNumber = numbersArray.shift();
    numberEvaluator(firstNumber);
    updateNumberBank();
  }
});

sortAllButton.addEventListener('click', (event) => {
  numbersArray.forEach(number => numberEvaluator(number));
  numbersArray = []
  updateNumberBank();
});
function numberEvaluator(number) {
  if (number % 2 === 0) {
    evensOutput.innerHTML += number + '<br>';
  } else {
    oddsOutput.innerHTML += number + '<br>';
  }
}
