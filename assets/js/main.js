// SHOW MENU
const showMenu = (toggleId, navbarId,bodyId) =>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if(toggle && navbar){
        toggle.addEventListener('click', ()=>{
            // APARECER MENU
            navbar.classList.toggle('show')
            // ROTATE TOGGLE
            toggle.classList.toggle('rotate')
            // PADDING BODY
            bodypadding.classList.toggle('expander')
        })
    }
}
showMenu('nav-toggle','navbar','body')

// LINK ACTIVE COLOR
const linkColor = document.querySelectorAll('.nav__link');   
function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink));

const typedIndex = new Typed('.typedIndex',{
    strings: [
        'Desarrollador Web',
        'Desarrollador Móvil'
    ],
    typeSpeed: 65,
    startDelay: 300,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    //smartBackspace: true,
});

