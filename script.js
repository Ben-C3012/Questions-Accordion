
// UI Elemtns 
const questionHeaders = document.querySelectorAll('.question-header')
const answers = document.querySelectorAll('.answer')
const icons = document.querySelectorAll('i')
const questions = document.querySelectorAll('.question')
const para = document.querySelectorAll('.para')
const cardText = document.querySelector('.card_text')

questions[0].addEventListener('click', () => {
    answers[0].classList.toggle('active')
    icons[0].classList.toggle('active')
    para[0].classList.toggle('active')
    questionHeaders[0].classList.toggle('active')
})



questions[1].addEventListener('click', () => {
    answers[1].classList.toggle('active')
    icons[1].classList.toggle('active')
    para[1].classList.toggle('active')
    questionHeaders[1].classList.toggle('active')
})

questions[2].addEventListener('click', () => {
    answers[2].classList.toggle('active')
    icons[2].classList.toggle('active')
    para[2].classList.toggle('active')
    questionHeaders[2].classList.toggle('active')
})

questions[3].addEventListener('click', () => {
    answers[3].classList.toggle('active')
    icons[3].classList.toggle('active')
    para[3].classList.toggle('active')
    questionHeaders[3].classList.toggle('active')
})

questions[4].addEventListener('click', () => {
    answers[4].classList.toggle('active')
    icons[4].classList.toggle('active')
    para[4].classList.toggle('active')
    questionHeaders[4].classList.toggle('active')
})







