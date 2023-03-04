const navContainer = document.querySelector('.navContainer')
const menusContainer = document.querySelector('.menusContainer')
const pizzaMenu = document.querySelector('.pizzaMenu')
const pastaMenu = document.querySelector('.pastaMenu')
const sideMenu = document.querySelector('.sideMenu')
const saladMenu = document.querySelector('.saladMenu')
const drinkMenu = document.querySelector('.drinkMenu')
const dessertMenu = document.querySelector('.dessertMenu')
const pizza = document.querySelector('.pizza')
const pasta = document.querySelector('.pasta')
const side = document.querySelector('.side')
const salad = document.querySelector('.salad')
const drink = document.querySelector('.drink')
const dessert = document.querySelector('.dessert')
const pizzaButton = document.querySelector('.pizzaMenu .button')
const pastaButton = document.querySelector('.pastaMenu .button')
const sideButton = document.querySelector('.sideMenu .button')
const saladButton = document.querySelector('.saladMenu .button')
const drinkButton = document.querySelector('.drinkMenu .button')
const dessertButton = document.querySelector('.dessertMenu .button')
// pizza.addEventListener('click' , ()=>{
//     document.body.style.overflow = 'unset'
//     navContainer.style.transform = 'translateX(-100%)'
//     pizzaMenu.style.transform = 'scale(1)'
//     pizzaMenu.style.transition = 'transform 500ms ease'
//     navContainer.style.transition = 'transform 500ms ease'
//     pizzaButton.addEventListener('click' , ()=>{
//         navContainer.style.transform = 'none'
//         pizzaMenu.style.transform = 'translateX(100%)'
//         window.addEventListener('transitionend' , overflowHidden)
//     })
        
// })
// function overflowHidden(){
//     document.body.style.overflow = 'hidden'
//     window.removeEventListener('transitionend' , overflowHidden)
// }
// pasta.addEventListener('click' , ()=>{
//     document.body.style.overflow = 'unset'
//     navContainer.style.transform = 'translateX(-100%)'
//     pastaMenu.style.transform = 'scale(1)'
//     pastaMenu.style.transition = 'transform 500ms ease'
//     navContainer.style.transition = 'transform 500ms ease'
//     pastaButton.addEventListener('click' , ()=>{
//         navContainer.style.transform = 'none'
//         pastaMenu.style.transform = 'translateX(100%)'
//         window.addEventListener('transitionend' , overflowHidden)
//     })
        
// })
// side.addEventListener('click' , ()=>{
//     document.body.style.overflow = 'unset'
//     navContainer.style.transform = 'translateX(-100%)'
//     sideMenu.style.transform = 'scale(1)'
//     sideMenu.style.transition = 'transform 500ms ease'
//     navContainer.style.transition = 'transform 500ms ease'
//     sideButton.addEventListener('click' , ()=>{
//         navContainer.style.transform = 'none'
//         sideMenu.style.transform = 'translateX(100%)'
//         window.addEventListener('transitionend' , overflowHidden)
//     })
        
// })
// salad.addEventListener('click' , ()=>{
//     document.body.style.overflow = 'unset'
//     navContainer.style.transform = 'translateX(-100%)'
//     saladMenu.style.transform = 'scale(1)'
//     saladMenu.style.transition = 'transform 500ms ease'
//     navContainer.style.transition = 'transform 500ms ease'
//     saladButton.addEventListener('click' , ()=>{
//         navContainer.style.transform = 'none'
//         saladMenu.style.transform = 'translateX(100%)'
//         window.addEventListener('transitionend' , overflowHidden)
//     })
        
// })
// drink.addEventListener('click' , ()=>{
//     document.body.style.overflow = 'unset'
//     navContainer.style.transform = 'translateX(-100%)'
//     drinkMenu.style.transform = 'scale(1)'
//     drinkMenu.style.transition = 'transform 500ms ease'
//     navContainer.style.transition = 'transform 500ms ease'
//     drinkButton.addEventListener('click' , ()=>{
//         navContainer.style.transform = 'none'
//         drinkMenu.style.transform = 'translateX(100%)'
//         window.addEventListener('transitionend' , overflowHidden)
//     })
        
// })
// dessert.addEventListener('click' , ()=>{
//     // document.body.style.overflow = 'unset'
//     navContainer.style.transform = 'translateX(-100%)'
//     dessertMenu.style.transform = 'scale(1)'
//     dessertMenu.style.transition = 'transform 500ms ease'
//     navContainer.style.transition = 'transform 500ms ease'
//     dessertButton.addEventListener('click' , ()=>{
//         navContainer.style.transform = 'none'
//         dessertMenu.style.transform = 'translateX(100%)'
//         window.addEventListener('transitionend' , overflowHidden)
//     })
        
// })

// pasta.addEventListener('click' , ()=>{
//     navContainer.style.transform = 'translateX(-100%)'
//     pastaMenu.style.transform = 'scale(1)'
//     pastaMenu.style.transition = 'transform 500ms ease'
    
//     pastaMenu.addEventListener('click' , () => {
//         navContainer.style.transform = 'none'
//         pastaMenu.style.transform = 'scaleX(0)'
//     })
// })
// side.addEventListener('click' , ()=>{
//     navContainer.style.transform = 'translateX(-100%)'
//     sideMenu.style.transform = 'scale(1)'
//     sideMenu.style.transition = 'transform 500ms ease'
    
