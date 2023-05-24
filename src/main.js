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
                    </div>
                </div>
                <div class="page page2">
                    <div class="page-content ">
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
        showCover: true,
        usePortrait: false,
        mobileScrollSupport: false,
        useMouseEvents: false // disable content scrolling on mobile devices
    }
);
pageFlip.loadFromHTML(document.querySelectorAll(".page"));
setTimeout(() => {  pageFlip.flipNext(); }, 10);
setTimeout(() => {
    pageFlip.destroy();
    const container = document.querySelector('.container1');
    container.remove();
    mainPage.innerHTML = `
    <div class="container">
          <div class="wrapper-book">
            <div class="flip-book" id="demoBookExample">
                <div class="page page-cover page-cover-top page-test">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                        <img src="assets/letter/letterU.svg" alt="Буква И" class='img-letter'>
                        <div class='text'> 
                            стория средних веков менее
                            всего может назваться скучною.
                            Нигде нет такой пестроты, такого живого действия,
                            таких резких противоположностей, такой странной яркости, как в ней:
                            ее можно сравнить с огромным строением, в фундаменте которого улегся свежий,
                            крепкий, как вечность, гранит, а толстые стены выведены из различного, старого и нового материала,
                            так что на одном кирпиче видны готфские руны, на другом блестит римская позолота; арабская резьба,
                            греческий карниз, готическое окно, – все слепилось в нем и составило самую пеструю башню”
                        </div>
                        </div>
                        <div class='main-text'>(Н. В. Гоголь, “О средних веках”)</div>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </div>
                <div class="page page-test2">
                    <div class="page-content">
                        <h2 class="page-header">Page header 1</h2>
                        <div class="page-image" style="background-image: url(images/html/1.jpg)"></div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.</div>
                        <div class="page-footer">2</div>
                    </div>
                </div>
                <div class="page page-test2">
                    <div class="page-content ">
                        <h2 class="page-header">Page header - 15</h2>
                        <div class="page-image" style="background-image: url(images/html/7.jpg)"></div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.</div>
                        <div class="page-footer">16</div>
                    </div>
                </div>
                <div class="page page-test2">
                    <div class="page-content">
                        <h2 class="page-header">Page header - 16</h2>
                        <div class="page-image" style="background-image: url(images/html/8.jpg)"></div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.</div>
                        <div class="page-footer">17</div>
                    </div>
                </div>
                <div class="page page-cover page-cover-bottom" data-density="soft">
                    <div class="page-content">
                        <h2>THE END</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
const Book = new PageFlip(
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
Book.loadFromHTML(document.querySelectorAll(".page"));
}, 1100);
testButton.addEventListener('click', () =>{
    const tempDiv = document.createElement("div");
    tempDiv.className = "page";
    tempDiv.innerHTML=`
    <div class="page-content">
        <h2 class="page-header">Page header 1</h2>
        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.</div>
        <div class="page-footer">2</div>
    </div>
`
    if (document.querySelector('.stf__block') != null){
        document.querySelector('.stf__block').insertAdjacentElement("beforeend", tempDiv);
    }
    else{
        console.log('no');
    }
    Book.updateFromHtml(document.querySelectorAll(".page"));

});

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
});
