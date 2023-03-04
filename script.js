///////////////////////////////////////////header funcs
// navbar display 
const burger = document.querySelector('.burgerMenu')
const nav = document.querySelector('.nav')
//    give initial class
if(window.innerWidth > 576){
    nav.classList.add("showNav")
}else{
    nav.classList.add('hideNav')
}
//    window resize listeners
window.addEventListener('resize' , ()=>{
    if(window.innerWidth > 576){
        window.addEventListener('resize', navFunction)
    }
})
window.addEventListener('resize' , ()=>{
    if(window.innerWidth <= 576){
        window.addEventListener('resize', navFunc)
    }
})
//    hiding and showing functions
function navFunction(){
    if(window.innerWidth <= 576){
        nav.classList.add('hideNav')
        nav.classList.remove('showNav')
        window.removeEventListener('resize', navFunction)
    }
}
function navFunc(){
    if(window.innerWidth > 576){
        nav.classList.add('showNav')
        nav.classList.remove('hideNav')
        window.removeEventListener('resize', navFunc)
        removeClickListeners()
    }
}
//    burger button functionality
burger.addEventListener('click' , ()=>{
    if(nav.classList.contains('showNav')){
        nav.classList.remove('showNav')
        nav.classList.add('hideNav')
    }else{
        nav.classList.add('showNav')
        nav.classList.remove('hideNav')
        addClickListeners()
    }
})
//    hide nav on click
const hero = document.getElementById('hero')
const services = document.getElementById('services')
const portfolio = document.getElementById('portfolio')
const about = document.getElementById('about')
const contact = document.getElementById('contact')
const navLinks = document.querySelectorAll('.navLink')
const allSections = [hero, services, portfolio, about , contact, ...navLinks]
function addClickListeners(){
    allSections.forEach((section)=>{
        section.addEventListener('click' , hideNav)
    })
}
function removeClickListeners(){
    allSections.forEach((section)=>{
        section.removeEventListener('click' , hideNav)
    })
}
function hideNav(){
    console.log('active')
    nav.classList.remove('showNav')
    nav.classList.add('hideNav')
}

///////////////////////////////////////////services funcs
// service card flipping
const hoverSection = document.querySelectorAll('.hoverSection')
const frontIcon = document.querySelectorAll('.frontCard .flipIcon')
const backIcon = document.querySelectorAll('.backCard .flipIcon')
const unlocked = document.querySelectorAll('.backCard .unlocked')
const backOrder = document.querySelectorAll('.backCard a')
hoverSection.forEach((section)=> {
    section.addEventListener('mouseenter' , ()=>{
        let card = section.parentElement
        card.classList.add('flipped')
    })
})
hoverSection.forEach((section)=> {
    section.addEventListener('mouseleave' , ()=>{
        let card = section.parentElement
        let backIcon = section.parentElement.querySelector('.backCard .flipIcon')
        if(backIcon.classList.contains('unlocked')){
            card.classList.remove('flipped')
        }else return
    })
})
frontIcon.forEach((icon)=> {
    let backIcon = icon.parentElement.parentElement.querySelector('.backCard .flipIcon')
    icon.addEventListener('click' , ()=>{
        let card = icon.parentElement.parentElement
        card.classList.add('flipped')
        backIcon.classList.remove('unlocked')
    })
})
backIcon.forEach((icon)=> {
    icon.addEventListener('mouseenter', ()=>{
        let card = icon.parentElement.parentElement
        card.classList.add('flipped')
    })
})
backIcon.forEach((icon)=> {
    icon.addEventListener('mouseleave' , ()=>{
        let card = icon.parentElement.parentElement
        if(icon.classList.contains('unlocked')){
            card.classList.remove('flipped')
        }else return
    })
})
backIcon.forEach((icon)=> {
    icon.addEventListener('click' , ()=>{
        if(icon.classList.contains('unlocked')){
            icon.classList.remove('unlocked')
        }else{
            icon.classList.add('unlocked')
        }
    })
})
backOrder.forEach((order)=> {
    order.addEventListener('mouseenter', ()=>{
        let card = order.parentElement.parentElement
        card.classList.add('flipped')
    })
})
backOrder.forEach((order)=> {
    order.addEventListener('mouseleave' , ()=>{
        let card = order.parentElement.parentElement
        let backIcon = order.parentElement.querySelector('.flipIcon')
        if(backIcon.classList.contains('unlocked')){
            card.classList.remove('flipped')
        }else return
    })
})
//order button functionality
//1
const orderLabelOne = document.querySelectorAll('.orderLabelOne')
const checkOne = document.getElementById('check1')
orderLabelOne.forEach((label)=>{
    label.addEventListener('mouseenter' , ()=>{
        if(checkOne.checked){
            label.removeAttribute('for')
        }else{
            label.setAttribute('for' , 'check1')
        }
    })
})
//2
const orderLabelTwo = document.querySelectorAll('.orderLabelTwo')
const checkTwo = document.getElementById('check2')
orderLabelTwo.forEach((label)=>{
    label.addEventListener('mouseenter' , ()=>{
        if(checkTwo.checked){
            label.removeAttribute('for')
        }else{
            label.setAttribute('for' , 'check2')
        }
    })
})
//3
const orderLabelThree = document.querySelectorAll('.orderLabelThree')
const checkThree = document.getElementById('check3')
orderLabelThree.forEach((label)=>{
    label.addEventListener('mouseenter' , ()=>{
        if(checkThree.checked){
            label.removeAttribute('for')
        }else{
            label.setAttribute('for' , 'check3')
        }
    })
})
//4
const orderLabelFour = document.querySelectorAll('.orderLabelFour')
const checkFour = document.getElementById('check4')
orderLabelFour.forEach((label)=>{
    label.addEventListener('mouseenter' , ()=>{
        if(checkFour.checked){
            label.removeAttribute('for')
        }else{
            label.setAttribute('for' , 'check4')
        }
    })
})
//5
const orderLabelFive = document.querySelectorAll('.orderLabelFive')
const checkFive = document.getElementById('check5')
orderLabelFive.forEach((label)=>{
    label.addEventListener('mouseenter' , ()=>{
        if(checkFive.checked){
            label.removeAttribute('for')
        }else{
            label.setAttribute('for' , 'check5')
        }
    })
})
//6
const orderLabelSix = document.querySelectorAll('.orderLabelSix')
const checkSix = document.getElementById('check6')
orderLabelSix.forEach((label)=>{
    label.addEventListener('mouseenter' , ()=>{
        if(checkSix.checked){
            label.removeAttribute('for')
        }else{
            label.setAttribute('for' , 'check6')
        }
    })
})

