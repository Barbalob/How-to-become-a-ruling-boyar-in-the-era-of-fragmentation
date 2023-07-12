// import name from "./module.js";
import { PageFlip } from 'page-flip'
import './styles/style.scss'
import { RenderPosition, createElement, render, renderHTML } from './render.js'
import {pages} from './pages.js'
import { dictionary } from './dictionary'
import {SaveTr, GetTr} from './save'
import { definitions } from './definitionDict'
import { printPoints } from './withdrawalPoints'
import {trophiesBook }from './trophies'


const buttonStart = document.querySelector('#start')
const leftPage = document.querySelector('#btns')
const rightPage = document.querySelector('.menu__right')
const mainPage = document.querySelector('.menu')
const menuTrophyBtn = document.querySelector('#trophies')
const testButton = document.querySelector('#test')
const tooltip = document.querySelector("#tooltip")
let trophiesPages = trophiesBook()
let stage = 0;
let points = 0;
let trophies = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let savedTr = GetTr();
if(savedTr){
    trophies = savedTr.split('');
}
console.log(trophies);


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function tooltipCreate(){
    $("[data-tooltip]").mousemove(function (eventObject) {
        let data_tooltip = $(this).attr("data-tooltip");
        $("#tooltip").html(data_tooltip)
            .css({ 
              "top" : eventObject.pageY - 50,
              "left" : eventObject.pageX + 5
            })
            .show();
        }).mouseout(function () {
          $("#tooltip").hide()
            .html("")
            .css({
                "top" : 0,
                "left" : 0
            });
    });
};

function ChoiceCreate(Book, evt, dictBtn){
        dictBtn.disabled = true;
        let container = document.querySelector('.container');
        container.classList.remove('move-right');
        container.classList.add('move-left');
        const testElement = createElement(`
    <ul class='list-answer'>
        ${pages[stage]["btn-1"]}
        ${pages[stage]["btn-2"]}
        ${pages[stage]["btn-3"]}
    </ul>
    `)
        mainPage.insertAdjacentElement(RenderPosition.BEFOREEND, testElement);
        tooltipCreate();
        evt.target.disabled = true;
        evt.target.id = "disabled"
        sleep(3000).then(() => {
            const buttonChoice1 = document.querySelector('#choice-1')
            const buttonChoice2 = document.querySelector('#choice-2')
            const buttonChoice3 = document.querySelector('#choice-3')

            const F = (evt) => {
                dictBtn.disabled = false;
                if(evt.target.id == "chosen"){
                    return
                }
                const id = evt.target.id.slice(-1)
                points += Number($(evt.target).attr("value"));
                let trophy = $(evt.target).attr("trophy");
                console.log(trophy);
                if(trophy){
                    if(trophy.length > 2){
                        trophy = trophy.split(',');
                        trophies[Number(trophy[0])] = "1";
                        trophies[Number(trophy[1])] = "1";
                    }
                    else{
                        trophies[Number(trophy)] = "1";
                    }
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
                    container.classList.add('move-right')
                    container.classList.remove('move-left')
                })
                NextStage(Book, dictBtn)

            }

            buttonChoice1.addEventListener('click', F)
            buttonChoice2.addEventListener('click', F)
            if(buttonChoice3){
            buttonChoice3.addEventListener('click', F)
            }

            
        });

};

function CreateListBook(template, Book) {
    const test = `${template}`
    if (document.querySelector('.stf__block') != null) {
        document.querySelector('.stf__block').insertAdjacentHTML("beforeend", test);
    } else {
        console.log('no');
    }
    Book.updateFromHtml(document.querySelectorAll(".page"));
}

function NextStage(Book, dictBtn){
    const end = document.querySelector("#endBtn");
    if (end){
        SaveTr(trophies.join(''));
        console.log(trophies);
        return
    } 
    stage+=1
    CreateListBook(pages[stage]["page"], Book)
    tooltipCreate();
    const choiceBtn = document.querySelector('#choice');
    choiceBtn.addEventListener('click', (evt) => {ChoiceCreate(Book, evt, dictBtn)});
}

buttonStart.addEventListener('click', () => {
    OpenBook(true)
});
menuTrophyBtn.addEventListener('click', () => {
    OpenBook(false)
});


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

            size: "fixed",
            // set threshold values:
            drawShadow: false,
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
        mainPage.innerHTML = pages[0]['page']
        }
        else{
            mainPage.innerHTML = `
            <div class="container">
            <button class='home-btn'></button>
                <div class="wrapper-book">
                    <ul class="flip-book" id="demoBookExample">
                        ${trophiesPages}
                    </ul>
                </div>
            </div>`
        }

        // mainPage.innerHTML = dictionary
        const Book = new PageFlip(
            document.getElementById("demoBookExample"),
            {
                width: 550,
                height: 803,

                size: "stretch",
                // set threshold values:
                minWidth: 315,
                maxWidth: 1000,
                minHeight: 800,
                maxHeight: 400,
                drawShadow: false,
                showCover: false,
                usePortrait: false,
                flippingTime: 700,
                mobileScrollSupport: false // disable content scrolling on mobile devices
            }
        )
        Book.loadFromHTML(document.querySelectorAll(".page"))
        // testButton.addEventListener('click', () => {
        //     Book.turnToPage(8);
        // });
        const homeBtn = document.querySelector(".home-btn")
        homeBtn.addEventListener('click', () => { location.reload()});

        if(gameStarted){
        const dictBtn = document.querySelector(".dictionary-btn")
        openSideBtnEvt(dictBtn, Book, ".dict_class", dictionary)

        const trophyBtn = document.querySelector(".trophy-btn")
        openSideBtnEvt(trophyBtn, Book, ".trophy_class", trophiesPages)

        const choiceBtn = document.querySelector('#choice')
        if (choiceBtn) {
            choiceBtn.addEventListener('click', (evt) => { ChoiceCreate(Book, evt, dictBtn) })
            tooltipCreate()
        }
        }
    })
}

function openSideBtnEvt(SideBtn, Book, pageClass, addingPages) {
    let flag = true
    let curPage
    if (SideBtn) {
        SideBtn.addEventListener('click', () => {
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

