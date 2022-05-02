const button = document.querySelector('button')
const h2 = document.querySelector('h2')
const exercices = ['pompes', 'tractions', 'crunch', "secondes d'ATR"]

button.addEventListener('click', event => {
    const nombre = Math.round(Math.random() * 45) + 5
    const idExexrcice = Math.round(Math.random() * (exercices.length - 1))
    h2.innerHTML = `<span>${nombre}</span> <span>${exercices[idExexrcice]}</span>`
    console.log(idExexrcice)
})