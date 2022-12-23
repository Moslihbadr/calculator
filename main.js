display = document.getElementById('display')
clearDisplay = document.querySelector('.red')
backSpace = document.querySelector('.backSpace')
equale = document.querySelector('.blue')
buttons = document.querySelectorAll('.btn')
parRight = document.getElementById('parRight')
parLeft = document.getElementById('parLeft')
icon = document.getElementById('icon')
span = document.getElementById('span')
calculator = document.querySelector('.calculator')


clearDisplay.addEventListener('click',function(){
    display.value = ''
})

backSpace.addEventListener('click',function(){
    let displayValue = display.value.split('');
    displayValue.pop();
    display.value = displayValue.join('');
})

function addToDisplay(value){
    display.value += value;
}

parRight.onclick = function() {
    display.value += '(';
}
parLeft.onclick = function() {
    display.value += ')';
}

equale.addEventListener('click', function () {
    if(display.value != ''){
        try{
            let result = eval(display.value);
            display.value = result  
        }
        catch{
            display.value = 'ERREUR!'
        }
    }
    else {
        display.value = 'Taper Quelque Chose à Calculer.'
    }
})

function darkMode(){
    icon.src = './icons/icons8-light-mode-78.png'
    icon.title = 'Light Mode'
    document.body.style.backgroundColor = '#121212'
    display.style.backgroundColor = "#212121"
    display.style.color = "#ddd"
    for(i=0;i<buttons.length;i++){
        buttons[i].style.backgroundColor = '#212121'
        buttons[i].style.color = 'white'
    }
    backSpace.style.backgroundColor = '#212121'
    backSpace.style.color = 'white'
    span.style.color = '#ddd'
    calculator.style.backgroundColor = "#424242"
    let mode = 'dark'
    if(mode === 'dark'){
        icon.onclick = () => {
            location. reload()
        }
    }
}