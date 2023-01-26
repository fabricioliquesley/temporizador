var startButton = document.querySelector('.start-button'),
popupBox = document.querySelector('.popup-box'),
closePopupButton = popupBox.querySelector('header i'),
inputHours = popupBox.querySelector('#input_hours'),
inputMinutes = popupBox.querySelector('#input_minutes'),
inputSeconds = popupBox.querySelector('#input_seconds'),
formButton = popupBox.querySelector('#form_btn'),
container = document.querySelector('.container'),
circularProgress = container.querySelector('.circular-progress'),
time_h = container.querySelector('.time_h'),
time_m = container.querySelector('.time_m'),
time_s = container.querySelector('.time_s'),
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
    popupBox.classList.remove('show')
    startButton.classList.add('show')
})

formButton.addEventListener('click', () => {
    popupBox.classList.remove('show')
    container.classList.add('show')
})