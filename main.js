let sectionImg = document.querySelector('.section-img-2')
let headerHamburger = document.querySelector('.header-hamburger')
let sectionn = document.querySelector('.section')
let headerr = document.querySelector('.header')
let body = document.querySelector('body')


sectionn.addEventListener('click' , function(){
sectionn.style.display = 'none'

})

headerHamburger.addEventListener('click' , function(){
    sectionn.style.display = 'block'
    body.classList = 'bgsg'
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


let question = document.querySelectorAll('.question-item-down-btn')
let question2 = document.querySelectorAll('.question-item-down-text2')
let questionItemDownText = document.querySelectorAll('.question-item-down-text')


question.forEach(function(item , index){
    item.addEventListener('click' , function(){
        question.forEach(function(item , index){
            question2[index].classList.add("block")
        })
        
        questionItemDownText.forEach(function(item , index){
            item.classList.remove("color")
        })
        
        question2[index].classList.toggle("block")
        questionItemDownText[index].classList.toggle("color")
        item.classList.toggle("rotate")
        
        
    })
})






let QuestionBtn = document.querySelectorAll(".question-item")
let QuestionItemText = document.querySelectorAll(".question-item-text")
let questioniItemTitle = document.querySelectorAll('.question-item-title')
let questionItemBtn = document.querySelectorAll('.question-item-btn')

QuestionBtn.forEach(function(item , index){
    item.addEventListener('click', function(){
        QuestionItemText[index].classList.toggle('open')
        questioniItemTitle[index].classList.toggle('color')
        questionItemBtn[index].classList.toggle('rotet')
        item.classList.toggle('rotote')
    })
})