//     sideMenu.addEventListener('click' , () => {
//         navContainer.style.transform = 'none'
//         sideMenu.style.transform = 'scaleX(0)'
//     })
// })
// salad.addEventListener('click' , ()=>{
//     navContainer.style.transform = 'translateX(-100%)'
//     saladMenu.style.transform = 'scale(1)'
//     saladMenu.style.transition = 'transform 500ms ease'
    
//     saladMenu.addEventListener('click' , () => {
//         navContainer.style.transform = 'none'
//         saladMenu.style.transform = 'scaleX(0)'
//     })
// })
// drink.addEventListener('click' , ()=>{
//     navContainer.style.transform = 'translateX(-100%)'
//     drinkMenu.style.transform = 'scale(1)'
//     drinkMenu.style.transition = 'transform 500ms ease'
    
//     drinkMenu.addEventListener('click' , () => {
//         navContainer.style.transform = 'none'
//         drinkMenu.style.transform = 'scaleX(0)'
//     })
// })
// dessert.addEventListener('click' , ()=>{
//     navContainer.style.transform = 'translateX(-100%)'
//     dessertMenu.style.transform = 'scale(1)'
//     dessertMenu.style.transition = 'transform 500ms ease'
    
//     dessertMenu.addEventListener('click' , () => {
//         navContainer.style.transform = 'none'
//         dessertMenu.style.transform = 'scaleX(0)'
//     })
// })
pizza.addEventListener('click' , () => {
    pizzaMenu.style.display = 'flex'
    menusContainer.style.height = `${pizzaMenu.clientHeight}px`
    window.addEventListener('resize' , ()=>{
        menusContainer.style.height = `${pizzaMenu.clientHeight}px`
    })
    // window.addEventListener('resize' , adjustHeight(pizzaMenu))
    menusContainer.style.transform = 'none'
    navContainer.style.transform = 'translateX(-100%)'
    console.log(pizzaButton)
    pizzaButton.addEventListener('click', ()=>{
        setTimeout(() => {
            menusContainer.style.transform = "translateX(100%)"
            navContainer.style.transform = 'none'
            setTimeout(()=>{
                pizzaMenu.style.display = 'none'
                menusContainer.style.height = '0'
            }, 500)
        }, 1 );
        
    })
})
function adjustHeight(menu){
    menusContainer.style.height = `${menu.clientHeight}px`
}
pasta.addEventListener('click' , () => {
    pastaMenu.style.display = 'flex'
    menusContainer.style.height = `${pastaMenu.clientHeight}px`
    menusContainer.style.transform = 'none'
    navContainer.style.transform = 'translateX(-100%)'
    console.log(pastaButton)
    pastaButton.addEventListener('click', ()=>{
        setTimeout(() => {
            menusContainer.style.transform = "translateX(100%)"
            navContainer.style.transform = 'none'
            setTimeout(()=>{
                pastaMenu.style.display = 'none'
                menusContainer.style.height = '0'
            }, 500)
        }, 1 );
        
    })
})
side.addEventListener('click' , () => {
    sideMenu.style.display = 'flex'
    menusContainer.style.height = `${sideMenu.clientHeight}px`
    menusContainer.style.transform = 'none'
    navContainer.style.transform = 'translateX(-100%)'
    console.log(sideButton)
    sideButton.addEventListener('click', ()=>{
        setTimeout(() => {
            menusContainer.style.transform = "translateX(100%)"
            navContainer.style.transform = 'none'
            setTimeout(()=>{
                sideMenu.style.display = 'none'
                menusContainer.style.height = '0'
            }, 500)
        }, 1 );
        
    })
})
salad.addEventListener('click' , () => {
    saladMenu.style.display = 'flex'
    menusContainer.style.height = `${saladMenu.clientHeight}px`
    menusContainer.style.transform = 'none'
    navContainer.style.transform = 'translateX(-100%)'
    console.log(saladButton)
    saladButton.addEventListener('click', ()=>{
        setTimeout(() => {
            menusContainer.style.transform = "translateX(100%)"
            navContainer.style.transform = 'none'
            setTimeout(()=>{
                saladMenu.style.display = 'none'
                menusContainer.style.height = '0'
            }, 500)
        }, 1 );
        
    })
})
drink.addEventListener('click' , () => {
    drinkMenu.style.display = 'flex'
    menusContainer.style.height = `${drinkMenu.clientHeight}px`
    menusContainer.style.transform = 'none'
    navContainer.style.transform = 'translateX(-100%)'
    console.log(drinkButton)
    drinkButton.addEventListener('click', ()=>{
        setTimeout(() => {
            menusContainer.style.transform = "translateX(100%)"
            navContainer.style.transform = 'none'
            setTimeout(()=>{
                drinkMenu.style.display = 'none'
                menusContainer.style.height = '0'
            }, 500)
        }, 1 );
        
    })
})
dessert.addEventListener('click' , () => {
    dessertMenu.style.display = 'flex'
    menusContainer.style.height = `${dessertMenu.clientHeight}px`
    menusContainer.style.transform = 'none'
    navContainer.style.transform = 'translateX(-100%)'
    console.log(dessertButton)
    dessertButton.addEventListener('click', ()=>{
        setTimeout(() => {
            menusContainer.style.transform = "translateX(100%)"
            navContainer.style.transform = 'none'
            setTimeout(()=>{
                dessertMenu.style.display = 'none'
                menusContainer.style.height = '0'
            }, 500)
        }, 1 );
        
    })
})
