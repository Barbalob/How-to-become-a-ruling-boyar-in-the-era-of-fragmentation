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
          <div class="open-book">
            <div class="flip-book" id="demoBookExample">
                <div class="page cover page-cover-top page-test">
                </div>
                <div class="page page1">
                </div>
                <div class="page page2">
                </div>
            </div>
          </div>
        </div>
`

    const pageFlip = new PageFlip(
        document.getElementById("demoBookExample"),
        {
            width: 711, // base page width
            height: 980, // base page height

            size: "fixed",
            // set threshold values:
            drawShadow: false,
            showCover: true,
            usePortrait: false,
            mobileScrollSupport: false,
            useMouseEvents: false // disable content scrolling on mobile devices
        }
    );
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));
    setTimeout(() => { pageFlip.flipNext(); }, 10);
    setTimeout(() => {
        pageFlip.destroy();
        const container = document.querySelector('.container1');
        container.remove();
        mainPage.innerHTML = `
    <div class="container">
          <div class="wrapper-book">
            <div class="flip-book" id="demoBookExample">

                <div class="page">
                    <div class="page-content content-text">
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
                </div>


                <div class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/1-Gogol.png" alt="Портрет Гоголя">
                            <figcaption class="text-img-author text-medium">Ф. А. Моллер. Портрет Гоголя (Третьяковская галерея, 1841 г.)</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </div>


                <div class="page">
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
                </div>

                
                <div class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/2.png" alt="Съезд князей">
                            <figcaption class="text-img-author text-medium">И. Билибин. Рисунок “Съезд князей”</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </div>

                
                <div class="page">
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
                </div>

                <div class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/2.png" alt="Съезд князей">
                            <figcaption class="text-img-author text-medium">И. Билибин. Рисунок “Съезд князей”</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </div>

                <div class="page">
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
                </div>

                <div class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/3.png" alt="Съезд князей">
                            <figcaption class="text-img-author text-medium">Памятник Любечкому съезду князей. Памятник скульптора Геннадия Ершова, расположенный в Любече на берегу Днепра (Украина, 1997 г.)</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </div>

                <div class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/4.png" alt="Съезд князей">
                            <figcaption class="text-img-author text-medium">Отравление Ростислава Владимировича Тмутараканского, первого князя-изгоя, греческим стратигом. Миниатюра из Радзивилловской летописи (XV век)</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </div>

                <div class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterH.svg" alt="Буква И" class='img-letter-small'>
                            <div class='text text-small'> 
                            аходясь при особе своего князя, Вы,
                            к своему стыду, не сумели уберечь
                            его от отравления, совершенного коварным поваром по прозвищу Поганка. Не только могущество и влияние, но и само выживание княжеского клана, 
                            к которому он принадлежал, подверглись угрозе. Пока бурное развитие сел и городов прерывается набегами половцев, 
                            зачастую приглашаемых на Русскую землю самими русскими князьями, Вы рискуете остаться за бортом Истории. 
                            Однако, судьба дала Вам второй шанс в лице его молодого наследника. Несмотря на то, что княжеский стол потерян, честь клана попрана, 
                            а молодой и неопытный Рюрикович превращен в князя-изгоя, Вы решаете начать искать союзников для возвращения отчины, 
                            чтобы занять достойное место в “семейном владении Рюриковичей”.
                            </div>
                        </div>
                        <button id="trophies" class="menu__button text-medium">Что Вы намерены делать в первую очередь?</button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </div>

                <div class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterH.svg" alt="Буква H" class='img-letter-small'>
                            <div class='text text-medium'> 
                            аходясь при особе своего князя, Вы,
                            к своему стыду, не сумели уберечь
                            его от отравления, совершенного коварным поваром по прозвищу Поганка. Не только могущество и влияние, но и само выживание княжеского клана, 
                            к которому он принадлежал, подверглись угрозе. Пока бурное развитие сел и городов прерывается набегами половцев, 
                            зачастую приглашаемых на Русскую землю самими русскими князьями, Вы рискуете остаться за бортом Истории. Однако, 
                            судьба дала Вам второй шанс в лице его молодого наследника. Несмотря на то, что княжеский стол потерян, честь клана попрана, 
                            а молодой и неопытный Рюрикович превращен в князя-изгоя, Вы решаете начать искать союзников для возвращения отчины, чтобы занять достойное место в 
                            “семейном владении Рюриковичей”. Что Вы намерены делать в первую очередь?
                            </div>
                        </div>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </div>

                <div class="page">
                    <div class="page-content content-img">
                        <figure>
                            <figcaption class="text-img-author text-continued">To be continued...</figcaption>                     
                        </figure> 
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
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
                height: 823, // base page height

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
    }, 1000);
    testButton.addEventListener('click', () => {
        const tempDiv = document.createElement("div");
        tempDiv.className = "page";
        tempDiv.innerHTML = `
    <div class="page-content">
        <h2 class="page-header">Page header 1</h2>
        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. 
        Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, 
        eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. 
        Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. 
        Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.</div>
        <div class="page-footer">2</div>
    </div>
`
        if (document.querySelector('.stf__block') != null) {
            document.querySelector('.stf__block').insertAdjacentElement("beforeend", tempDiv);
        }
        else {
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
