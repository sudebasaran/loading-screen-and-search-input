
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const search = document.querySelector('.search')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

let load = 0

let int = setInterval(bluring, 30)




btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

function bluring() {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`




}


function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}