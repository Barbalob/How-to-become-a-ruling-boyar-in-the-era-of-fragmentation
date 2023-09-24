// import name from "./module.js";
import { PageFlip } from 'page-flip'
import './styles/style.scss'
import { RenderPosition, createElement, render, renderHTML } from './render.js'
import {pages} from './pages.js'
import { dictionary } from './dictionary'
import { aboutUs } from './aboutUs'
import {SaveTr, GetTr} from './save'
import { printPoints } from './withdrawalPoints'
import {trophiesBook }from './trophies'


const buttonStart = document.querySelector('#start')
const mobStart = document.querySelector('#start-mobile')
const leftPage = document.querySelector('#btns')
const rightPage = document.querySelector('.menu__right')
const mainPage = document.querySelector('.menu')
const end_screen = document.querySelector('.end_screen')
const menuTrophyBtn = document.querySelector('#trophies')
const mobTrophy = document.querySelector('#trophies-mobile')
let trophiesPages = trophiesBook()
let stage = 0;
let points = 0;
let trophies = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let mobileFlag = false;
let winW = $(window).width();
let winH = $(window).height();

let savedTr = GetTr();
if(savedTr){
    trophies = savedTr.split('');
}

if(winH > winW){
    mobileFlag = true
}


buttonStart.addEventListener('click', () => {
    OpenBook(true)
});
menuTrophyBtn.addEventListener('click', () => {
    OpenBook(false)
});
mobStart.addEventListener('click', () => {
    mobileFlag = true
    OpenBook(true)
    $('body').css({'overflow':'hidden'});
});
mobTrophy.addEventListener('click', () => {
    trophiesPages = trophiesPages.replaceAll(' <li class="page trophy_class">','<li class="page"></li><li class="page trophy_class">');
    mobileFlag = true
    OpenBook(false)
    $('body').css({'overflow':'hidden'});
});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function tooltipCreate(){
    if(!mobileFlag){
        $("[data-tooltip]").mousemove(function (eventObject) {
            $('body').css({'overflow':'hidden'});
            let data_tooltip = $(this).attr("data-tooltip");
            $("#tooltip").html(data_tooltip)
                .css({ 
                "top" : eventObject.pageY - 50,
                "left" : eventObject.pageX + 5
                })
                .show();
            }).mouseout(function () {
                $('body').css({'overflow':'visible'});
            $("#tooltip").hide()
                .html("")
                .css({
                    "top" : 0,
                    "left" : 0
                });
        });
    }
};

function ChoiceCreate(Book, evt, dictBtn, trophyBtn, gameStarted){
        dictBtn.disabled = true;
        trophyBtn.disabled = true;
        
        let container = document.querySelector('.container');
        if(!mobileFlag){
        container.style.transform = `translate(-50vw,0)`;  
        }
        else{
            $(".arrow-left").hide()
            $(".arrow-right").hide()
        }
        const testElement = createElement(`
    <ul class='list-answer'>
        ${pages[stage]["btn-1"]}
        ${pages[stage]["btn-2"]}
        ${pages[stage]["btn-3"]}
    </ul>
    `)
        mainPage.insertAdjacentElement(RenderPosition.BEFOREEND, testElement);
        tooltipCreate();
        evt.target.parentNode.parentNode.disabled = true;
        // evt.target.parentNode.parentNode.id = "disabled"
        let target = document.querySelector('#choice')
        target.disabled = true
        target.id = "disabled"
        sleep(1200).then(() => {
            const buttonChoice1 = document.querySelector('#choice-1')
            const buttonChoice2 = document.querySelector('#choice-2')
            const buttonChoice3 = document.querySelector('#choice-3')

            const F = (evt) => {
                adaptiveSideElements(Book,gameStarted)
                dictBtn.disabled = false;
                trophyBtn.disabled = false;
                if(mobileFlag){
                    $(".arrow-left").show()
                    $(".arrow-right").show()
                }
                if(evt.target.id == "chosen"){
                    return
                }
                const id = evt.target.id.slice(-1)
                points += Number($(evt.target).attr("value"));
                console.log(points)
                let trophy = $(evt.target).attr("trophy");
                if(trophy){
                    if(trophy.length > 2){
                        trophy = trophy.split(',');
                        trophies[Number(trophy[0])] = "1";
                        trophies[Number(trophy[1])] = "1";
                    }
                    else{
                        trophies[Number(trophy)] = "1";
                    }
                    SaveTr(trophies.join(''));
                }
                evt.target.id ="chosen"
                for (let i = 1; i < 4; i++) {
                    if (String(i) !== id) {
                        const buttonChoice = document.querySelector(`#choice-${i}`)
                        if(buttonChoice){
                        buttonChoice.disabled = true;
                        }
                    }
                }

                if (id == 1){
                    CreateListBook(pages[stage]["choice-1"], Book)
                    sleep(2000).then(()=> {Book.flipNext();})
                }
                if (id == 2){
                    CreateListBook(pages[stage]["choice-2"], Book)
                    sleep(2000).then(()=> {Book.flipNext();})
                }
                if (id == 3){
                    CreateListBook(pages[stage]["choice-3"], Book)
                    sleep(2000).then(()=> {Book.flipNext();})

                }

                sleep(500).then(() => {
                    testElement.remove();
                    if(!mobileFlag){
                    container.style.transform = `translate(0,0)`;
                    }
                })
                NextStage(Book, dictBtn, trophyBtn,gameStarted)

            }

            buttonChoice1.addEventListener('click', F)
            buttonChoice2.addEventListener('click', F)
            if(buttonChoice3){
            buttonChoice3.addEventListener('click', F)
            }

            
        });

};

