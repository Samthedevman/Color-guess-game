var title = document.getElementById('titleHello')
var displayR = document.getElementById('displayResult')
let changingBox = document.getElementById('square')
let userChoice
let index = 0
let colors = ['red', 'green', 'blue', 'pink']
let correctR = document.getElementById("cr")
let incorrectR = document.getElementById("ir")
let tallyC = 0;
let tallyIc = 0;

setInterval(function () {
  title.style.color = colors[index]
  index = (index + 1) % colors.length
}, 1000)

const redButton = document.getElementById('red-button')
redButton.addEventListener('click', function () {
  userChoice = 'red'
  colorChange()
})

const blueButton = document.getElementById('blue-button')
blueButton.addEventListener('click', function () {
  userChoice = 'blue'
  colorChange()
})

const greenButton = document.getElementById('green-button')
greenButton.addEventListener('click', function () {
  userChoice = 'green'
  colorChange()
})

const pinkButton = document.getElementById('pink-button')
pinkButton.addEventListener('click', function () {
  userChoice = 'pink'
  colorChange()
})

function colorChange() {
  let randomColor = colors[Math.floor(Math.random() * 4)]
  changingBox.style.backgroundColor = randomColor
  if (userChoice === randomColor) {
    displayR.innerHTML = 'Correct 😀'
    tallyC++;
    correctR.innerHTML = tallyC;
  } else {
    displayR.innerHTML = 'Try again 💀'
    tallyIc++;
    incorrectR.innerHTML = tallyIc;
  }
}
