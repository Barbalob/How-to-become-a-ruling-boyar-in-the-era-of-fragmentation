import { definitions } from './definitionDict'
export const pages = [
    {
        "page":`
        // <button class="arrow-left"><img src="assets/arrow.svg"></button>
        // <button class="arrow-right"><img src="assets/arrow.svg"></button>
        <div class="container">
        <div class="side_blockerator__left" id="side_blockerator__left"></div>
        <div class="side_blockerator__right" id="side_blockerator__right"></div>
          <button class='dictionary-btn' data-tooltip="Словарь"></button>
          <button class='trophy-btn' data-tooltip="Трофеи"></button>
          
          <button class='home-btn' data-tooltip="Главное меню<br>Вы потеряете весь прогресс"></button>
          <div class="wrapper-book">
            <ul class="flip-book" id="demoBookExample">

                <li class="page">
                    <div class="page-content content-text first">
                        <div class='main-text'> 
                            <img src="assets/letter/letterI.svg" alt="Буква И" class='img-letter-high'>
                            <div class='text text-high'> 
                            стория средних веков менее всего может назваться скучною. Нигде нет такой пестроты, 
                            такого живого действия, таких резких противоположностей, такой странной яркости, 
                            как в ней: ее можно сравнить с огромным строением, в фундаменте которого улегся 
                            свежий, крепкий, как вечность, гранит, а толстые стены выведены из различного, 
                            старого и нового материала, так что на одном кирпиче видны готфские руны, 
                            на другом блестит римская позолота; арабская резьба, греческий карниз, 
                            готическое окно, – все слепилось в нем и составило самую пеструю башню
                            </div>
                        </div>
                        <div class='main-text text-high'>(Гоголь Н. В. О Средних веках // Гоголь Н. В. Собр. соч. : в 3 т. М. : Время, 2009. С. 483–494)</div>
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
                            <img src="assets/letter/letterN.svg" alt="Буква Н" class='img-letter-small'>
                            <div class='text text-small'> 
                            а землях Руси настали поистине смутные времена. Могущественные княжеские 
                            кланы готовы вступить в ожесточенную борьбу за власть и влияние. 
                            Князья-изгои, оскорбленные лишением земель, уже точат свои мечи и не спешат 
                            убирать их обратно в ножны. Владетели крупных княжеств собирают дружины, 
                            чтобы отстоять свои права перед другими представителями разросшейся 
                            семьи Рюриковичей. Бурное развитие сел и городов прерывается набегами 
                            половцев, зачастую приглашаемых на Русскую землю самими русскими князьями. 
                            Бал начинает править кровавая эпоха раздробленности…
                            Вы – молодой дружинник по имени Василько, состоящий в дружине у князя-изгоя, 
                            которому не досталось места в «семейном владении Рюриковичей». Его отец, 
                            также князь-изгой, всю свою жизнь провел в битвах со своими родичами, но, 
                            как только захватил княжеский стол, был отравлен своим же поваром по имени Поганка. 
                            </div>
                        </div>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

                
                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/2.png" alt="Съезд князей">
                            <figcaption class="text-img-author text-medium">И. Я. Билибин. Съезд князей. 1907 г. Государственная Третьяковская галерея.</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                
                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterV.svg" alt="Буква В" class='img-letter-small'>
                            <div class='text text-small'> 
                            аша задача – выжить в жестоком мире удельной раздробленности и попытаться, 
                            заручившись поддержкой верных союзников и братьев-дружинников, добиться для 
                            своего князя власти в каком-либо княжестве, поправ врагов и восстановив честь клана!
                            <br>
                            <br>
                            Вас ждет невероятное путешествие по землям Восточной Европы, в ходе которого 
                            Вы будете вести битвы, плести интриги, торговать и вступать в переговоры. 
                            Любое Ваше решение будет иметь последствия: за каждый выбранный Вами ход Вы получите 
                            определенное количество очков, а также, если повезет, трофейный предмет, 
                            который прибавит 
                            Вам очков в конце игры. Чем больше Вы наберете их в течение игры, тем лучше результат!
                            </div>
                        </div>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/2.png" alt="Съезд князей">
                            <figcaption class="text-img-author text-medium">И. Я. Билибин. Съезд князей. 1907 г. Государственная Третьяковская галерея.</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterV.svg" alt="Буква В" class='img-letter-small'>
                            <div class='text text-small'> 
                            каждом ходе игры Вам будет предлагаться выбор из трех или двух вариантов ответа, 
                            от которого будет зависеть судьба Вашего героя и князя, за которым Вы стоите. 
                            Наиболее успешный выбор даст дружиннику большее количество очков. 
                            От выбора зависит и достаток Вашего героя: проходя игру, Вы будете получать трофеи, 
                            которые также влияют на результат борьбы за княжеский стол. Отдельные понятия и 
                            события по ходу игры выделаются маркером, обозначающим исторические справки.
                            Будьте внимательны: некоторые варианты ответа могут привести к гибели героя 
                            или к бесславному окончанию путешествия!                            
                                <br>
                                <br>
                                Ваша цель – выжить, заручиться союзниками и возвести на престол своего князя.
                            </div>
                        </div>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/3.png" alt="Съезд князей">
                            <figcaption class="text-img-author text-medium">Г. А. Ершов. Памятник Любечскому съезду князей (1097 г.) на территории бывшего Любечского детинца. 1997 г.</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/4.png" alt="Съезд князей">
                            <figcaption class="text-img-author text-medium">Отравление Ростислава Владимировича Тмутараканского, первого князя-изгоя, греческим стратигом. 1065 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук.</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterN.svg" alt="Буква Н" class='img-letter-small'>
                            <div class='text text-small'> 
                            аходясь при своем князе, Вы, к своему стыду, не уберегли его от отравления, 
                            совершенного коварным поваром по имени <a href="#" alt="Ссылка" data-tooltip="${definitions['Поганка'][0]}">Поганка</a>. Угрозе подверглось не только 
                            могущество, но и само существование <a href="#" alt="Ссылка" data-tooltip="${definitions['Княжеские кланы'][0]}">княжеского клана</a>. 
                            Пока <a href="#" alt="Ссылка" data-tooltip="${definitions['Бурное развитие сел и городов'][0]}">бурное развитие сел и городов</a> 
                            прерывается набегами <a href="#" alt="Ссылка" data-tooltip="${definitions['Половцы'][0]}">половцев</a>, которых русские князья часто сами 
                            приглашали на Русскую землю, Вы рискуете остаться за бортом Истории. 
                            Однако судьба дала Вам второй шанс в лице молодого наследника князя.
                             Несмотря на то, что княжеский стол потерян, а молодой и неопытный Рюрикович 
                             стал <a href="#" alt="Ссылка" data-tooltip="${definitions['Князья-изгои'][0]}">князем-изгоем</a>, Вы решили искать союзников 
                            для возвращения <a href="#" alt="Ссылка" data-tooltip="${definitions['Отчина'][0]}">отчины</a>, чтобы занять достойное место в <a href="#" alt="Ссылка" data-tooltip="${definitions['Семейное владение Рюриковичей'][0]}">«семейном владении Рюриковичей»</a>. 
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">
                            <figure  class="button-select">
                                <img class="button-select-img" src="assets/bg-button.png">
                                <figcaption class="button-select-text text-menu-button">Что Вы намерены делать в первую очередь?</figcaption>                
                            </figure>       
                        </button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="3">Нужно заручиться поддержкой князей-союзников, готовых помочь мальчику вернуть <a href="#" alt="Ссылка" data-tooltip="${definitions['Отчина'][0]}">отчину</a>. Уверен, такие найдутся!</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="8" trophy="0">Необходимо обратиться за помощью к польскому королю, с которым у нас есть давние связи. Конечно, за свою помощь он попросит золото, серебро или часть земель, но, возвратив престол и заручившись верной дружиной, мы сможем легко вернуть все отданное обратно. К тому же я знаю язык <a href="#" alt="Ссылка" data-tooltip="${definitions['Ляхи'][0]}">ляхов</a>. Я знал, что это обязательно мне пригодится!</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer" value="0">Если честно, я не понимаю, зачем мне все это нужно. Рисковать своей жизнью ради этого мальчика… Пойду-ка я лучше служить другому князю, обзаведусь слугами и проживу спокойную жизнь!</button></li>`,
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/4.png" alt="Съезд князей">
                <figcaption class="text-img-author text-medium">Отравление Ростислава Владимировича Тмутараканского, первого князя-изгоя, греческим стратигом. 1065 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук. </figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterO.svg" alt="Буква О" class='img-letter-small'>
                    <div class='text text-small'> 
                    тправив гонцов к ближайшим князьям, Вы либо не получаете никаких известий, 
                    либо получаете послания с отказами в помощи. Еще бы: кому нужно поддерживать 
                    молодого <a href="#" alt="Ссылка" data-tooltip="${definitions['Князья-изгои'][0]}">князя-изгоя</a>, да еще и без большого войска! А вот к западу от Русских 
                    земель есть силы, готовые за обещания земель или золота помочь Вашему князю 
                    вернуть престол. Вы отправляетесь в Польшу и прибываете ко двору польского 
                    короля из <a href="#" alt="Ссылка" data-tooltip="${definitions['Династия Пястов'][0]}">династии Пястов</a>, который принимает Вас, хотя и без особого энтузиазма. 
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
        "choice-2":` 
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                    <div class='text text-small'> 
                    рибыв ко двору польского короля из <a href="#" alt="Ссылка" data-tooltip="${definitions['Династия Пястов'][0]}">династии Пястов</a>, Вы получаете 
                    расположение монарха и придворных знанием языка и местных обычаев. 
                    Польский король выделяет Вам и князю лучшие покои в своем замке, а 
                    также принимает Ваше предложение о союзе.
                    <br>
                    <br>
                    Впечатленный Вашими талантами дипломата и <a href="#" alt="Ссылка" data-tooltip="${definitions['Толмач'][0]}">толмача</a>, князь не скрывает 
                    своего восхищения. После аудиенции у польского короля Вам приносят 
                    княжеский вышитый пояс в качестве знака высшей признательности. 
                    Вы не просто добились расположения своего князя, но и снискали 
                    его милость, что, несомненно, скажется на Вашем будущем положении 
                    при иноземных дворах и дворе Вашего князя. 
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/1.png" alt="Княжеский вышитый пояс">
                <figcaption class="text-img-author text-medium">Княжеский вышитый пояс</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>   
    `,
        "choice-3":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/4.png" alt="Съезд князей">
                <figcaption class="text-img-author text-medium">Отравление Ростислава Владимировича Тмутараканского, первого князя-изгоя, греческим стратигом. 1065 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук. </figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква В" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы не захотели прожить по-настоящему увлекательную и полную приключений жизнь. 
                    Вы умерли в безвестности, 
                    и не один летописец не счел нужным упомянуть о Вас хотя бы вкратце.
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
    },
    {
        "page":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/5.png" alt="Дуэль на мечах">
                <figcaption class="text-img-author text-medium">Дуэль на мечах и баклерах (малых круглых щитах). Миниатюра из Манесского кодекса (ок. 1300 г.). Библиотека Гейдельбергского университета (Германия).</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
    </li>

    <li class="page">
        <div class="page-content content-text">
            <div class='main-text'> 
                <img src="assets/letter/letterU.svg" alt="Буква У" class='img-letter-small'>
                <div class='text text-small'> 
                тром Вы просыпаетесь в своих покоях от стука в дверь. Открыв ее, Вы видите 
                перед собой придворного с посланием от короля. Молодой правитель решил 
                испытать Вас на прочность: он хочет устроить турнир на мечах, в котором 
                Вы должны доказать, что польская 
                армия встает на сторону умелого воина, а не слабака, не умеющего держать оружие! 
                </div>
            </div>
            <button id="choice" class="menu__button text-medium">
                <figure  class="button-select">
                    <img class="button-select-img" src="assets/bg-button.png">
                    <figcaption class="button-select-text text-menu-button">Что будете делать?</figcaption>                
                </figure>         
            </button>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>`,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="0">Пора хватать князя в охапку и бежать из этой Польши! Еще русские витязи на их турнирах не дрались!</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="10" trophy="1,2">Нужно согласиться на предложение короля. Однако, если он позволил себе такое, то чем мы хуже? Пусть в конце поединков он сам выйдет сразиться со мной на мечах!</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer" value="9" trophy="2">Я соглашусь биться на турнире с польскими рыцарями! Посмотрим, кто из нас сильнее!</button></li>`,
        
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/5.png" alt="Дуэль на мечах">
                <figcaption class="text-img-author text-medium">Дуэль на мечах и баклерах (малых круглых щитах). Миниатюра из Манесского кодекса (ок. 1300 г.). Библиотека Гейдельбергского университета (Германия).</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква B" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы прибегаете к князю, но тот смотрит на Вас, как на испуганного зайца. 
                    Ему пришлось самому взять в руки меч и пойти на турнир. Удивившись, монарх, 
                    тем не менее, разрешил поединки. В одном из них Ваш князь был смертельно ранен 
                    и вскоре отошел в мир иной. Вы же, оказавшись без князя и прослыв трусом на чужбине, 
                    всю оставшуюся жизнь провели серой мышью, над которой все насмехались.
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
    "choice-2":` 
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                    <div class='text text-small'> 
                    ольский монарх приятно удивлен Вашей храбростью. Любитель жарких битв и схваток 
                    на мечах, он с радостью принимает Ваше предложение. В конце турнира, когда все 
                    соперники побеждены Вами, он выходит с королевским мечом к Вам навстречу. 
                    Происходит короткая, но жесткая схватка, из которой Вы выходите победителем!
                    <br>
                    <br>
                    Молодой польский король впечатлен Вашей храбростью и умением биться на мечах. 
                    В качестве знака своего почтения он преподносит Вам кольчугу, выкованную его 
                    лучшими кузнецами. Не изменив известиям об удали русских ратников, Вы 
                    с гордостью примеряете ее на себя: отныне Вам не страшны почти любые стрелы и палицы!
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/2.png" alt="Кольчуга">
                <figcaption class="text-img-author text-medium">Кольчуга</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>   

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterN.svg" alt="Буква H" class='img-letter-small'>
                    <div class='text text-small'> 
                    е остался в стороне от похвал и Ваш князь: впечатленный Вашими боевыми умениями, 
                    он, вспоминая рассказы из детства о великом князе Владимире Святославиче, награждает 
                    Вас именем «великого мужа». Отныне, Вы – храбрейший из храбрых не только в окружении 
                    молодого князя, но и во всех Польских землях. Слава о Вас начинает распространяться 
                    по всем краям и весям от польских берегов Вислы до испанских берегов Эбро. 
                    Миннезингеры, труверы, 
                    трубадуры и гусельники начинают слагать о Вас песни, разнося их по всей Европе!
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>


        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/3.png" alt="Имя «великого мужа»">
                <figcaption class="text-img-author text-medium">Имя «великого мужа»</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>   
    `,
        "choice-3":`
        

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterT.svg" alt="Буква T" class='img-letter-small'>
                    <div class='text text-small'> 
                    урнир заканчивается, и все Ваши противники повержены Вами. Польский король 
                    аплодирует Вам, однако в душе переживает, что не отважился скрестить с Вами мечи. 
                    Тем не менее, он впечатлен 
                    Вашей храбростью и не стесняется хвалебных слов, посвященных Вашей силе и отваге.
                    <br>
                    <br>
                    Не остался в стороне от похвал и Ваш князь: впечатленный Вашими боевыми 
                    умениями, он, вспоминая рассказы из детства о великом князе Владимире Святославиче, 
                    награждает Вас именем «великого мужа». Отныне, Вы – храбрейший из храбрых не 
                    только в окружении молодого князя, но и во всех Польских землях. Слава о Вас 
                    начинает распространяться по всем краям и весям от польских берегов 
                    Вислы до испанских берегов Эбро. Миннезингеры, труверы, трубадуры и гусельники 
                    начинают слагать о Вас песни, разнося их по всей Европе!
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/3.png" alt="Имя «Великого мужа»">
                <figcaption class="text-img-author text-medium">Имя «Великого мужа»</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>   
    `,
    },
    {
        "page":`
        
                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/6.png" alt="Пленение поляками Володаря Ростиславича Перемышльского">
                            <figcaption class="text-img-author text-medium">Пленение поляками при посредничестве Петра Власта (ум. 1153 г.) Володаря Ростиславича Перемышльского (ум. 1124 г.). 1122 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук.</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterN.svg" alt="Буква H" class='img-letter-small'>
                            <div class='text text-small'> 
                            а следующий день Вы с молодым князем решили прогуляться по призамковой роще. 
                            Внезапно на вас нападает пара-тройка легковооруженных людей. В одном из нападавших 
                            Вы узнаете слугу князя, что вчера был повержен Вами в одном из поединков.
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">
                            <figure  class="button-select">
                                <img class="button-select-img" src="assets/bg-button.png">
                                <figcaption class="button-select-text text-menu-button">Что же делать?</figcaption>                
                            </figure>
                        </button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="7" trophy="3">Надо вдвоем отбиваться от врагов! От моего трупа князю на чужбине будет мало проку. Победим заговорщиков, а дальше подумаем, что делать…</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="6" trophy="3">Князь, беги! Попробую один отбиться от врагов, а потом найти князя в безопасных покоях замка.</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer" value="0">Я и не ожидал, что все будет настолько опасно! Надо бросать меч и бежать в лес!</button></li>`,
        
        "choice-1":`
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква B" class='img-letter-small'>
                    <div class='text text-small'> 
                    месте с князем Вы сражаетесь с врагами. Вскоре все они лежат на земле поверженные.
                    <br>
                    <br>
                    Ошеломленный князь медленно садится на траву, слегка окропленную вечерней росой. 
                    Он не испуган, но весьма подавлен случившимся. Понимая, что в Польском королевстве 
                    стало небезопасно, Вы предлагаете князю отправиться в Венгрию, где правит династия 
                    Арпадов. Князь, соглашаясь на ночной побег из замка, дает Вам в качестве своего дара 
                    корзно с золотой обшивкой и красным подкладом с петлицей. Взяв его, 
                    Вы вместе с князем спускаетесь по винтовой лестнице замка и направляетесь 
                    прямиком к конюшне. 
                    Оседлав коней, вы пускаетесь на юг – в земли Венгерского королевства.
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/4.png" alt="Корзно с золотой обшивкой и красным подкладом с петлицей">
                <figcaption class="text-img-author text-medium">Корзно с золотой обшивкой и красным подкладом с петлицей</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>   
    `,
        "choice-2":` 
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква B" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы отбиваетесь от врагов в одиночестве, подвергая свою жизнь смертельной опасности. 
                    С большим трудом, но Вам удается победить их. Немного отдышавшись, Вы отправляетесь к замку. 
                    Около стен замка Вы видите князя, смотрящего на небо. Вы подходите к нему.
                    <br>
                    <br>
                    Ошеломленный князь медленно садится на траву, слегка окропленную вечерней росой. 
                    Он не испуган, но весьма подавлен случившимся. Понимая, что в Польском королевстве 
                    стало небезопасно, Вы предлагаете князю отправиться в Венгрию, где правит династия 
                    Арпадов. Князь, соглашаясь на ночной побег из замка, дает Вам в качестве своего дара 
                    корзно с золотой обшивкой и красным подкладом с петлицей. Взяв его, 
                    Вы вместе с князем спускаетесь по винтовой лестнице замка и направляетесь прямиком к конюшне. 
                    Оседлав коней, вы пускаетесь на юг – в земли Венгерского королевства.
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/4.png" alt="Корзно с золотой обшивкой и красным подкладом с петлицей">
                <figcaption class="text-img-author text-medium">Корзно с золотой обшивкой и красным подкладом с петлицей</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

    `,
        "choice-3":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/6.png" alt="Пленение поляками Володаря Ростиславича Перемышльского">
                <figcaption class="text-img-author text-medium">Пленение поляками при посредничестве Петра Власта (ум. 1153 г.) Володаря Ростиславича Перемышльского (ум. 1124 г.). 1122 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква B" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы сбегаете в лес, изредка оглядываясь назад. Вы видите, что Вашего князя убивают. 
                    На второй день блужданий по лесу Вы набредаете на неприметный домик знахаря. Всю оставшуюся жизнь 
                    Вы живете у него, помогая готовить снадобья и пытаясь забыть то, что совершили.
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
    },

    {
        "page":`
        
                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/7.png" alt="Бегство полков Владимира Галицкого">
                            <figcaption class="text-img-author text-small">Бегство полков Владимира Володаревича Галицкого (ум. 1153 г.) от войск Изяслава Мстиславича Киевского (ум. 1154 г.) и венгерского короля Гезы II (1130–1162) из-под Санока и избиение бегущих. 1152 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук.</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterCH.svg" alt="Буква Ч" class='img-letter-small'>
                            <div class='text text-small'> 
                            ерез несколько дней пути Вы со своим князем прибываете ко двору венгерского монарха. 
                            На следующий день, отдохнув в выделенных покоях, Вы начинаете вести переговоры. 
                            Как ни странно, Вы обнаруживаете, что пришлись ко двору: венгерское войско как раз 
                            ведет <a href="#" alt="Ссылка" data-tooltip="${definitions['Венгерское войско сейчас как раз ведет войну с дружинами князей юго-запада Руси'][0]}">войну с дружинами князей юго-западной Руси</a>. Так как до венгерского правителя 
                            дошли слухи о Вашей доблести на польском боевом турнире, он желает видеть такого 
                            бравого воина в своих рядах, обещая, что 
                            после победы над русскими князьями один из княжеских столов достанется Вашему князю. 
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">
                            <figure  class="button-select">
                                <img class="button-select-img" src="assets/bg-button.png">
                                <figcaption class="button-select-text text-menu-button">Что скажете на предложение короля?</figcaption>                
                            </figure>
                        </button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="4">Думаю, лучше не стоит сейчас идти в поход. Мы еще не готовы. Нужно переждать несколько месяцев.</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="10" trophy="4">Это предложение нам по душе! Пора молодому князю занять свое истинное место среди <a href="#" alt="Ссылка" data-tooltip="${definitions['Семейное владение Рюриковичей'][0]}">Рюриковичей</a>! Седлайте коней! Мы разгромим эту горстку русских князей!</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer" value="0">Идти на кого-то войной?! Ну нет… Князь еще слишком молод, чтобы участвовать в боевых действиях. Правда, князь?!</button></li>`,
        
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/7.png" alt="Бегство полков Владимира Галицкого">
                <figcaption class="text-img-author text-medium">Бегство полков Владимира Володаревича Галицкого (ум. 1153 г.) от войск Изяслава Мстиславича Киевского (ум. 1154 г.) и венгерского короля Гезы II (1130–1162) из-под Санока и избиение бегущих. 1152 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква B" class='img-letter-small'>
                    <div class='text text-small'> 
                    енгерский король соглашается с Вами. Необходимо собрать силы, 
                    и только тогда нанести мощный удар противнику и завоевать земли для Вашего князя.
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>  
    `,
        "choice-2":` 
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква B" class='img-letter-small'>
                    <div class='text text-small'> 
                    енгерский король явно впечатлен Вашей решительностью, однако просит Вас 
                    повременить с походом: 
                    нужно собрать силы, и только тогда нанести мощный удар противнику.
                    <br>
                    <br>
                    Несмотря на то, что король решил отложить поход, он впечатлен Вашей удалью 
                    и желанием скорее вступить в бой. Вы получаете от него мадьярскую саблю – оружие, 
                    которое хранилось в чертогах венгерских правителей уже около двух столетий. 
                    К Вашему удивлению, сабля за это время нисколько не износилась, напротив, отличалась 
                    большой удобностью и быстротой. С таким клинком можно отвоевать любое княжество!
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/5.png" alt="Мадьярская сабля">
                <figcaption class="text-img-author text-medium">Мадьярская сабля</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

    `,
        "choice-3":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/7.png" alt="Бегство полков Владимира Галицкого">
                <figcaption class="text-img-author text-medium">Бегство полков Владимира Володаревича Галицкого (ум. 1153 г.) от войск Изяслава Мстиславича Киевского (ум. 1154 г.) и венгерского короля Гезы II (1130–1162) из-под Санока и избиение бегущих. 1152 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterM.svg" alt="Буква M" class='img-letter-small'>
                    <div class='text text-small'> 
                    олодой князь явно не согласен с Вами. Он видит, что Вы не готовы к настоящей схватке. 
                    Он заявляет Вам, что более не нуждается в Вашей помощи. Ваш князь
                     становится пешкой в делах венгерской внешней политики, а Вы – изгоем на чужбине.
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
    },
    {
        "page":`
        
                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/8.png" alt="Геза II и Евфросинья Мстиславна принимают её брата Владимира Мстиславича">
                            <figcaption class="text-img-author text-medium">Геза II (1130–1162) и Евфросинья Мстиславна (1130–1193) принимают её брата Владимира Мстиславича. Миниатюра из Лицевого летописного свода (XVI век).</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterP.svg" alt="Буква P" class='img-letter-small'>
                            <div class='text text-small'> 
                            осле переговоров с королем Вы получаете весточку от венгерской королевы с 
                            приглашением в ее покои. Вы соглашаетесь прийти. После начала разговора, Вы узнаете, 
                            что королева – <a href="#" alt="Ссылка" data-tooltip="${definitions['Русская княжна, дочь самого Киевского князя'][0]}">русская княжна, дочь самого киевского великого князя</a>.
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">
                            <figure  class="button-select">
                                <img class="button-select-img" src="assets/bg-button.png">
                                <figcaption class="button-select-text text-menu-button">Когда разговор прекращается, Вы решаете…</figcaption>                
                            </figure>
                        </button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="3">Оставить королеву и уйти в свои покои. Пожалуй, лучше не докучать ей лишней болтовней</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="0">Рассказать королеве о планах Вашего князя свергнуть брата королевы, сидящего на киевском престоле и воссесть на него самому</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer" value="7" trophy="5">Взять музыкальный инструмент, лежащий у постели королевы. Такой инструмент Вы видели у одного заезжего <a href="#" alt="Ссылка" data-tooltip="${definitions['Миннезингеры, труверы, трубадуры'][0]}">трубадура</a>-франка в Польше. Он даже научил Вас немного на нем играть. Кажется, он называется <a href="#" alt="Ссылка" data-tooltip="${definitions['Колесная лира'][0]}">«колесная лира»</a>. Нужно взять его и попробовать сыграть королеве что-то из русских мотивов. Устала она, наверное, жить так далеко от родных краев…</button></li>`,
        
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/8.png" alt="Геза II и Евфросинья Мстиславна принимают её брата Владимира Мстиславича">
                <figcaption class="text-img-author text-medium">Геза II (1130–1162) и Евфросинья Мстиславна (1130–1193) принимают её брата Владимира Мстиславича. Миниатюра из Лицевого летописного свода (XVI век).</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                    <div class='text text-small'> 
                    опрощавшись с королевой, поблагодарив ее за разговор, Вы возвращаетесь в свои покои. 
                    Ничего плохого не произошло, 
                    но и хорошего тоже . День завершен, и Вам пора отходить ко сну…
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>  
    `,
        "choice-2":` 
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/8.png" alt="Геза II и Евфросинья Мстиславна принимают её брата Владимира Мстиславича">
                <figcaption class="text-img-author text-medium">Геза II (1130–1162) и Евфросинья Мстиславна (1130–1193) принимают её брата Владимира Мстиславича. Миниатюра из Лицевого летописного свода (XVI век).</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterK.svg" alt="Буква K" class='img-letter-small'>
                    <div class='text text-small'> 
                    оролева, затаив на Вас и князя обиду, прощается с Вами. На следующий день Вы 
                    узнаете от короля, что он отказывается идти с Вами в поход, потому что, когда 
                    давал свое согласие, не знал о Ваших планах занять киевский стол.
                     Вы не знаете, что делать дальше: все мечты рухнули, осталось лишь доживать свой век…
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
        "choice-3":`
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterR.svg" alt="Буква Р" class='img-letter-small'>
                    <div class='text text-small'> 
                    астроганная королева очень благодарна Вам, она увидела в Вас своего друга и союзника 
                    <br>
                    <br>
                    Вам удалось впечатлить <a href="#" alt="Ссылка" data-tooltip="${definitions['Русская княжна, дочь самого Киевского князя'][0]}">королеву</a>. От воспоминаний родного края слезы сами 
                    невольно навернулись на ее глазах. Вы несколько часов провели за разговорами 
                    о Русской земле и тяготах чужбины. На прощание королева достала для Вас 
                    из сундука золотую шейную гривну. Удалившись в свои покои, Вы 
                    начали рассматривать ее, задумавшись о такой близкой, но такой далекой Русской земле… 
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/6.png" alt="Золотая шейная гривна">
                <figcaption class="text-img-author text-medium">Золотая шейная гривна</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    
    `,
    },

    {
        "page":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/9.png" alt="Похороны Андрея Боголюбского">
                <figcaption class="text-img-author text-medium">Похороны Андрея Боголюбского (ум. 1174 г.). Миниатюра из Лицевого летописного свода (XVI в.). Российская национальная библиотека</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
    </li>

    <li class="page">
        <div class="page-content content-text">
            <div class='main-text'> 
                <img src="assets/letter/letterCH.svg" alt="Буква Ч" class='img-letter-small'>
                <div class='text text-small'> 
                    ерез пару дней Вы узнаете о смерти одного из младших сыновей короля. Он и королева присылают Вам и князю приглашение на похороны принца.
                </div>
            </div>
            <button id="choice" class="menu__button text-medium">
                <figure  class="button-select">
                    <img class="button-select-img" src="assets/bg-button.png">
                    <figcaption class="button-select-text text-menu-button">Вы…</figcaption>
                </figure>
            </button>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>
        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="0">Публично заявлю, что не собираюсь идти на похороны этого сорванца. Нашли куда звать!</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="7" trophy="6">Необходимо принять приглашение и проводить в последний путь этого достойного юношу.</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer" value="2">Думаю, стоит их оставить наедине со своим горем, послав лишь скромное послание-соболезнование.</button></li>`,
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/9.png" alt="Съезд князей">
                <figcaption class="text-img-author text-medium">Похороны Андрея Боголюбского (ум. 1174 г.). Миниатюра из Лицевого летописного свода (XVI в.). Российская национальная библиотека.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterM.svg" alt="Буква M" class='img-letter-small'>
                    <div class='text text-small'> 
                    онаршая чета раздосадована Вашими словами и отказом. Вас лишают королевского 
                    благоволения и выгоняют из замка. Теперь Вас и Вашего князя ждет жизнь 
                    скитальцев без всякой надежды на занятие престола в одном из русских княжеств 
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
        "choice-2":` 
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterK.svg" alt="Буква К" class='img-letter-small'>
                    <div class='text text-small'> 
                    оролевская чета благодарна Вам за согласие. 
                    <br>
                    <br>
                    Согласившись отправиться на похороны сына короля, Вы должны были одеться 
                    подобающим образом. В качестве признания за Ваше согласие проводить принца
                     в последний путь, королевская чета прислала Вам черный мятель, 
                    который Вы накинули на свое одеяние, отправившись в собор. 
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/7.png" alt="Черный мятель">
                <figcaption class="text-img-author text-medium">Черный мятель</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>   
    `,
        "choice-3":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/9.png" alt="Похороны Андрея Боголюбского">
                <figcaption class="text-img-author text-medium">Похороны Андрея Боголюбского (ум. 1174 г.). Миниатюра из Лицевого летописного свода (XVI в.). Российская национальная библиотека.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterK.svg" alt="Буква К" class='img-letter-small'>
                    <div class='text text-small'> 
                    оролевская чета не поняла Ваш
                    отказ проводить в последний путь их
                    сына, но приняла Ваши соболезнования.
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
    },



    {
        "page":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/10.png" alt="Венгерский король">
                <figcaption class="text-img-author text-medium">Венгерский король Бела III (ок. 1148–1196). Миниатюра из Венгерской иллюстрированной хроники (вторая половина XIV в.). Национальная библиотека им. Сеченьи (Венгрия).</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
    </li>

    <li class="page">
        <div class="page-content content-text">
            <div class='main-text'> 
                <img src="assets/letter/letterCH.svg" alt="Буква Ч" class='img-letter-small'>
                <div class='text text-small'> 
                ерез какое-то время Вы узнаете, что венгерский король не готов отправиться с Вами в поход 
                на юго-западные русские княжества: он тоскует по своему ушедшему сыну, 
                да и князья прекратили вражду между собой и объединились вокруг 
                одного представителя династии. Король просит Вас простить его и попытать 
                счастья в других частях <a href="#" alt="Ссылка" data-tooltip="${definitions['Ойкумена'][0]}">ойкумены</a>.      .
                </div>
            </div>
            <button id="choice" class="menu__button text-medium">
                <figure  class="button-select">
                    <img class="button-select-img" src="assets/bg-button.png">
                    <figcaption class="button-select-text text-menu-button">Вы решаете…</figcaption>
                </figure>
            </button>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>
        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="8" trophy="7">Обратиться к одному из старших сыновей короля. Говорят, он <a href="#" alt="Ссылка" data-tooltip="${definitions['Поклонник византийских обычаев и нравов'][0]}">поклонник византийских обычаев и нравов</a> и, вполне возможно, имеет связи в <a href="#" alt="Ссылка" data-tooltip="${definitions['Царьград'][0]}">Царьграде</a>. Он мог бы помочь нам с князем туда добраться, чтобы продолжить поиск союзников в борьбе за престол…</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="0">Плюнуть королю в лицо. Тот король, что не умеет держать свои обещания, не достоин называться владыкой сей державы!</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer" value="3">Попросить у короля денег на боевых наемников, чтобы отправиться с ними завоевывать землю для князя</button></li>`,
        
        "choice-1":` 
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterD.svg" alt="Буква Д" class='img-letter-small'>
                    <div class='text text-small'> 
                    ействительно, сын венгерского короля оказался поклонником императорского двора. 
                    Там у него есть множество влиятельных знакомых. Принц соглашается помочь 
                    Вам отправиться в столицу <a href="#" alt="Ссылка" data-tooltip="${definitions['Держава Ромеев'][0]}">Державы Ромеев</a>
                    <br>
                    <br>
                    В знак благодарности за путешествие в Византию, Вы получаете от князя сафьяновые сапоги
                     с золотым узором. Купленные на одном из венгерских рынков у русского торговца, 
                    они пригодятся Вам при ромейском императорском дворе, где ценят красоту.
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/8.png" alt="Сафьяновые сапоги с золотым узором">
                <figcaption class="text-img-author text-medium">Сафьяновые сапоги с золотым узором</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>   
    `,
    "choice-2":`
    <li class="page">
    <div class="page-content content-img">
        <figure>
        <img class="content-img" src="assets/image/10.png" alt="Венгерский король">
        <figcaption class="text-img-author text-medium">Венгерский король Бела III (ок. 1148–1196). Миниатюра из Венгерской иллюстрированной хроники (вторая половина XIV в.). Национальная библиотека им. Сеченьи (Венгрия).</figcaption>                     
        </figure>                       
        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
    </div>
    </li>    

    <li class="page">
        <div class="page-content content-text">
            <div class='main-text'> 
                <img src="assets/letter/letterS.svg" alt="Буква C" class='img-letter-small'>
                <div class='text text-small'> 
                тража подбегает и арестовывает Вас. Последние дни 
                Вы проведете в сырой камере, пока Вас не казнят за оскорбление Его Величества…
                </div>
            </div>
            <button id="endBtn" class="menu__button text-medium" >
                <figure  class="button-select">
                    <img class="button-select-img" src="assets/bg-button.png">
                    <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                </figure>
            </button>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>
`,
    "choice-3":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
            <img class="content-img" src="assets/image/10.png" alt="Венгерский король">
            <figcaption class="text-img-author text-medium">Венгерский король Бела III (ок. 1148–1196). Миниатюра из Венгерской иллюстрированной хроники (вторая половина XIV в.). Национальная библиотека им. Сеченьи (Венгрия).</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterK.svg" alt="Буква K" class='img-letter-small'>
                    <div class='text text-small'> 
                    ороль соглашается дать Вам золото. Вы нанимаете на него дюжину конников-головорезов. 
                    Достигая пределов Руси, Вы встречаете войско местных князей, которые знали о Вашем появлении. 
                    Понимая, что окружены, Ваши наемники разворачивают коней и бегут обратно в венгерские владения. 
                    Вас вместе с князем берут в заложники и <a href="#" alt="Ссылка" data-tooltip="${definitions['Ослепляют'][0]}">ослепляют</a>. 
                    Вы больше не представляете опасности как политические соперники… 
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,

    },

    {
        "page":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/11.png" alt="Император Мануил">
                <figcaption class="text-img-author text-small">Император Мануил I Комнин (1118–1180) с супругой императрицей Марией Антиохийской (1145–1182). Миниатюра 1166 г. Ватиканская апостольская библиотека.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
    </li>

    <li class="page">
        <div class="page-content content-text">
            <div class='main-text'> 
                <img src="assets/letter/letterV.svg" alt="Буква B" class='img-letter-small'>
                <div class='text text-small'> 
                скоре Вы прибываете в Константинополь. Поражаясь великолепному и богатому убранству императорского 
                дворца, Вы приходите на аудиенцию к <a href="#" alt="Ссылка" data-tooltip="${definitions['Василевс'][0]}">василевсу</a>. Рассказывая императору о князе и о себе, Вы просите 
                его помочь вам золотом или войсками в деле завоевания княжеского престола. Взамен Вы обещаете 
                признать себя вассалом (hypospondos) <a href="#" alt="Ссылка" data-tooltip="${definitions['Василевс'][0]}">василевса</a> и участвовать в будущем во всех его военных походах.
                 Византийский император принимает Ваше предложение, однако, просит стать его вассалом сейчас же и
                  выполнить важную дипломатическую миссию, поехав в <a href="#" alt="Ссылка" data-tooltip="${definitions['Иерусалимское королевство'][0]}">Иерусалимское королевство</a> для достижения 
                  соглашения с крестоносцами о совместном <a href="#" alt="Ссылка" data-tooltip="${definitions['Завоевание Египта'][0]}">завоевании Египта</a>. Если Вы согласитесь, 
                Вам необходимо будет переговорить с <a href="#" alt="Ссылка" data-tooltip="${definitions['Аколуф варяжской гвардии'][0]}">аколуфом</a> варяжской гвардии для выделения Вам боевой охраны.
                </div>
            </div>
            <button id="choice" class="menu__button text-medium">
                <figure  class="button-select">
                    <img class="button-select-img" src="assets/bg-button.png">
                    <figcaption class="button-select-text text-menu-button">Что Вы намерены ответить <a href="#" alt="Ссылка" data-tooltip="${definitions['Василевс'][0]}">василевсу</a>?</figcaption>
                </figure>
            </button>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>
        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="5">Нужно ответить императору согласием. При этом его нужно удивить нашей храбростью! Мы откажемся от сопровождения варяжской гвардией. Оставив князя в этом великолепном дворце, я отправлюсь в <a href="#" alt="Ссылка" data-tooltip="${definitions['Отправлюсь в Святую землю'][0]}">Святую землю</a> лично, где встречусь с <a href="#" alt="Ссылка" data-tooltip="${definitions['Латинский, латиняне, латинство'][0]}">латинским</a> королем</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="10" trophy="8">Кто мы такие, чтобы отказывать великому православному правителю? Мы принимаем предложение. Я готов переговорить с <a href="#" alt="Ссылка" data-tooltip="${definitions['Аколуф варяжской гвардии'][0]}">аколуфом</a> сейчас же!</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer" value="0">Он хочет нас обмануть! Не стоит принимать его предложение! К тому же можно просто сгинуть по пути в Святую землю!</button></li>`,
        
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
            <img class="content-img" src="assets/image/11.png" alt="Император Мануил">
            <figcaption class="text-img-author text-medium">Император Мануил I Комнин (1118–1180) с супругой императрицей Марией Антиохийской (1145–1182). Миниатюра 1166 г. Ватиканская апостольская библиотека.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква B" class='img-letter-small'>
                    <div class='text text-small'> 
                    <a href="#" alt="Ссылка" data-tooltip="${definitions['Василевс'][0]}">асилевс</a> удивлен Вашей безрассудностью, но соглашается с Вами. Через пару дней, 
                    после кратковременного отдыха, Вы отправляетесь в <a href="#" alt="Ссылка" data-tooltip="${definitions['Отправлюсь в Святую землю'][0]}">Святую землю</a>
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
 
        "choice-2":` 
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterI.svg" alt="Буква И" class='img-letter-small'>
                    <div class='text text-small'> 
                    мператор доволен Вашим согласием. Он приказывает своим слугам сопроводить Вас к <a href="#" alt="Ссылка" data-tooltip="${definitions['Аколуф варяжской гвардии'][0]}">аколуфу</a>. 
                    Встретившись с ним в окружении грозных варягов, Вы получаете согласие на выделение боевого 
                    сопровождения. После кратковременного отдыха Вы отправляетесь в <a href="#" alt="Ссылка" data-tooltip="${definitions['Отправлюсь в Святую землю'][0]}">Святую землю</a>
                    <br>
                    <br>
                    Удовлетворив <a href="#" alt="Ссылка" data-tooltip="${definitions['Василевс'][0]}">василевса</a> своим согласием и получив одобрение от <a href="#" alt="Ссылка" data-tooltip="${definitions['Аколуф варяжской гвардии'][0]}">аколуфа</a> варяжской гвардии, 
                    Вы отправились в свои покои. Вскоре в Вашу дверь постучались. Вам преподнесли щит, обтянутый 
                    бархатом, подарок от императора. Слуга, принесший щит, передал Вам и устное послание от него:
                     в случае успешной дипломатической миссии, он хотел бы видеть Вас рядом с <a href="#" alt="Ссылка" data-tooltip="${definitions['Севастократор'][0]}">севастократором</a> в 
                     рядах лучших конников <a href="#" alt="Ссылка" data-tooltip="${definitions['Держава Ромеев'][0]}">Державы Ромеев</a> для скорого <a href="#" alt="Ссылка" data-tooltip="${definitions['Завоевание Египта'][0]}">похода на Египет</a>.
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/9.png" alt="Щит, обтянутый бархатом">
                <figcaption class="text-img-author text-medium">Щит, обтянутый бархатом</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>   
    `,

    "choice-3":`
    <li class="page">
    <div class="page-content content-img">
        <figure>
            <img class="content-img" src="assets/image/11.png" alt="Император Мануил">
            <figcaption class="text-img-author text-medium">Император Мануил I Комнин (1118–1180) с супругой императрицей Марией Антиохийской (1145–1182). Миниатюра 1166 г. Ватиканская апостольская библиотека.</figcaption>                     
        </figure>                       
        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
    </div>
    </li>    

    <li class="page">
        <div class="page-content content-text">
            <div class='main-text'> 
                <img src="assets/letter/letterV.svg" alt="Буква B" class='img-letter-small'>
                <div class='text text-small'> 
                <a href="#" alt="Ссылка" data-tooltip="${definitions['Василевс'][0]}">асилевс</a> разочарован в Вас и в Вашем князе. Без вашего согласия он не готов оказывать 
                свою помощь. Он не изгоняет вас из <a href="#" alt="Ссылка" data-tooltip="${definitions['Царьград'][0]}">Царьграда</a>, 
                но вы просто продолжаете тихо доживать свой век при императорском дворе…
                </div>
            </div>
            <button id="endBtn" class="menu__button text-medium" >
                <figure  class="button-select">
                    <img class="button-select-img" src="assets/bg-button.png">
                    <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                </figure>
            </button>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>
`,
    
    },
    {
        "page":`
        
                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/12.png" alt="Папа Александр III">
                            <figcaption class="text-img-author text-medium">Спинелло Аретино. Папа Александр III (1105–1181). Фреска. Вторая половина XIV в. Палаццо Публико, Сиена (Италия).</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterV.svg" alt="Буква В" class='img-letter-small'>
                            <div class='text text-small'> 
                            ы успешно добираетесь до <a href="#" alt="Ссылка" data-tooltip="${definitions['Отправлюсь в Святую землю'][0]}">Святой земли</a>, где встречаетесь с королем Иерусалима. Во время этой 
                            встречи Вы передаете ему послание от императора о совместном <a href="#" alt="Ссылка" data-tooltip="${definitions['Завоевание Египта'][0]}">походе на Египет</a>. Пробыв несколько 
                            дней в <a href="#" alt="Ссылка" data-tooltip="${definitions['Иерусалимское королевство'][0]}">Иерусалимском королевстве</a>, Вы отправляетесь обратно на корабле, выделенном для Вас 
                            как посланника <a href="#" alt="Ссылка" data-tooltip="${definitions['Василевс'][0]}">василевса</a>. Вскоре Вы возвращаетесь в <a href="#" alt="Ссылка" data-tooltip="${definitions['Царьград'][0]}">Царьград</a>, где получаете послание от 
                            Константинопольского Патриарха. Он просит 
                            Вас доставить свое письмо к Папе Римскому с отказом от <a href="#" alt="Ссылка" data-tooltip="${definitions['Отказ от переговоров об объединении Церквей'][0]}">переговоров об объединении Церквей</a>.
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">
                            <figure  class="button-select">
                                <img class="button-select-img" src="assets/bg-button.png">
                                <figcaption class="button-select-text text-menu-button">Что Вы ответите на эту просьбу?</figcaption>
                            </figure>
                        </button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="10" trophy="9">Негоже православному человеку отказывать Патриарху в просьбе. Конечно, я отвезу его послание <a href="#" alt="Ссылка" data-tooltip="${definitions['Латинский, латиняне, латинство'][0]}">латинянам</a></button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="0">Я сюда приехал, чтобы быть гонцом ромеев?! Если ему так надо, то пусть сам и отвозит свои послания!</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer" value="3">Я не буду выполнять поручения Константинопольского Патриарха! Я всегда был и буду за <a href="#" alt="Ссылка" data-tooltip="${definitions['Автокефалия Русской Церкви'][0]}">автокефалию Русской Церкви</a>!</button></li>`,
        
        "choice-1":`
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква В" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы соглашаетесь отвезти послание Патриарха Папе Римскому
                    <br>
                    <br>
                    Узнав о Вашем согласии выполнить столь важное для всего православия дело, 
                    <a href="#" alt="Ссылка" data-tooltip="${definitions['Его Божественное Всесвятейшество'][0]}">Его Божественное Всесвятейшество</a> даровал Вам Евангелие, 
                    украшенное золотом и драгоценными камнями, повелев и впредь хранить веру от <a href="#" alt="Ссылка" data-tooltip="${definitions['Латинский, латиняне, латинство'][0]}">латинства</a> 
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/10.png" alt="Евангелие, украшенное золотом и драгоценными камнями">
                <figcaption class="text-img-author text-medium">Евангелие, украшенное золотом и драгоценными камнями</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>      
    `,
        "choice-2":` 
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/13.png" alt="Папа Александр III">
                <figcaption class="text-img-author text-medium">Спинелло Аретино. Папа Александр III (1105–1181). Фреска. Вторая половина XIV в. Палаццо Публико, Сиена (Италия).</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                    <div class='text text-small'> 
                    атриарх огорчен Вашим отказом. Более того, Вы нанесли ему этим оскорбление. 
                    Вас перестают принимать при дворе, а также во всех приличных дворцах <a href="#" alt="Ссылка" data-tooltip="${definitions['Новый Рим'][0]}">Нового Рима</a>. 
                    Ваша миссия завоевать престол для своего князя отныне совершенно невыполнима… 
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                <figure  class="button-select">
                    <img class="button-select-img" src="assets/bg-button.png">
                    <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                </figure>
            </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
        "choice-3":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/12.png" alt="Папа Александр III">
                <figcaption class="text-img-author text-medium">Спинелло Аретино. Папа Александр III (1105–1181). Фреска. Вторая половина XIV в. Палаццо Публико, Сиена (Италия).</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterK.svg" alt="Буква К" class='img-letter-small'>
                    <div class='text text-small'> 
                    сожалению или к счастью, в Ваше время мечтать об автокефалии не приходится. Да и дело даже 
                    не в этом. Своей позицией Вы отвернули от себя не только Константинопольского Патриарха, 
                    но и императора, который более не понимает, зачем он должен оказывать поддержку тем, 
                    кто не желает считать Русь духовной дочерью Византийской империи 
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                <figure  class="button-select">
                    <img class="button-select-img" src="assets/bg-button.png">
                    <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                </figure>
            </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
    },
    {
        "page":`
        
                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/13.png" alt="Поход на Киев черниговских князей">
                            <figcaption class="text-img-author text-medium">Поход на Киев черниговских князей Ольговичей в союзе с половцами против князей Владимировичей (Мономаховичей). 1136 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук.</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterV.svg" alt="Буква В" class='img-letter-small'>
                            <div class='text text-small'> 
                            озвращаясь в Константинополь после поездки в Рим, Вы узнаете, что император не готов поддержать 
                            Вас и Вашего князя военными силами. Однако, он одаривает Вас золотом, предлагая попытать счастья у 
                            <a href="#" alt="Ссылка" data-tooltip="${definitions['Половцы'][0]}">половцев</a>. Вы благодарите 
                            <a href="#" alt="Ссылка" data-tooltip="${definitions['Василевс'][0]}">василевса</a> за оказанный прием и идете в 
                            <a href="#" alt="Ссылка" data-tooltip="${definitions['Итальянские кварталы Золотого Рога'][0]}">итальянские кварталы Золотого Рога</a>, 
                            где находите купеческий корабль, готовый отвезти вас на север Черного моря. Вы подбрасываете 
                            в воздух звонкую <a href="#" alt="Ссылка" data-tooltip="${definitions['Номисма'][0]}">номисму</a>, и вот вы уже на корабле. 
                            Прибывая в <a href="#" alt="Ссылка" data-tooltip="${definitions['Кыпчакские степи'][0]}">кыпчакские степи</a>, Вы и Ваш князь 
                            отправляетесь к хану одной из половецких орд, который ранее был союзником отца Вашего молодого князя. 
                            Доехав до половецкого лагеря, Вы идете на встречу с ханом. Он радушно принимает Вас и князя, 
                            сына своего погибшего друга. Вы сообщаете ему о своих планах и просите о помощи. Он соглашается 
                            пойти вместе с вами на русские княжества, однако просит об одолжении: 
                            вы должны поучаствовать в его борьбе с соседним половецким кланом и разгромить его.
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">
                            <figure  class="button-select">
                                <img class="button-select-img" src="assets/bg-button.png">
                                <figcaption class="button-select-text text-menu-button">Что скажете?</figcaption>
                            </figure>
                        </button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="7" trophy="10">Конечно же, мы согласны! Я знаю, что этот клан при любых усобицах и <a href="#" alt="Ссылка" data-tooltip="${definitions['Которы'][0]}">которах</a> нападал на Русскую землю и уводил в полон многих людей… Пришла пора наказать их!</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="50">Нет! Мы зашли слишком далеко! Уж лучше мы сгинем в степях, чем пойдем вместе с <a href="#" alt="Ссылка" data-tooltip="${definitions['Половцы'][0]}">половцами</a> на Русскую землю!</button></li>`,
        "btn-3":``,
        
        "choice-1":`
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква В" class='img-letter-small'>
                    <div class='text text-small'> 
                    скоре вы выступаете в поход. Пара дней, и вот Вы напротив вражеского войска. 
                    Тяжелый бой, тысячи взмахов мечами, но победа за вами, враги повержены!
                    <br>
                    <br>
                    Победив враждебный половецкий клан, Вы пируете вместе с ханом дружественной Вам орды. 
                    По окончанию пира, 
                    хан дарит Вам в награду за проявленную на поле брани доблесть свою серебряную чашу
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/11.png" alt="Серебряная чаша половецкого хана">
                <figcaption class="text-img-author text-medium">Серебряная чаша половецкого хана</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>      
    `,
        "choice-2":` 
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/13.png" alt="Поход на Киев черниговских князей">
                <figcaption class="text-img-author text-medium">Поход на Киев черниговских князей Ольговичей в союзе с половцами против князей Владимировичей (Мономаховичей). 1136 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterD.svg" alt="Буква Д" class='img-letter-small'>
                    <div class='text text-small'> 
                    остойный уважения поступок, но, к сожалению, ставящий крест на достижении Вашей цели – 
                    завоевании княжества для своего князя. Тем не менее, Вы вошли в историю. 
                    Русская Церковь причислила Вас вместе с князем за ваше благородное решение к лику святых!
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
        "choice-3":`
        <li class="page">
        
        </li>
    `,
    },
    {
        "page":`
        
                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/14.png" alt="Появление звезды (кометы Галлея)">
                            <figcaption class="text-img-author text-medium">Появление звезды (кометы Галлея), восходившей 7 дней и предвещавшей княжеские междоусобицы и нашествие половцев на Русскую землю. 862–1206 гг. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук.</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                            <div class='text text-small'> 
                            ока Вы спите, к Вам тайно пробирается одна <a href="#" alt="Ссылка" data-tooltip="${definitions['Половцы'][0]}">половецкая</a> девушка, с которой Вы вчера познакомились 
                            на ханском пиру. Она будит Вас и сообщает новость о желании хана убить Вас и Вашего князя. 
                            На стойбище, по ее словам, есть три боевых коня, она хочет сбежать вместе с вами.
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">
                            <figure  class="button-select">
                                <img class="button-select-img" src="assets/bg-button.png">
                                <figcaption class="button-select-text text-menu-button">Что Вы намерены делать?</figcaption>
                            </figure>
                        </button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="0">Это все вранье! Как она посмела будить меня и рассказывать всякие глупости! Хан – мой друг, он не может нас предать!</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="2">Убить нас?! Княже, доставай меч! Будем биться!</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer" value="10" trophy="11,12">Что ж… Чего можно было ждать от <a href="#" alt="Ссылка" data-tooltip="${definitions['Половцы'][0]}">половцев</a>? Уже много лет они терзают Русскую землю и хотят еще… Не бывать этому! Мы сбежим сейчас отсюда, но потом, когда княжество будет наше, мы соберем всех князей Русской земли, чтобы разгромить враждебные нам половецкие кланы! В путь!</button></li>`,
        
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/14.png" alt="Появление звезды (кометы Галлея)">
                <figcaption class="text-img-author text-medium">Появление звезды (кометы Галлея), восходившей 7 дней и предвещавшей княжеские междоусобицы и нашествие половцев на Русскую землю. 862–1206 гг. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                    <div class='text text-small'> 
                    <a href="#" alt="Ссылка" data-tooltip="${definitions['Половцы'][0]}">оловчанка</a> с грустью покидает Вас. К сожалению, 
                    Вы ее больше не увидите. Впрочем, Вы больше ничего не увидите… 
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
        "choice-2":` 
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/14.png" alt="Появление звезды (кометы Галлея)">
                <figcaption class="text-img-author text-medium">Появление звезды (кометы Галлея), восходившей 7 дней и предвещавшей княжеские междоусобицы и нашествие половцев на Русскую землю. 862–1206 гг. Миниатюра из Радзивилловской летописи (рукопись конца XV в.). Библиотека Российской академии наук.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква В" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы приняли смелое решение, но совершенно безрассудное. За несколько минут 
                    Вас и Вашего князя убивает стража ханского шатра. Ваш путь окончен 
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
        "choice-3":`
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква В" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы будите князя, а после, втроем, вместе с прекрасной половчанкой, пробираетесь 
                    через лагерь к стойбищу. Здесь вы садитесь на трех боевых половецких коней и отправляетесь 
                    на север, в <a href="#" alt="Ссылка" data-tooltip="${definitions['Новгородская земля'][0]}">Новгородскую землю</a>, 
                    надеясь снискать расположение местного князя и купечества…
                    <br>
                    <br>
                    В седле Вы чувствуете себя прекрасно. Уж что-что, а <a href="#" alt="Ссылка" data-tooltip="${definitions['Половцы'][0]}">кони у половцев</a> великолепные!
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/12.png" alt="Боевой половецкий конь">
                <figcaption class="text-img-author text-medium">Боевой половецкий конь</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterB.svg" alt="Буква Б" class='img-letter-small'>
                    <div class='text text-small'> 
                    лагодаря Вас за спасение своей жизни, князь дарит Вам свою княжескую круглую шапку 
                    с меховым околышем, говоря, 
                    что в новгородских владениях гораздо холоднее, чем в тех землях, где Вы бывали ранее. 
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/13.png" alt="Княжеская круглая шапка с меховым околышем">
                <figcaption class="text-img-author text-medium">Княжеская круглая шапка с меховым околышем</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>
    `,
    },
    {
        "page":`
        
                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/15.png" alt="Русь в 1237 году накануне монгольского нашествия.">
                            <figcaption class="text-img-author text-medium">Русь в 1237 г. накануне монгольского нашествия.</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                            <div class='text text-small'> 
                            осле долгого пути через <a href="#" alt="Ссылка" data-tooltip="${definitions['Переяславское княжество'][0]}">Переяславское</a>, 
                            <a href="#" alt="Ссылка" data-tooltip="${definitions['Черниговское княжество'][0]}">Черниговское</a>, 
                            <a href="#" alt="Ссылка" data-tooltip="${definitions['Муромо-Рязанское княжество'][0]}">Муромо-Рязанское</a> и 
                            <a href="#" alt="Ссылка" data-tooltip="${definitions['Владимиро-Суздальское княжество'][0]}">Владимиро-Суздальское</a> 
                            княжества вы прибываете в Новгород. 
                            Новгородский князь и новгородцы встречают вас очень дружелюбно. 
                            После сытного обеда Вы просите новгородского князя оказать Вам поддержку в завоевании престола для 
                            своего князя. Он соглашается Вам 
                            помочь, но при одном условии: Вы пойдете с ним в <a href="#" alt="Ссылка" data-tooltip="${definitions['Поход на враждебный Новгороду Полоцк'][0]}">поход на враждебный Новгороду Полоцк</a>.
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">
                            <figure  class="button-select">
                                <img class="button-select-img" src="assets/bg-button.png">
                                <figcaption class="button-select-text text-menu-button">Что Вы намерены сказать?</figcaption>
                            </figure>
                        </button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="0">Участвовать в чужом походе? Мы лучше поищем других князей, которые согласятся помочь нам, не надеясь, что мы сгинем в гуще сражений за их интересы!</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="7" trophy="13">Что ж, если таково предложение <a href="#" alt="Ссылка" data-tooltip="${definitions['Новгородская земля'][0]}">Новгорода</a>, мы согласны. Надеюсь, новгородский князь сдержит свое слово ⇒ Князь удовлетворен Вашим решением. После нескольких дней отдыха Вы отправляетесь <a href="#" alt="Ссылка" data-tooltip="${definitions['Поход на враждебный Новгороду Полоцк'][0]}">походом на Полоцк</a></button></li>`,
        "btn-3":``,
        
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/15.png" alt="Русь в 1237 году накануне монгольского нашествия.">
                <figcaption class="text-img-author text-medium">Русь в 1237 г. накануне монгольского нашествия.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterD.svg" alt="Буква Д" class='img-letter-small'>
                    <div class='text text-small'> 
                    овольно опрометчивое решение. Вы даже не знаете, готов ли вас 
                    поддержать хотя бы кто-то из русских князей, 
                    но разбрасываетесь потенциальными союзниками, как будто их у вас тысячи 
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
        "choice-2":` 
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterK.svg" alt="Буква К" class='img-letter-small'>
                    <div class='text text-small'> 
                    нязь удовлетворен Вашим решением. После нескольких дней отдыха Вы отправляетесь 
                    <a href="#" alt="Ссылка" data-tooltip="${definitions['Поход на враждебный Новгороду Полоцк'][0]}">походом на Полоцк</a>
                    <br>
                    <br>
                    Согласившись отправиться с <a href="#" alt="Ссылка" data-tooltip="${definitions['Поход на враждебный Новгороду Полоцк'][0]}">походом на Полоцк</a>, Вы снискали уважение новгородского князя. 
                    Взамен он пообещал помочь Вам в завоевании какого-нибудь южного русского княжества. 
                    Чувствуя свою признательность, князь также одарил Вас, Вашего князя и приехавшую с Вами 
                    половчанку тремя шубами, крытыми шелком, с меховым отложным воротником. 
                    Теперь Вы действительно похожи на выдающегося боярина! 
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/14.png" alt="Шуба, крытая шелком, с меховым отложным воротником">
                <figcaption class="text-img-author text-medium">Шуба, крытая шелком, с меховым отложным воротником</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>  
    `,
        "choice-3":`
        <li class="page">
            
        </li>
    `,
    },
    {
        "page":`
        
                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/16.png" alt="Поединок Пересвета с Челубеем на Куликовом поле">
                            <figcaption class="text-img-author text-medium">Авилов М. И. Поединок Пересвета с Челубеем на Куликовом поле. 1943 г. Государственный Русский музей.</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                            <div class='text text-small'> 
                            оход был сорван скоропостижной смертью новгородского князя. Тем не менее, дружина уже 
                            настроена на бой. Часть дружинников бывшего князя готова стать дружиной Вашего князя, 
                            если он согласится <a href="#" alt="Ссылка" data-tooltip="${definitions['Принять их, переметнуться'][0]}">принять их</a> и завоевать с ними любое южное княжество. Ваш князь без раздумий 
                            принимает их к себе. Ваше войско начинает двигаться на юг. Вы решаете, что наилучшим 
                            приобретением будут земли Галицкого и Волынского княжеств, когда узнаете, что в Венгрии правит 
                            Ваш давний друг – один из старших сыновей короля, который помог Вам отплыть в Константинополь. 
                            Так, захватив Галич и Волынь, Ваш князь сможет стать влиятельным правителем юга Руси, 
                            у которого будут в союзниках венгерский король и византийский император! Более того, 
                            он сможет отомстить половцам! Пройдя земли <a href="#" alt="Ссылка" data-tooltip="${definitions['Смоленское княжество'][0]}">Смоленского</a>, 
                            <a href="#" alt="Ссылка" data-tooltip="${definitions['Полоцкое княжество'][0]}">Полоцкого</a> и 
                            <a href="#" alt="Ссылка" data-tooltip="${definitions['Турово-Пинское княжество'][0]}">Турово-Пинского</a> княжеств, 
                            Вы приближаетесь к <a href="#" alt="Ссылка" data-tooltip="${definitions['Волынь'][0]}">Волыни</a>. Навстречу Вам 
                            выходит враждебное войско. Оно больше, чем Вы могли ожидать, дружина Вашего князя тоже напугана.
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">
                            <figure class="button-select">
                                <img class="button-select-img" src="assets/bg-button.png">
                                <figcaption class="button-select-text text-menu-button">Что же делать?</figcaption>
                            </figure>
                        </button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="10" trophy="14">Нужно сражаться. Вперед, за мной, храброе воинство!</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="0">Вот он вожделенный момент, которого я так ждал! Нужно <a href="#" alt="Ссылка" data-tooltip="${definitions['Принять их, переметнуться'][0]}">переметнуться</a> к вражескому князю и сделаться его боярином. Он одарит меня землями и сделает богатым!</button></li>`,
        "btn-3":``,
        
        "choice-1":`
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                    <div class='text text-small'> 
                    омолившись, Вы взбираетесь на своего коня. Надеясь, прорвать оборону противника по центру, 
                    Вы во главе конницы мчитесь в атаку на передние ряды вражеских войск. Ваш план, дерзкий и 
                    неожиданный для противников, раскалывает их воинство на две части, беспомощные друг без друга. 
                    Вы одерживаете поистине героическую победу, которая навсегда войдет в историю нашего Отечества!
                    <br>
                    <br>
                    В качестве награды от князя, Вы получаете большое земельное владение в тех землях, которыми он отныне правит.
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/15.png" alt="Земельное владение">
                <figcaption class="text-img-author text-medium">Земельное владение</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>      

    `,
        "choice-2":` 
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/16.png" alt="Поединок Пересвета с Челубеем на Куликовом поле">
                <figcaption class="text-img-author text-medium">Авилов М. И. Поединок Пересвета с Челубеем на Куликовом поле. 1943 г. Государственный Русский музей.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква В" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы решили переметнуться во вражеский стан. Ночью Вы взбираетесь на своего коня и скачете 
                    в лагерь противника. Здесь Вас встречает вражеский князь, который смотрит на Вас с отвращением, 
                    называя Вас Иудой, продавшимся за тридцать сребреников. Он изгоняет Вас из лагеря. 
                    Что делать дальше, для Вас совершенно непонятно… Кому нужен такой предатель, как Вы?
                    </div>
                </div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
        "choice-3":`
        <li class="page">
            
        </li>
    `,
    },
    {
        "page":`
        
                <li class="page">
                    <div class="page-content content-img">
                        <figure>
                            <img class="content-img" src="assets/image/17.png" alt="Папский нунций подносит князю Даниилу Романовичу Галицкому королевскую корону">
                            <figcaption class="text-img-author text-medium">Папский нунций подносит князю Даниилу Романовичу Галицкому (1201–1264) королевскую корону. 1253 г. Гравюра Ю. Шюблера по рисунку К. Лебедева из собрания иллюстраций журнала «Нива». 1894 г.</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                            <div class='text text-small'> 
                            осле захвата <a href="#" alt="Ссылка" data-tooltip="${definitions['Волынь'][0]}">Волыни</a> 
                            Вы вместе с князем захватываете и <a href="#" alt="Ссылка" data-tooltip="${definitions['Галич'][0]}">Галич</a>, 
                            объединяя два княжества в единое 
                            целое – в <a href="#" alt="Ссылка" data-tooltip="${definitions['Волынь'][0]}">Галицко-Волынское княжество</a>. 
                            Да, цель достигнута, Ваш <a href="#" alt="Ссылка" data-tooltip="${definitions['Князья-изгои'][0]}">князь-изгой</a> отныне Галицко-Волынский
                             князь, славный представитель рода <a href="#" alt="Ссылка" data-tooltip="${definitions['Семейное владение Рюриковичей'][0]}">Рюриковичей</a>, 
                             которого уважают другие представители династии, а также иноземные правители. 
                            Даже Папа Римский желает даровать Вашему князю титул <a href="#" alt="Ссылка" data-tooltip="${definitions['Король Руси'][0]}">короля Руси</a> вместе с короной!
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">
                            <figure  class="button-select">
                                <img class="button-select-img" src="assets/bg-button.png">
                                <figcaption class="button-select-text text-menu-button">Не пора ли Вам уходит на покой?</figcaption>
                            </figure>
                        </button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer" value="10">Да, я слишком устал. Пора завести семью и почивать в своих владениях</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer" value="20" trophy="15">Кажется, князь предлагал стать мне его покладником… Может, все же принять его предложение?..</button></li>`,
        "btn-3":``,
        
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/17.png" alt="Папский нунций подносит князю Даниилу Романовичу Галицкому королевскую корону">
                <figcaption class="text-img-author text-medium">Папский нунций подносит князю Даниилу Романовичу Галицкому (1201–1264) королевскую корону. 1253 г. Гравюра Ю. Шюблера по рисунку К. Лебедева из собрания иллюстраций журнала «Нива». 1894 г.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква В" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы проделали славный путь и вполне заслуженно ушли на покой. Гордитесь своими успехами: 
                    Ваше имя, легендарного боярина Василько, навсегда войдет в историю! 
                    </div>
                </div>
                <div id="endOfGame"></div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><iюmg src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

    `,
        "choice-2":` 
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/17.png" alt="Папский нунций подносит князю Даниилу Романовичу Галицкому королевскую корону">
                <figcaption class="text-img-author text-medium">Папский нунций подносит князю Даниилу Романовичу Галицкому (1201–1264) королевскую корону. 1253 г. Гравюра Ю. Шюблера по рисунку К. Лебедева из собрания иллюстраций журнала «Нива». 1894 г.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterV.svg" alt="Буква В" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы приходите к князю и говорите ему о своем согласии стать его покладником. 
                    Князь с великой радостью принимает Вас и дарует этот чин 
                    <br>
                    <br>
                    Согласившись быть покладником князя, Вы приобретаете огромное влияние при его дворе. Отныне 
                    Вы правая рука правящего князя, легендарный боярин Василько, чье имя навсегда останется в истории!
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/16.png" alt="Чин покладника">
                <figcaption class="text-img-author text-medium">Чин покладника</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>      

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                    <div class='text text-small'> 
                    оздравляю, Вы прошли квест до самого конца! Вы преодолели все препятствия 
                    и вместе с Вашим героев достигли многих успехов!
                    <br>
                    <br>
                    Возможно, Вам теперь интересно узнать, как еще могла сложиться судьба дружинника Василько и его князя?
                    </div>
                </div>
                <div id="endOfGame"></div>
                <button id="endBtn" class="menu__button text-medium" >
                    <figure  class="button-select">
                        <img class="button-select-img" src="assets/bg-button.png">
                        <figcaption class="button-select-text text-menu-button">Начать игру заново</figcaption>
                    </figure>
                </button>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>
    `,
        "choice-3":`
        
    `,
    },
    
];
