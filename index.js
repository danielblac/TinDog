import dogs from './data.js'
import Dogs from './Dogs.js'
const nopeImg = document.getElementById('nope-image')
const likeImg = document.getElementById('like-image')
const finishedScroll = document.getElementById('finished-scroll')
const mainSection = document.getElementById('main-section')
const welcomeSection = document.getElementById('welcome-section')
const getStarted = document.getElementById('get-started')
const homeBtn = document.getElementById('home-btn')
let dog = getNextDog()

document.addEventListener('click', function(e){
    if (e.target.id === 'get-started') {
        mainSection.style.display = 'block'
        welcomeSection.style.display = 'none'
    }else if (e.target.id === 'nope-icon'){
        dontLikeDog()
    } else if (e.target.id === 'like-icon') {
        likedDog()
    } else if (e.target.id === 'home-btn') {
        document.location.reload();
    }
})

function dontLikeDog() {
    if (dogs.length > 0) {
        nopeImg.style.display = 'block'
        setTimeout(()=>{
            dog = getNextDog()
            render()
            nopeImg.style.display = 'none'
        },1500)  
    } else {
        nopeImg.style.display = 'block'
        finishedScrollMessage()
    }
}

function likedDog() {
    if (dogs.length > 0) {
        likeImg.style.display = 'block'
        setTimeout(()=>{
            dog = getNextDog()
            render()
            likeImg.style.display = 'none'
        },1500)  
    } else {
        likeImg.style.display = 'block'
        finishedScrollMessage()
    }
}

function finishedScrollMessage() {
    setTimeout(()=>{
        mainSection.style.display = 'none'
        finishedScroll.style.display = 'flex'
    },1500) 
    
}

function getNextDog() {
   const nextDog = dogs.shift()
   return nextDog ? new Dogs(nextDog) : {}
}

function render() {
    document.getElementById('image-content').innerHTML = dog.getDogHtml()
}
render()