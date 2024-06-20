

const form = document.querySelector('form')
const addNumButton = document.querySelector('button')
const output = document.querySelector('output')
const sortOne = document.querySelector('#sortOne')
const sortAll = document.querySelector('#sortAll')
const evens = document.querySelector('#even')
const odds = document.querySelector('#odd')
let numbersArray = [];



form.addEventListener('submit', (event) => {
    
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')
    const numbers = parseInt(inputNumber.value);

    output.innerHTML = numbers
    numbersArray.push(numbers);

    inputNumber.value = '';
});



sortOne.addEventListener('submit', (event) => {
    event.preventDefault();

    if (numbersArray.length > 0) {
        const firstNumber = numbersArray.shift();
        numberEvaluator(firstNumber);
    }
});

sortAll.addEventListener('click', (event) => {
    event.preventDefault();

    evens.innerHTML = '';
    odds.innerHTML = '';

    numbersArray.forEach(numbers => numberEvaluator(numbers));
});


function numberEvaluator(numbers) {
    if ( numbers % 2 === 0 ) {
        evens.innerHTML += numbers + '<br>';
    } else {
        odds.innerHTML += numbers + '<br>';
    }
}