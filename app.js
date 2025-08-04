'use strict'

const botaoTrocarImagem = document.getElementById('trocar-img')

function trocarImg () {
    const imagem = document.getElementById('text-image').value
    document.documentElement.style.setProperty('--bg-imagem', `url(./img/${imagem}.jpg)`)
}

botaoTrocarImagem.addEventListener('click', trocarImg)