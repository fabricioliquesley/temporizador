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
newTimeButton = container.querySelector('.new-time-button');


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
    container.classList.add('active')
    popupBox.classList.remove('show')

    let duration = (parseInt(inputHours.value) * 60 * 60) + (parseInt(inputMinutes.value) * 60) + parseInt(inputSeconds.value)

    display = container.querySelector('#timer')
    startTimer(duration, display)
})

function startTimer(duration, display){
    let timer = duration
    let hours, minutes, seconds

    setInterval(() => {
        hours = Math.floor((timer / 60) / 60)
        minutes = Math.floor(timer / 60 - (hours * 60))
        seconds = Math.floor(timer % 60)

        hours = hours < 10 ? `0${hours}` : hours
        minutes = minutes < 10 ? `0${minutes}` : minutes
        seconds = seconds < 10 ? `0${seconds}` : seconds

        display.innerHTML = `${hours}:${minutes}:${seconds}`

        timer -= 1

        if(timer < 0){
            display.innerHTML = '00:00:00'
        }
    }, 1000);
}