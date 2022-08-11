"use strict";

const sections = document.getElementsByClassName('sect7_section')

function handleClick(e) {
    let index = 1
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

function removeOverlay(e) {
    if (e.path[0].className == 'overlay' || e.path[0].localName == 'img') {
        this.style.display = 'none'
        document.body.removeChild(this)
    }
}


const infoDiv = `
<div class="card_sect1">
    <h2>Here is the link to the other two pages</h2>
    <div class="cancel"><img src="./img/close.svg" /></div>
</div>
<div class="card_body">
    <p>Current Page:<span style="color:red; font-size:inherit"> Industry Page</span> </p>
    <br />
    <div class="card_flex info">
    <a href="../industry_exp">Industry Experience</a>
    <a href="../landing_page">Landing Page</a>
</div>

</div>
`

function handleShow(title, body, bool = false) {

    const overlay = document.createElement('div');
    const card = document.createElement('div');
    overlay.classList.add('overlay')
    card.classList.add('card')

    if (!bool) {
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
        <div class="card_flex">
        <a href="../industry_exp">Industry Experience</a>
        <a href="../landing_page">Landing Page</a>
    </div>

    </div>
    `
    } else {
        card.innerHTML = infoDiv
    }


    overlay.appendChild(card)
    overlay.addEventListener('click', removeOverlay.bind(overlay))
    document.body.appendChild(overlay)
}

for (let span of sect8_li_spans) {
    span.addEventListener('click', handleShow.bind(null, span.dataset.title, span.dataset.body))
}

handleShow(null, null, true)