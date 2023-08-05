const age = document.querySelector('.age');
const select = document.querySelector('.pidro');
const submit = document.querySelector('.submit');

submit.addEventListener('click', (ev) => {
    console.log('Age:', Number(age.value), 'Sex:', select.value);
})