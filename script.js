const menuBtn = document.querySelector('#menuBtn')
const ul = document.querySelector('ul')
const closeBtn = document.querySelector('#close')

menuBtn.addEventListener('click', () => {
    ul.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    ul.style.display = 'none'
})