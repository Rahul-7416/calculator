const equal = document.querySelector('.equal');
const display = document.querySelector('#displayScreen');

equal.addEventListener('click', calc);

display.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        calc();
    }
}, false);

function calc() {
    if(display.value === ''){
        alert('Please input something first');
    }
    else{
        display.value = eval(display.value);
    }
}