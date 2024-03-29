"use strict";

const joinTalentBtn = document.querySelectorAll('#hire-talents')
const talentPoolBtn = document.querySelectorAll('#join-pool')

// Checkpoints

const sect1 = document.querySelector('.sect1')
const sect3 = document.querySelector('.sect3')
const impact = document.querySelector('#impact')
const whyUs = document.querySelector('#why-us')

const _home = document.querySelector('#_home')
const _impact = document.querySelector('#_impact')
const _whyus = document.querySelector('#_whyus')

function handleActiveLinks(f, s, t) {
    f.classList.add('active')
    s.classList.remove('active')
    t.classList.remove('active')
}

const joinDiv = `
    <div class="joinDiv">
        <h2>Join Talent Pool</h2>
        <p>Interested in joining our Talent Pool?</p>
        <button>Click here to sign up</button>
        <div class="card_flex">
            <a href="../industry_page">Industry Page</a>
            <a href="../landing_page">Landing Page</a>
        </div>
    </div>
`

const hireDiv = `
    <div class="hireDiv">
        <h2>Talent Recuritment</h2>
        <p>We will love to discuss your business and your talent needs.</p>
        <button>Fill this form</button>
        <p>OR</p>
        <button>Book a Consultation</button>
        <div class="card_flex">
            <a href="../industry_page">Industry Page</a>
            <a href="../landing_page">Landing Page</a>
        </div>
    </div>
`

function removeOverlay(e) {
    if (e.path[0].className == 'overlay' || e.target.localName == 'img') {
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
    <p>Current Page:<span style="color:red; font-size:inherit"> Industry Experience</span> </p>
    <br />
    <div class="card_flex info">
    <a href="../industry_page">Industry Page</a>
    <a href="../landing_page">Landing Page</a>
</div>

</div>
`

function handleShow(bool = false) {
    const overlay = document.createElement('div');
    const card = document.createElement('div');
    overlay.classList.add('overlay')
    card.classList.add('card')


    if (!bool) {

        if (this.id == 'hire-talents') {
            card.innerHTML = joinDiv
        } else {
            card.innerHTML = hireDiv
        }
    } else {
        card.innerHTML = infoDiv
    }

    overlay.appendChild(card)
    overlay.addEventListener('click', removeOverlay.bind(overlay))
    document.body.appendChild(overlay)


}

for (let talentBtn of joinTalentBtn) {
    talentBtn.addEventListener('click', handleShow.bind(talentBtn, false))
}

for (let poolBtn of talentPoolBtn) {
    poolBtn.addEventListener('click', handleShow.bind(poolBtn, false))
}

window.addEventListener("scroll", function (e) {




    if (this.window.scrollY > 0 && this.window.scrollY < sect1.clientHeight) {
        handleActiveLinks(_home, _impact, _whyus)
    } else if (this.window.scrollY > sect1.clientHeight && this.window.scrollY < impact.clientHeight + sect1.clientHeight + sect3.clientHeight) {
        handleActiveLinks(_impact, _whyus, _home)
    } else if (this.window.scrollY > impact.clientHeight + sect3.clientHeight && this.window.scrollY < whyUs.clientHeight + impact.clientHeight + sect1.clientHeight) {
        handleActiveLinks(_whyus, _home, _impact)
    }

}, false);


handleShow(true)