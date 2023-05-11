// import name from "./module.js";
import './styles/style.scss'
const buttonStart = document.querySelector('#start') 
const leftPage = document.querySelector('.page__left')
const rightPage = document.querySelector('.page__right')
const mainPage = document.querySelector('.page')
buttonStart.addEventListener('click', () => {
    leftPage.remove();
    rightPage.remove();
    mainPage.innerHTML = `
    <div class="real_book">
    <div class="book_page">
        test
    </div>
    <div class="book_page">

    </div>
    <div class="book_page">

    </div>
    <div class="book_page">

    </div>
    </div>
`
})

