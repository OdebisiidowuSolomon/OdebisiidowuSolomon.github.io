"use strict";

const sections = document.getElementsByClassName('sect7_section')

function handleClick(e) {
    let index = 1
    console.log(e.path)
    if (e.path[0].localName != 'div') {
        index = 2
    }
    const secondDiv = e.path[index].querySelectorAll('div')[1];
    const p = secondDiv.querySelector('p')
    console.log(p.clientHeight);
    const { height } = secondDiv.style
    secondDiv.style.height = height == '0px' || !height ? `${p.clientHeight}px` : '0px'
}

for (let element of sections) {
    element.querySelector('.sect7_section1').addEventListener('click', handleClick)
}


const sect8_li_spans = document.querySelectorAll('.sect8_left ul li span')

function removeOverlay(...e) {
    if (this) {
        this.style.display = 'none'
        document.body.removeChild(this)
    }
}

function handleShow(title, body) {
    const overlay = document.createElement('div');
    const card = document.createElement('div');
    overlay.classList.add('overlay')
    card.classList.add('card')
    card.innerHTML = `
    <div class="card_sect1">
        <h2>${title}</h2>
        <div class="cancel"><img src="./img/close.svg" /></div>
    </div>
    <br />
    <div class="card_body">
        <p>What do we mean by this?</p>
        <br />
        <p>${body}</p>
    </div>
    `
    overlay.appendChild(card)
    overlay.addEventListener('click', removeOverlay.bind(overlay))
    document.body.appendChild(overlay,)
}

for (let span of sect8_li_spans) {
    span.addEventListener('click', handleShow.bind(null, span.dataset.title, span.dataset.body))
}