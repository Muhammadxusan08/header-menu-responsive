let sectionImg = document.querySelector('.section-img-2')
let headerHamburger = document.querySelector('.header-hamburger')
let sectionn = document.querySelector('.section')
let headerr = document.querySelector('.header')


sectionn.addEventListener('click' , function(){
sectionn.style.display = 'none'
})

headerHamburger.addEventListener('click' , function(){
    sectionn.style.display = 'block'
})


let section2Link = document.querySelectorAll('.section-2-link')
let sectionnh = document.querySelectorAll(".section-2-card-logotip")
section2Link.forEach(function(item , index){
item.addEventListener('click' , function(){
    section2Link.forEach(function(element){
        element.classList.remove('active')
    })
    item.classList.add("active")
    sectionnh.forEach(function(element){
        element.classList.remove('active')
    })
    sectionnh[index].classList.add('active')
})
})