function CreateListBook(template, Book) {
    let test = `${template}`
    if(mobileFlag){
        test =  test.replaceAll('<li class="page">','<li class="page"></li><li class="page">')
        .replaceAll(' <li class="page trophy_class">','<li class="page"></li><li class="page trophy_class">')
        .replaceAll('<li class="page dict_class">','<li class="page"></li><li class="page tdict_class">');
    }
    if (document.querySelector('.stf__block') != null) {
        document.querySelector('.stf__block').insertAdjacentHTML("beforeend", test);
    } else {
        console.log('no');
    }
    Book.updateFromHtml(document.querySelectorAll(".page"));
}

function NextStage(Book, dictBtn, trophyBtn,gameStarted){
    const end = document.querySelector("#endBtn");
    if (end){
        SaveTr(trophies.join(''));
        const endOfGame = document.querySelector("#endOfGame");
        end.addEventListener("click", () => {
            end_screen.innerHTML = printPoints(points, endOfGame)
            if (end_screen.classList.contains("is-visible")){
            }
            else{
                $(".end_screen").show()
                end_screen.classList.add("is-visible")}
        });
        return
    } 
    else{
        stage+=1
        CreateListBook(pages[stage]["page"], Book)
        tooltipCreate();
        const choiceBtn = document.querySelector('#choice');
        choiceBtn.addEventListener('click', (evt) => {
            ChoiceCreate(Book, evt, dictBtn, trophyBtn,gameStarted)
        });
    }
}

function OpenBook(gameStarted) {
    leftPage.classList.add('is-hidden')
    sleep(200).then(() => {
        leftPage.remove()
        rightPage.remove()
    })
    mainPage.innerHTML = `
    <div class="container1">
          <div class="open-book">
            <div class="flip-book" id="demoBookExample">
                <div id="page" class="cover page-cover-top page-test">
                </div>
                <div id="page" class="page1 right-br">
                </div>
                <div id="page" class="page2 left-br">
                </div>
            </div>
          </div>
        </div>
        `

    const pageFlip = new PageFlip(
        document.getElementById("demoBookExample"),
        {
            width: 640,
            height: 882,

            size: "stretch",
            // set threshold values:
            drawShadow: true,
            maxShadowOpacity: 0.2,
            showCover: true,
            usePortrait: false,
            mobileScrollSupport: false,
            useMouseEvents: false,
            flippingTime: 1100
        }
    )
    const pOne = document.querySelector(".page1")
    const pTwo = document.querySelector(".page2")
    pageFlip.loadFromHTML(document.querySelectorAll("#page"))
    sleep(20).then(() => { pageFlip.flipNext() })
    sleep(500).then(() => {
        pOne.classList.remove("right-br")
        pTwo.classList.remove("left-br")
    })
    sleep(1300).then(() => {
        pageFlip.destroy()
        const container1 = document.querySelector('.container1')
        container1.remove()
        if(gameStarted){
        let startPages = pages[0]['page']
        if(mobileFlag){
            startPages = startPages.replaceAll(
            `<li class="page">`,
    
            `<li class="page"></li>
            <li class="page">`);
        }
        mainPage.innerHTML = startPages

        }
        else{
            mainPage.innerHTML = `
            // <button class="arrow-left"><img src="assets/arrow.svg"></button>
            // <button class="arrow-right"><img src="assets/arrow.svg"></button>
            <div class="container">
            <div class="side_blockerator__left" id="side_blockerator__left"></div>
            <div class="side_blockerator__right" id="side_blockerator__right"></div>
            <button class='home-btn'></button>
                <div class="wrapper-book">
                    <ul class="flip-book" id="demoBookExample">
                        ${trophiesPages}
                    </ul>
                </div>
            </div>`


        }

        // mainPage.innerHTML = dictionary
        let BookOptions;

        if (mobileFlag){
            BookOptions = new PageFlip(
            document.getElementById("demoBookExample"),
            {
                width: 550,
                height: 803,

                size: "stretch",
                // set threshold values:
                // minWidth: 315,
                // maxWidth: 1000,
                // minHeight: 800,
                // maxHeight: 400,
                drawShadow: true,
                maxShadowOpacity: 0.2,
                showCover: false,
                usePortrait: false,
                useMouseEvents: false,
                flippingTime: 700,
                mobileScrollSupport: true // disable content scrolling on mobile devices
            })}
            else{
            BookOptions = new PageFlip(
            document.getElementById("demoBookExample"),
            {
                width: 550,
                height: 803,

                size: "stretch",
                // set threshold values:
                // minWidth: 315,
                // maxWidth: 1000,
                // minHeight: 800,
                // maxHeight: 400,
                drawShadow: true,
                showCover: false,
                usePortrait: false,
                flippingTime: 700,
                maxShadowOpacity: 0.2,
                mobileScrollSupport: false // disable content scrolling on mobile devices
            }
            )}
        const Book = BookOptions;
        Book.loadFromHTML(document.querySelectorAll(".page"))
        
        document.addEventListener("keydown", (e) => {
            if (e.code == 'ArrowRight'){Book.flipNext()}
            else if(e.code == 'ArrowLeft'){Book.flipPrev()}
        });

        adaptiveSideElements(Book,gameStarted)
        window.addEventListener('resize', () =>{
            adaptiveSideElements(Book,gameStarted)
        });
        document.addEventListener("click", () => {adaptiveSideElements(Book,gameStarted)});

        const leftBtn = document.querySelector(".arrow-left")
        leftBtn.addEventListener('click', () => { Book.flipPrev('top')});

        const rightBtn = document.querySelector(".arrow-right")
        rightBtn.addEventListener('click', () => { Book.flipNext('top')});

        const homeBtn = document.querySelector(".home-btn")
        homeBtn.addEventListener('click', () => { location.reload()});

        if(gameStarted){
        const dictBtn = document.querySelector(".dictionary-btn")
        openSideBtnEvt(dictBtn, Book, ".dict_class", dictionary,gameStarted)

        const trophyBtn = document.querySelector(".trophy-btn")
        openSideBtnEvt(trophyBtn, Book, ".trophy_class", trophiesPages,gameStarted)

        const choiceBtn = document.querySelector('#choice')
        if (choiceBtn) {
            choiceBtn.addEventListener('click', (evt) => { ChoiceCreate(Book, evt, dictBtn, trophyBtn) })
            tooltipCreate()
        }
        }
    })
}

