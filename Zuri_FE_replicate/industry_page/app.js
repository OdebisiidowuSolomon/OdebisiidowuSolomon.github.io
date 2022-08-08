"use strict";

const sections = document.getElementsByClassName('sect7_section')

function handleClick(e) {
    const secondDiv = e.path[2].querySelectorAll('div')[1];
    const {height} = secondDiv.style
    secondDiv.style.height = height == '0px' || !height ? '20px' : '0px'
}

for (let element of sections) {
    const span = element.querySelector('span')
    span.addEventListener('click', handleClick)
}