const counter = document.querySelector("#counter")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const heart = document.querySelector("#heart")

window.setInterval(() => {
    counter.textContent = parseInt(counter.textContent,10) +1
},1000)

plus.addEventListener("click", () => {
    counter.textContent = parseInt(counter.textContent,10) +1
})

minus.addEventListener("click", () => {
    counter.textContent = parseInt(counter.textContent,10) -1
})