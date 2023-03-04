const next = document.querySelectorAll('.next')
const prev = document.querySelectorAll('.prev')
const imageContainer = document.querySelectorAll('.imageContainer')

placeButtons()
window.addEventListener('resize', ()=>{
    placeButtons()
})
function placeButtons(){
    let containerHeight = imageContainer[0].clientHeight
    next.forEach(next =>{
        next.style.top =(containerHeight / 2 - 15 ) + 'px'
    })
    prev.forEach(prev =>{
        prev.style.top =(containerHeight / 2 - 15 ) + 'px'
    })
}

next.forEach(next => {
    next.addEventListener('click' , ()=>{
        let container = next.parentElement
        let slide = container.querySelector('.imageSlide')
        let images = container.querySelectorAll('img')
        let span = container.querySelector('span')
        let counter = span.textContent
        let imgWidth = images[0].clientWidth
        
        if (counter >= images.length - 1) return
        counter++
        span.textContent = counter
        slide.style.transform = `translateX(-${counter * imgWidth}px`
    }) 
})
prev.forEach(prev => {
    prev.addEventListener('click' , ()=>{
        let container = prev.parentElement
        let slide = container.querySelector('.imageSlide')
        let images = container.querySelectorAll('img')
        let span = container.querySelector('span')
        let counter = span.textContent

        let imgWidth = images[0].clientWidth
        
        if (counter <= 0) return
        counter--
        span.textContent = counter
        slide.style.transform = `translateX(-${counter * imgWidth}px`
    }) 
})
