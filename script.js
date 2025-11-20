const content = document.getElementById("container")

const box = document.createElement("div")

const h1 = document.createElement("h1")
h1.classList.add("heading")
h1.innerText = `Guess the Number between 1 - 9 `

const form = document.createElement("form")
form.classList.add("form")

const input = document.createElement("input")
input.type = "number"
input.placeholder = "Enter a number"
input.id = "userInput"
input.classList.add("input")

const button = document.createElement("button")
button.textContent = "Enter"
button.type = "button"
button.classList.add("btn")

form.appendChild(input)
form.appendChild(button)

box.appendChild(h1)
box.appendChild(form)

const num = Math.floor(Math.random() * 9) + 1
console.log(num)

const p = document.createElement("p")
p.classList.add("p")
let attempt = 3;
p.innerText = `No of attempts : ${attempt}`

box.appendChild(p)

const result = document.createElement("h1")
result.classList.add("result")
box.appendChild(result)
content.appendChild(box)

let count = 0;

function atAttempt() {
  result.innerText = `You are Out of Attempts. The number is ${num}`
  p.innerText = ""

  setTimeout(() => {
    result.innerText = "Game is Over "
  }, 2000)

  setTimeout(() => {
    result.innerText = "Please Restart to play Again!!"
  }, 3000)

  finishGame()
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  const userNum = document.getElementById("userInput").value
  console.log(userNum)

  if (userNum < 1 || userNum > 9) {
    result.innerText = "Please enter a number between 1 and 9";
    return;
  }

  count++;
  attempt--;
  
  p.innerText = `No of attempts remaining : ${attempt}`

  if (userNum == num) {
    if (count == 1) {
      result.innerText = `You guessed the Number correct in First attempt`
    }
    else {
      result.innerText = `You guessed the Number correct in ${count} attempts`
    }
    p.innerText = ""
    finishGame();
    return;
  }
  else if (userNum > num) {
    result.innerText = `Your number ${userNum} is Big, Guess smaller number than this`
  }
  else {
    result.innerText = `Your number ${userNum} is Small, Guess Higher number than this`
  }
  input.value = ""

  if (attempt <= 0) {
    atAttempt();
  }
})

function finishGame() {

  input.disabled = true
  button.disabled = true

  const restartBtn = document.createElement("button")
  restartBtn.textContent = "Restart"
  restartBtn.classList.add("btn")

  restartBtn.addEventListener("click", () => {
    location.reload();
  })

  box.appendChild(restartBtn)
}