// import name from "./module.js";
import { PageFlip } from 'page-flip'
import './styles/style.scss'
import { RenderPosition, createElement, render, renderHTML } from './render.js'
import {pages} from './pages.js'
import { dictionary } from './dictionary'
import { definitions } from './definitionDict'

console.log(dictionary);

const buttonStart = document.querySelector('#start')
const leftPage = document.querySelector('#btns')
const rightPage = document.querySelector('.menu__right')
const mainPage = document.querySelector('.menu')
const testButton = document.querySelector('#test')
const tooltip = document.querySelector("#tooltip")
let stage = 0;



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

function ChoiceCreate(Book, evt){
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
                if(evt.target.id == "chosen"){
                    return
                }
                const id = evt.target.id.slice(-1)
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
                NextStage(Book)

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

function NextStage(Book){
    const end = document.querySelector("#endBtn");
    if (end){
        return
    } 
    stage+=1
    CreateListBook(pages[stage]["page"], Book)
    tooltipCreate();
    const choiceBtn = document.querySelector('#choice');
    choiceBtn.addEventListener('click', (evt) => {ChoiceCreate(Book, evt)});
}

buttonStart.addEventListener('click', () => {
    leftPage.classList.add('is-hidden');
    sleep(200).then(() => {
        leftPage.remove();
        rightPage.remove();
    });
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
                width: 640, // base page width
                height: 882, // base page height

                size: "fixed",
                // set threshold values:
                drawShadow: false,
                showCover: true,
                usePortrait: false,
                mobileScrollSupport: false,
                useMouseEvents: false, // disable content scrolling on mobile devices
                flippingTime: 1100
            }
        );
        const pOne = document.querySelector(".page1");
        const pTwo = document.querySelector(".page2");
        pageFlip.loadFromHTML(document.querySelectorAll("#page"));
        sleep(20).then(() => { pageFlip.flipNext(); });
        sleep(500).then(() => {
            pOne.classList.remove("right-br")
            pTwo.classList.remove("left-br")
        });
        sleep(1300).then(() => {
            pageFlip.destroy();
            const container1 = document.querySelector('.container1');
            container1.remove(); 
            mainPage.innerHTML = `
    <div class="container">
          <button class='dictionary-btn'><img src='assets/Dictionary_bookmark.png'></button>
          <div class="wrapper-book">
            <ul class="flip-book" id="demoBookExample">

                <li class="page">
                    <div class="page-content content-text first">
                        <div class='main-text'> 
                            <img src="assets/letter/letterU.svg" alt="Буква И" class='img-letter-high'>
                            <div class='text text-high'> 
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
                        <div class='main-text text-high'>(Н. В. Гоголь, “О средних веках”)</div>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>


                <li class="page">
                    <div class="page-content content-img first">
                        <figure>
                            <img class="content-img" src="assets/image/1-Gogol.png" alt="Портрет Гоголя">
                            <figcaption class="text-img-author text-medium">Ф. А. Моллер. Портрет Гоголя (Третьяковская галерея, 1841 г.)</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>


                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterH.svg" alt="Буква Н" class='img-letter-small'>
                            <div class='text text-small'> 
                                а землях Руси настали поистине смутные времена. Могущественные
                                княжеские кланы готовы вступить в ожесточенную борьбу за власть и влияние. 
                                Князья-изгои, оскорбленные лишением земель, уже точат свои мечи и не спешат убирать их обратно в ножны. 
                                Владетели крупных княжеств собирают свои дружины, чтобы отстоять свои права перед другими представителями разросшейся семьи Рюриковичей. 
                                Бурное развитие сел и городов прерывается набегами половцев, зачастую приглашаемых на Русскую землю самими русскими князьями. 
                                Бал начинает править кровавая эпоха раздробленности...
                                Вы – молодой дружинник по имени Василько, состоящий в дружине у князя-изгоя, которому не досталось места в “семейном владении Рюриковичей”. 
                                Его отец, также князь-изгой, всю свою жизнь провел в битвах со своими родичами, но, как только захватил княжеский стол, 
                                был отравлен своим же поваром по прозвищу Поганка. 
                            </div>
                        </div>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

                
                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/2.png" alt="Съезд князей">
                            <figcaption class="text-img-author text-medium">И. Билибин. Рисунок “Съезд князей”</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                
                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterB.svg" alt="Буква В" class='img-letter-small'>
                            <div class='text text-small'> 
                            аша задача – выжить в жестоком
                            мире удельной раздробленности и 
                            попытаться, заручившись верными союзниками и братьями-дружинниками, 
                            добиться для своего князя власти в каком-либо княжестве, поправ врагов и восстановив честь клана!
                            <br>
                            <br>
                            Вас ждет невероятное путешествие по землям Восточной Европы, в ходе которого Вы будете вести битвы, 
                            плести интриги, торговать и вступать в переговоры. Любое Ваше решение будет иметь последствия: 
                            за каждый выбранный Вами ход Вы получите определенное количество очков, а также, если повезет, трофейный предмет, 
                            который прибавит Вам итоговых очков в конце игры. Чем больше Вы наберете очков в течение игры – тем лучше результат!               
                            </div>
                        </div>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/2.png" alt="Съезд князей">
                            <figcaption class="text-img-author text-medium">И. Билибин. Рисунок “Съезд князей”</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterB.svg" alt="Буква В" class='img-letter-small'>
                            <div class='text text-small'> 
                                течение игры каждый ход Вам будет 
                                предлагаться выбор из трех или двух
                                вариантов ответа, от которого будет зависеть судьба Вашего героя и князя, за которым Вы стоите. 
                                Наиболее успешный выбор даст дружиннику большее количество очков. От выбора зависит и достаток Вашего героя: 
                                за те или иные ходы Вы будете получать трофеи, которые также влияют на конечный результат борьбы за княжеский стол. 
                                Будьте внимательны: некоторые варианты ответа могут привести Вас и Вашего князя к гибели или к бесславному окончанию путешествия, выбирайте с умом!
                                <br>
                                <br>
                                Ваша цель – выжить, заручиться союзниками и захватить княжеский престол для своего князя.
                                <br>
                                <br>
                                Кроме того, по ходу игры некоторые слова будут выделяться особым маркером. Это будет означать, 
                                что у данного слова существует историческая справка – объяснение понятия с возможной краткой историографией.           
                            </div>
                        </div>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/3.png" alt="Съезд князей">
                            <figcaption class="text-img-author text-medium">Памятник Любечкому съезду князей. Памятник скульптора Геннадия Ершова, расположенный в Любече на берегу Днепра (Украина, 1997 г.)</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/4.png" alt="Съезд князей">
                            <figcaption class="text-img-author text-medium">Отравление Ростислава Владимировича Тмутараканского, первого князя-изгоя, греческим стратигом. Миниатюра из Радзивилловской летописи (XV век)</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterH.svg" alt="Буква И" class='img-letter-small'>
                            <div class='text text-small'> 
                            аходясь при особе своего князя, Вы,
                            к своему стыду, не сумели уберечь
                            его от отравления, совершенного коварным поваром по прозвищу <a href="#" alt="Ссылка" data-tooltip="${definitions['Поганка'][0]}">Поганка</a>. 
                            Не только могущество и влияние, но и само выживание 
                            <a href="#" alt="Ссылка" data-tooltip="${definitions['Княжеские кланы'][0]}">княжеского клана</a>, 
                            к которому он принадлежал, подверглись угрозе. Пока <a href="#" alt="Ссылка" data-tooltip="${definitions['Бурное развитие сел и городов'][0]}">бурное развитие сел и городов</a> прерывается набегами 
                            <a href="#" alt="Ссылка" data-tooltip="${definitions['Половцы'][0]}">половцев</a>, 
                            зачастую приглашаемых на Русскую землю самими русскими князьями, Вы рискуете остаться за бортом Истории. 
                            Однако, судьба дала Вам второй шанс в лице его молодого наследника. Несмотря на то, что княжеский стол потерян, честь клана попрана, 
                            а молодой и неопытный Рюрикович превращен в 
                            <a href="#" alt="Ссылка" data-tooltip="${definitions['Князья-изгои'][0]}">князя-изгоя</a>, 
                            Вы решаете начать искать союзников для возвращения отчины, 
                            чтобы занять достойное место в “<a href="#" alt="Ссылка" data-tooltip="${definitions['Семейное владение Рюриковичей'][0]}">семейном владении Рюриковичей</a>”.
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">Что Вы намерены делать в первую очередь?</button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
`
            // mainPage.innerHTML = dictionary
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
            // testButton.addEventListener('click', () => {
            //     Book.turnToPage(8);
            // });
            const choiceBtn = document.querySelector('#choice');
            if (choiceBtn){
                choiceBtn.addEventListener('click', (evt) => {ChoiceCreate(Book, evt)});
                tooltipCreate();
            }  
        });





    //     testButton.addEventListener('click', () => {
    //         const tempDiv = document.createElement("div");
    //         tempDiv.className = "page";
    //         tempDiv.innerHTML = `
    //     <div class="page-content">
    //         <h2 class="page-header">Page header 1</h2>
    //         <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. 
    //         Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, 
    //         eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. 
    //         Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    //         In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. 
    //         Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.</div>
    //         <div class="page-footer">2</div>
    //     </div>
    // `
    //         if (document.querySelector('.stf__block') != null) {
    //             document.querySelector('.stf__block').insertAdjacentElement("beforeend", tempDiv);
    //         }
    //         else {
    //             console.log('no');
    //         }
    //         Book.updateFromHtml(document.querySelectorAll(".page"));

    //     });

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


