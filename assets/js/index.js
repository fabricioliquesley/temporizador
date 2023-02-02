var startButton = document.querySelector('.start-button'),
popupBox = document.querySelector('.popup-box'),
closePopupButton = popupBox.querySelector('header i'),
inputHours = popupBox.querySelector('#input_hours'),
inputMinutes = popupBox.querySelector('#input_minutes'),
inputSeconds = popupBox.querySelector('#input_seconds'),
formButton = popupBox.querySelector('#form_btn'),
container = document.querySelector('.container'),
circularProgress = container.querySelector('.circular-progress'),
ContinueButton = container.querySelector('.Continue-button'),
pauseButton = container.querySelector('.pause-button'),
resetButton = container.querySelector('.reset-button'),
newTimeButton = container.querySelector('.new-time-button'),
cron,
duration,
timer,
angle

startButton.addEventListener('click', () => {
    inputHours.focus()
    popupBox.classList.add('show')
    startButton.classList.remove('show')
})

closePopupButton.addEventListener('click', () => {
    startButton.classList.add('show')
    popupBox.classList.remove('show')
})

formButton.addEventListener('click', () => {
    if(inputHours.value.length == 0 || inputMinutes.value.length == 0 || inputSeconds.value.length == 0){
        alert('Preencha os espaços em branco abaixo!!')
    } else {
        if((inputHours.value > 99 || inputMinutes.value > 59 || inputSeconds.value > 59) || (inputHours.value < 0 || inputMinutes.value < 0 || inputSeconds.value < 0)){
            alert('Valores invalidos')
        } else {
            container.classList.add('active')
            popupBox.classList.remove('show')
    
            duration = (parseInt(inputHours.value) * 60 * 60) + (parseInt(inputMinutes.value) * 60) + parseInt(inputSeconds.value)
    
            display = container.querySelector('#timer')
            startTimer(duration, display)
        }
    }
})

ContinueButton.addEventListener('click', () => {
    pauseButton.style.display = 'flex'
    ContinueButton.style.display = 'none'
    ContinueButton.classList.add('activebtn')

    startTimer(timer, display)
})

pauseButton.addEventListener('click', () => {
    clearInterval(cron)
    ContinueButton.style.display = 'flex'
    pauseButton.style.display = 'none'
})

resetButton.addEventListener('click', () => {
    angle = 360
    display.innerHTML = '00:00:00'

    newGradient(angle)
    clearInterval(cron)
})

newTimeButton.addEventListener('click', () => {
    display.innerHTML = '00:00:00'
    popupBox.classList.add('show')
    container.classList.remove('active')
})

function startTimer(duration, display){
    timer = duration
    let gradient = timer
    let hours, minutes, seconds

    clearInterval(cron)
    cron = setInterval(() => {
        hours = Math.floor((timer / 60) / 60)
        minutes = Math.floor(timer / 60 - (hours * 60))
        seconds = Math.floor(timer % 60)

        hours = hours < 10 ? `0${hours}` : hours
        minutes = minutes < 10 ? `0${minutes}` : minutes
        seconds = seconds < 10 ? `0${seconds}` : seconds

        display.innerHTML = `${hours}:${minutes}:${seconds}`

        timer -= 1
        angle = (360 / gradient) * (timer + 1)
        newGradient(angle)
        
        if(timer < 0){
            display.innerHTML = '00:00:00'
            clearInterval(cron)
        }
    }, 1000);
}

function newGradient(angle){
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${angle}deg, #ededed 0deg)`
}