///////////////////////////////////////////about funcs
// about read more button
const aboutBtn = document.querySelector('.aboutBtn')
const extraText = document.querySelector('.extraText')
aboutBtn.addEventListener('click', ()=>{
    if(aboutBtn.textContent == 'Read More'){
        aboutBtn.textContent = 'Show Less'
        extraText.textContent = '. Our values include delivering high-quality work, always stiving for excellence, and treating our clients, team, and community with respect and integrity. We are committed to staying at the forefront of technology and design trends to bring cutting-edge solutions to our clients.'
    }else{
        aboutBtn.textContent = 'Read More'
        extraText.textContent = '...'
    }
})

///////////////////////////////////////////contact funcs
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "lb",
    preferredCountries: ["lb"],
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
const info = document.querySelector(".alert-info");
function process(event) {
    event.preventDefault();
    const phoneNumber = phoneInput.getNumber();
    info.style.display = "";
    info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
}

///////////////////////////////////////////full doc funcs
// theme selector
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
if(isDark){
    document.body.classList.add('darkTheme')
}else{
    document.body.classList.add('lightTheme')
}
window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change',({ matches }) => {
  if (matches) {
    document.body.classList.remove('lightTheme')
    document.body.classList.add('darkTheme')
  } else {
    document.body.classList.add('lightTheme')
    document.body.classList.remove('darkTheme')
  }
})
const themeButton = document.querySelector('.themeButton')
themeButton.addEventListener('click',()=>{
    if(document.body.classList.contains('lightTheme')){
        document.body.classList.remove('lightTheme')
        document.body.classList.add('darkTheme')
    }else{
        document.body.classList.remove('darkTheme')
        document.body.classList.add('lightTheme')
    }
})
// scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))
// nav items focus 
const heroLink = document.getElementById('heroLink')
const serviceLink = document.getElementById('serviceLink')
const portLink = document.getElementById('portLink')
const aboutLink = document.getElementById('aboutLink')
const contactLink = document.getElementById('contactLink')
function linkFocusOnScroll(){
    let vertCenter = window.innerHeight / 2

    let heroRect = hero.getBoundingClientRect()
    if(heroRect.top <= vertCenter &&
        heroRect.top > window.innerHeight / 2 - hero.clientHeight ){
        heroLink.classList.add('focus')
    }else{
        heroLink.classList.remove('focus')
    }
    
    let serviceRect = services.getBoundingClientRect()
    if(serviceRect.top <= vertCenter &&
        serviceRect.top > window.innerHeight / 2 - services.clientHeight ){
        serviceLink.classList.add('focus')
    }else{
        serviceLink.classList.remove('focus')
    }

    let portRect = portfolio.getBoundingClientRect()
    if(portRect.top <= vertCenter &&
        portRect.top > window.innerHeight / 2 - portfolio.clientHeight ){
        portLink.classList.add('focus')
    }else{
        portLink.classList.remove('focus')
    }

    let aboutRect = about.getBoundingClientRect()
    if(aboutRect.top <= vertCenter &&
        aboutRect.top > window.innerHeight / 2 - about.clientHeight ){
        aboutLink.classList.add('focus')
    }else{
        aboutLink.classList.remove('focus')
    }

    let contactRect = contact.getBoundingClientRect()
    if(contactRect.top <= vertCenter &&
        contactRect.top > window.innerHeight / 2 - contact.clientHeight ){
        contactLink.classList.add('focus')
    }else{
        contactLink.classList.remove('focus')
    }
}
window.addEventListener('scroll' , linkFocusOnScroll)
linkFocusOnScroll()