function adaptiveSideElements(Book,gameStarted) {
    if(mobileFlag){
    let topBlockHeight = Book.getBoundsRect().top
    // console.log(Book.getBoundsRect());
    document.querySelector(".home-btn").style.top = topBlockHeight-60+ 'px'
    if(gameStarted){
    document.querySelector(".dictionary-btn").style.top = topBlockHeight-60+ 'px'
    document.querySelector(".trophy-btn").style.top = topBlockHeight-62+ 'px'
    }
    }
    else{
    let sideBlockWidth = Book.getBoundsRect().left + 30
    document.querySelector(".home-btn").style.left = sideBlockWidth - 75 - 10 + 'px'
    if(gameStarted){
    document.querySelector(".dictionary-btn").style.right = sideBlockWidth - 75 - 10 + 'px'
    document.querySelector(".trophy-btn").style.right = sideBlockWidth - 75 - 10 - 10 + 'px'
    }
    document.getElementById('side_blockerator__left').style.width = sideBlockWidth + 'px'
    document.getElementById('side_blockerator__right').style.width = sideBlockWidth + 'px'
    }
}

function openSideBtnEvt(SideBtn, Book, pageClass, addingPages,gameStarted) {
    let flag = true
    let curPage
    if (SideBtn) {
        SideBtn.addEventListener('click', () => {
                adaptiveSideElements(Book,gameStarted)
            if(pageClass == '.trophy_class'){
                addingPages = trophiesBook();
            }
            if (flag) {
                SideBtn.disabled = true
                const pagesCount = Book.getPageCount()
                curPage = Book.getCurrentPageIndex()
                CreateListBook(addingPages, Book)
                Book.flip(pagesCount)
                flag = false
                sleep(800).then(() => {
                    SideBtn.disabled = false
                    Book.on('flip', (e) => {
                        if (e.data == pagesCount - 2) {
                            $(pageClass).remove()
                            sleep(100).then(() => {
                                flag = true
                                Book.updateFromHtml(document.querySelectorAll(".page"))
                                Book.off('flip', (e) => {
                                    if (e.data == pagesCount - 2) {
                                        $(pageClass).remove()
                                        sleep(100).then(() => {
                                            flag = true
                                            Book.updateFromHtml(document.querySelectorAll(".page" ))
                                            Book.off()
                                        })
                                    };
                                })
                            })
                        };
                    })
                })
            }
            else {
                document.getElementById('blockerator').style.display = 'block'
                Book.flip(curPage)
                sleep(800).then(() => {
                    $(pageClass).remove()
                    Book.updateFromHtml(document.querySelectorAll(".page"))
                    flag = true
                    document.getElementById('blockerator').style.display = "none"
                })
            }
        })
    }
}

