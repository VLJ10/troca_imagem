'use strict'

const botaoTrocarImagem = document.getElementById('trocar-img')

function trocarImg () {
    const imagem = document.getElementById('text-image').value
    document.documentElement.style.setProperty('--bg-imagem', `url(./img/${imagem}.jpg)`)
}

botaoTrocarImagem.addEventListener('click', trocarImg)






const botaoAuto = document.getElementById('auto')
const slides = document.querySelectorAll('.slide')
let index = 0
let intervalo = null

function mostrarSlide(i) {
    slides.forEach(slides => slides.classList.remove('active'))
    slides[i].classList.add('active')
  }
function iniciarLoop() {
    if (intervalo) return

    mostrarSlide(index)

    intervalo = setInterval(() => {
        index = (index + 1) % slides.length
        mostrarSlide(index)
    }, 3000)

}
botaoAuto.addEventListener('click', iniciarLoop)