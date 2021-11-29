const nein = document.querySelector('.nein')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

nein.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createstopp(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createstopp = (e) => {
    const stopp = document.createElement('i')
    stopp.classList.add('fas')
    stopp.classList.add('fa-stop-circle')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    Nein.appendChild(stopp)

    times.innerHTML = ++timesClicked

    setTimeout(() => stopp.remove(), 1000)
}
