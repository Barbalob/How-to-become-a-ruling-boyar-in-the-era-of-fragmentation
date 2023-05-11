// import name from "./module.js";
import './styles/style.scss'
const buttonStart = document.querySelector('#Start') 
const leftPage = document.querySelector('.page__left')
const rightPage = document.querySelector('.page__right')
buttonStart.addEventListener('click', () => {
    leftPage.remove();
    rightPage.remove();
})