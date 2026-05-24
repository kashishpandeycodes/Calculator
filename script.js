const display = document.getElementById('display');

const allbuttons = document.querySelectorAll('.btn');

for (let i = 0; i < allbuttons.length; i++) {
    allbuttons[i].addEventListener('click', function () {
        let buttonText = this.innerText;
        if (buttonText === 'C') {
            display.value = '';
        }
        else if (buttonText === '⌫') {
            display.value = display.value.slice(0, -1);
        }
        else if (buttonText === '=') {
            try {
                let result =display.value.replace(/×/g, '*');
                display.value = eval(result);
            } catch (error) {
                display.value = 'Error';
            }
        }
        else if (buttonText === '÷') {
            display.value += '*';
       }
        else {
            display.value += buttonText;
        }
    });
}