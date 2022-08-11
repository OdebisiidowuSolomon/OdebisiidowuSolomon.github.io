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

function handleActiveLinks(f,s,t) {
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
            <a href="../landing_page">Lannding Page</a>
        </div>
    </div>
`

function removeOverlay(e) {
    console.log(e.target);
    console.log(e);
    if (e.path[0].className == 'overlay') {
        this.style.display = 'none'
        document.body.removeChild(this)
    }
}


function handleShow() {
    console.log(this.id);
    const overlay = document.createElement('div');
    const card = document.createElement('div');
    overlay.classList.add('overlay')
    card.classList.add('card')

    if (this.id == 'hire-talents') {
        card.innerHTML = joinDiv
    } else {
        card.innerHTML = hireDiv
    }

    overlay.appendChild(card)
    overlay.addEventListener('click', removeOverlay.bind(overlay))
    document.body.appendChild(overlay)


}

for (let talentBtn of joinTalentBtn) {
    talentBtn.addEventListener('click', handleShow.bind(talentBtn))
}

for (let poolBtn of talentPoolBtn) {
    poolBtn.addEventListener('click', handleShow.bind(poolBtn))
}

window.addEventListener("scroll", function (e) {

    // console.log(this.window.scrollY);



    if(this.window.scrollY > 0 && this.window.scrollY < sect1.clientHeight) {
        handleActiveLinks(_home,_impact,_whyus)
    } else if (this.window.scrollY > sect1.clientHeight && this.window.scrollY < impact.clientHeight + sect1.clientHeight+sect3.clientHeight) {
        handleActiveLinks(_impact,_whyus, _home)
    } else if (this.window.scrollY > impact.clientHeight +sect3.clientHeight && this.window.scrollY < whyUs.clientHeight+impact.clientHeight + sect1.clientHeight) {
        handleActiveLinks(_whyus,_home,_impact)
    }

    console.log();

    // console.log(document.documentElement.scrollTop)
    // || document.body.scrollTop
}, false);