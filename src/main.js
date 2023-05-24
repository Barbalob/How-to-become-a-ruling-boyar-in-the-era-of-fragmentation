// import name from "./module.js";
import { PageFlip } from 'page-flip'
import './styles/style.scss'
const buttonStart = document.querySelector('#start')
const leftPage = document.querySelector('.menu__left')
const rightPage = document.querySelector('.menu__right')
const mainPage = document.querySelector('.menu')
const testButton = document.querySelector('#test')


buttonStart.addEventListener('click', () => {
    leftPage.remove();
    rightPage.remove();
    mainPage.innerHTML = `
    <div class="container1">
          <div class="wrapper-book">
            <div class="flip-book" id="demoBookExample">
                <div class="page cover page-cover-top page-test">
                    <div class="page-content">
                        <img class="cover_img" src="../assets/book-cover1.png">
                        <h2>BOOK TITLE</h2>
                    </div>
                </div>
                <div class="page page1">
                    <div class="page-content">
                        <h2 class="page-header">Page header 1</h2>
                        <div class="page-image" style="background-image: url(images/html/1.jpg)"></div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.</div>
                        <div class="page-footer">2</div>
                    </div>
                </div>
                <div class="page page2">
                    <div class="page-content ">
                        <h2 class="page-header">Page header - 15</h2>
                        <div class="page-image" style="background-image: url(images/html/7.jpg)"></div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.</div>
                        <div class="page-footer">16</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
`

const pageFlip = new PageFlip(
    document.getElementById("demoBookExample"),
    {
        width: 550, // base page width
        height: 803, // base page height

            size: "stretch",
            // set threshold values:
            minWidth: 315,
            maxWidth: 1000,
            minHeight: 800,
            maxHeight: 1350,
            drawShadow: false,
            showCover: false,
            usePortrait: false,
            mobileScrollSupport: false // disable content scrolling on mobile devices
        }
    );
    // load pages
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));
})

<<<<<<< HEAD
// load pages
// pageFlip.loadFromHTML(document.querySelectorAll(".page"));



// document.querySelector(".page-total").innerText = pageFlip.getPageCount();
// document.querySelector(
//     ".page-orientation"
// ).innerText = pageFlip.getOrientation();

// document.querySelector(".btn-prev").addEventListener("click", () => {
//     pageFlip.flipPrev(); // Turn to the previous page (with animation)
// });

// document.querySelector(".btn-next").addEventListener("click", () => {
//     pageFlip.flipNext(); // Turn to the next page (with animation)
// });

// // triggered by page turning
// pageFlip.on("flip", (e) => {
//     document.querySelector(".page-current").innerText = e.data + 1;
// });

// // triggered when the state of the book changes
// pageFlip.on("changeState", (e) => {
//     document.querySelector(".page-state").innerText = e.data;
// });

// // triggered when page orientation changes
// pageFlip.on("changeOrientation", (e) => {
//     document.querySelector(".page-orientation").innerText = e.data;
// });
})
=======
>>>>>>> 945b7f11fc28da660072887d8d2191d2e29a0b9f
