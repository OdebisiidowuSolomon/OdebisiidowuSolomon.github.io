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
    const {height} = secondDiv.style
    secondDiv.style.height = height == '0px' || !height ? `${p.clientHeight}px` : '0px'
}

for (let element of sections) {
    element.querySelector('.sect7_section1').addEventListener('click', handleClick,true)
}