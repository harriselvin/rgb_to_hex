const inputRed = document.querySelector('[data-red]')
const inputGreen = document.querySelector('[data-green]')
const inputBlue = document.querySelector('[data-blue]')
const convertBtn = document.querySelector('button')
const resetBtn = document.querySelectorAll('button')[1]
const textDisplay = document.querySelector('.text')
const colorBox = document.querySelector('.color-box')

let [red, green, blue] = [0,0,0]

function hex(num) {
    if (num == 10){
        return 'A'
    } else if (num == 11){
        return 'B'
    } else if (num == 12){
        return 'C'
    } else if (num == 13){
        return 'D'
    } else if (num == 14){
        return 'E'
    } else if (num == 15){
        return 'F'
    } else{
        return num
    }
}

function convert() {
    if (inputRed.value == '') {
        inputRed.value = 0
    }
     if (inputGreen.value == '') {
        inputGreen.value = 0
    }
     if (inputBlue.value == '') {
        inputBlue.value = 0
    } 

    let red = parseInt(inputRed.value)
    
    let green = parseInt(inputGreen.value)
    
    let blue = parseInt(inputBlue.value)

    let redColor = red.toString(16).padStart(2, '0').toUpperCase();
    let greenColor = green.toString(16).padStart(2, '0').toUpperCase();
    let blueColor = blue.toString(16).padStart(2, '0').toUpperCase();

    textDisplay.innerText = `#${redColor + greenColor + blueColor}`

    // Set background color of colorBox
    colorBox.style.backgroundColor = `#${redColor}${greenColor}${blueColor}`
}

function reset() {
    [red, green, blue] = [0,0,0]
    inputRed.value = ""
    inputGreen.value = ""
    inputBlue.value = ""
    textDisplay.innerText = '#000000'
    colorBox.style.backgroundColor = `black`
}

convertBtn.addEventListener('click', convert)
resetBtn.addEventListener('click', reset)