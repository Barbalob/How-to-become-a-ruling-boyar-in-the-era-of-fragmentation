export const pages = [
    {
        "page":``,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer">Нужно попытаться найти дружелюбных князей, готовых помочь мальчику вернуть отчину. Уверен, такие найдутся!</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer">Необходимо обратиться за помощью к польскому королю, с которым у нас есть давние связи. Конечно, за свою помощь он попросит золото, серебро или часть земельных владений, но, вернув свои земли и заручившись верной дружиной, мы сможем легко вернуть все отданное обратно. Тем паче, что я знаю язык Ляхов. Я знал, что это мне не единожды пригодиться!</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer">Если честно, я, все-таки, не понимаю, зачем мне всё это нужно. Рисковать своей жизнью ради этого мальчика… Пойду-ка я лучше служить к другому князю, обзаведусь слугами и умру никому неизвестным боярином!</button></li>`,
        "choice-1":`
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
                    Отправив гонцов к ближайшим
                    князьям, Вы либо не получаете
                    никаких известий, либо получаете послания с отказами в помощи. 
                    Еще бы: кому нужно поддерживать молодого князя-изгоя, да еще и без большого воинства! 
                    А вот к западу от Русских земель такие силы как раз имеются. Силы, готовые за обещания земель или золота, помочь заполучить Вашему князю вожделенный престол. 
                    Вы отправляйтесь в Польшу и прибываете ко двору польского короля из династии Пястов, который довольно сносно Вас принимает, но, стоит отметить, без особого энтузиазма.
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
                    рибыв ко двору польского короля из
                    династии Пястов, Вы очаровываите
                    монарха и придворных своим знанием языка и обычаев. Польский король выделяет Вам и князю лучшие покои в своем замке, а также положительно отвечает на Ваше предложение о военном союзе. 
                    <br>
                    <br>
                    Впечатленный Вашим дипломатическим даром и даром толмача, князь не может сдержать своего восхищения.
                    После аудиенции у польского короля Вы возвращайтесь в свои покои, куда Вам приносят княжеский вышитый пояс в качестве знака высшей признательности. 
                    Так, Вы не просто завоевали уважение своего князя, но и снискали его милость, что, конечно же, не применет сказаться на Вашем статусе и положении как при иноземных дворах, так и при будущем дворе Вашего князя.
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
                <figcaption class="text-img-author text-medium">Отравление Ростислава Владимировича Тмутараканского, первого князя-изгоя, греческим стратигом. Миниатюра из Радзивилловской летописи (XV век)</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterB.svg" alt="Буква И" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы не захотели прожить 
                    по-настоящему увлекательную и
                    полную приключений жизнь. Вы умерли в безвестности, и не один летописец не счел нужным упомянуть о Вас хотя бы вкратце.
                    </div>
                </div>
                <button id="choice" class="menu__button text-medium" onclick="location.reload(); return false;">Начать игру заново</button>
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
                <figcaption class="text-img-author text-medium">Дуэль на мечах и баклерах (малых круглых щитах). Миниатюра из Манесского кодекса (ок. 1300 г.).</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
    </li>

    <li class="page">
        <div class="page-content content-text">
            <div class='main-text'> 
                <img src="assets/letter/letterY.svg" alt="Буква У" class='img-letter-small'>
                <div class='text text-small'> 
                тром Вы просыпаетесь в своих покоях от стука в дверь. Открыв ее, 
                Вы видите перед собой придворного с посланием от короля. 
                Молодой правитель решил испытать Вас на прочность: он хочет устроить 
                турнир на мечах, в котором Вы должны доказать, что польская армия встает 
                на сторону умелого воина, а не слабака, не умеющего держать оружие!
                </div>
            </div>
            <button id="choice" class="menu__button text-medium">Что будете делать?</button>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>`,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer">Пора хватать князя в охапку и бежать из этой Польши! Еще русские витязи на их турнирах не дрались!</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer">Нужно согласиться на предложение короля. Однако, если он позволил себе такое, то чем мы хуже? Пусть в конце поединков он сам выйдет сразиться со мной на мечах!</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer">Я соглашусь биться на турнире с польскими рыцарями! Посмотрим, кто из нас сильнее!</button></li>`,
        
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/5.png" alt="Дуэль на мечах">
                <figcaption class="text-img-author text-medium">Дуэль на мечах и баклерах (малых круглых щитах). Миниатюра из Манесского кодекса (ок. 1300 г.)</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterB.svg" alt="Буква B" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы прибегаете к князю, но тот смотрит на Вас, как на испуганного зайца. 
                    Ему пришлось самому взять в руки меч и пойти на турнир. Удивившись, монарх, 
                    тем не менее, разрешил поединки. В одном из них Ваш князь был смертельно ранен 
                    и вскоре отошел в мир иной. Вы же, оказавшись без князя 
                    и прослыв трусом на чужбине, всю оставшуюся жизнь провели серой мышью, 
                    над которой все насмехались.
                    </div>
                </div>
                <button id="choice" class="menu__button text-medium" onclick="location.reload(); return false;">Начать игру заново</button>
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
                    на мечах, он с радостью принимает Ваше предложение. В конце турнира, 
                    когда все соперники побеждены Вами, он выходит с королевским мечом к Вам 
                    навстречу. Происходит короткая, но жесткая схватка, из которой Вы выходите победителем!
                    <br>
                    <br>
                    Молодой польский король впечатлен Вашей храбростью и умением биться на мечах. 
                    В качестве знака своего почтения он преподносит Вам кольчугу, выкованную его 
                    лучшими кузнецами. Не изменив известиям об удали русских ратников, 
                    Вы с гордостью примеряете ее на себя: отныне Вам не страшны почти 
                    любые стрелы и палицы!
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
                    <img src="assets/letter/letterH.svg" alt="Буква H" class='img-letter-small'>
                    <div class='text text-small'> 
                    е остался в стороне от похвал и Ваш князь: впечатленный Вашими боевыми умениями, он, 
                    вспоминая рассказы из детства о великом князе Владимире Святославиче, 
                    награждает Вас именем «великого мужа». Отныне, Вы – храбрейший из храбрых не только 
                    в окружении молодого князя, но и во всех Польских землях. Слава о Вас начинает распространяться 
                    по всем краям и весям от польских берегов Вислы до испанских берегов Эбро. 
                    Миннезингеры, труверы, трубадуры и гусельники начинают слагать о Вас песни, разнося их 
                    по всей Европе! 
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
                    урнир заканчивается, и все Ваши противники повержены Вами. 
                    Польский король аплодирует Вам, однако в душе переживает, что не отважился 
                    скрестить с Вами мечи. Тем не менее, он впечатлен Вашей храбростью и 
                    не стесняется хвалебных слов, посвященных Вашей силе и отваге.
                    <br>
                    <br>
                    Не остался в стороне от похвал и Ваш князь: впечатленный Вашими боевыми умениями, он, 
                    вспоминая рассказы из детства о великом князе Владимире Святославиче, награждает Вас именем 
                    «великого мужа». Отныне, Вы – храбрейший из храбрых не только в окружении молодого князя, 
                    но и во всех Польских землях. Слава о Вас начинает распространяться по всем краям и весям 
                    от польских берегов Вислы до испанских берегов Эбро. Миннезингеры, труверы, трубадуры 
                    и гусельники начинают слагать о Вас песни, разнося их по всей Европе!
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/3.png" alt="Звание «Великого мужа»">
                <figcaption class="text-img-author text-medium">Звание «Великого мужа»</figcaption>                     
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
                            <figcaption class="text-img-author text-medium">Пленение поляками при посредничестве Петра Власта (ум. 1153 г.) Володаря Ростиславича Перемышльского (ум. 1124 г.). 1122 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.)</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterH.svg" alt="Буква H" class='img-letter-small'>
                            <div class='text text-small'> 
                            а следующий день Вы с молодым князем решили прогуляться по призамковой 
                            роще. Внезапно на вас нападает пара-тройка легковооруженных людей. В одном 
                            из нападавших Вы узнаете слугу князя, что вчера был повержен Вами 
                            в одном из поединков.
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">Что же делать?</button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer">Надо вдвоем отбиваться от врагов! От моего трупа князю на чужбине будет мало проку. Победим заговорщиков, а дальше подумаем, что делать…</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer">Князь, беги! Попробую один отбиться от врагов, а потом найти князя в безопасных покоях замка.</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer">Я и не ожидал, что все будет настолько опасно! Надо бросать меч и бежать в лес!</button></li>`,
        
        "choice-1":`
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterB.svg" alt="Буква B" class='img-letter-small'>
                    <div class='text text-small'> 
                    месте с князем Вы сражаетесь с врагами. Вскоре все они лежат на земле поверженные.
                    <br>
                    <br>
                    Ошеломленный князь медленно садится на траву, слегка окропленную вечерней росой. 
                    Он не испуган, но весьма подавлен случившимся. Понимая, что в Польском королевстве стало 
                    небезопасно, Вы предлагаете князю отправиться в Венгрию, где правит династия Арпадов. Князь, 
                    соглашаясь на ночной побег из замка, дает Вам в качестве своего дара корзно с золотой обшивкой 
                    и красным подкладом с петлицей. Взяв его, Вы вместе с князем спускаетесь по винтовой лестнице 
                    замка и направляетесь прямиком к конюшне. Оседлав коней, вы пускаетесь на юг – 
                    в земли Венгерского королевства.
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
                    <img src="assets/letter/letterB.svg" alt="Буква B" class='img-letter-small'>
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
                    корзно с золотой обшивкой и красным подкладом с петлицей. Взяв его, Вы вместе с князем 
                    спускаетесь по винтовой лестнице замка и направляетесь прямиком к конюшне. 
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
                <figcaption class="text-img-author text-medium">Пленение поляками при посредничестве Петра Власта (ум. 1153 г.) Володаря Ростиславича Перемышльского (ум. 1124 г.). 1122 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.).</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterB.svg" alt="Буква B" class='img-letter-small'>
                    <div class='text text-small'> 
                    ы сбегаете в лес, изредка оглядываясь назад. Вы видите, что Вашего князя убивают. 
                    На второй день блужданий по лесу Вы набредаете на неприметный домик знахаря. 
                    Всю оставшуюся жизнь Вы живете у него, помогая готовить снадобья 
                    и пытаясь забыть то, что совершили.
                    </div>
                </div>
                <button id="choice" class="menu__button text-medium" onclick="location.reload(); return false;">Начать игру заново</button>
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
                            <figcaption class="text-img-author text-medium">Бегство полков Владимира Володаревича Галицкого (ум. 1153 г.) от войск Изяслава Мстиславича Киевского (ум. 1154 г.) и венгерского короля Гезы II (1130–1162) из-под Санока и избиение бегущих. 1152 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.)</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <div class='text text-small'> 
                            Через несколько дней пути Вы со своим князем прибываете ко двору 
                            венгерского монарха. На следующий день, отдохнув в выделенных покоях, 
                            Вы начинаете вести переговоры. Как ни странно, Вы обнаруживаете, 
                            что пришлись ко двору: венгерское войско как раз ведет войну 
                            с дружинами князей юго-западной Руси. Так как до венгерского правителя 
                            дошли слухи о Вашей доблести на польском боевом турнире, 
                            он желает видеть такого бравого воина в своих рядах, обещая, 
                            что после победы над русскими князьями один из княжеских столов достанется 
                            Вашему князю. 
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">Что скажете на предложение короля?</button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer">Думаю, лучше не стоит сейчас идти в поход. Мы еще не готовы. Нужно переждать несколько месяцев.</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer">Это предложение нам по душе! Пора молодому князю занять свое истинное место среди Рюриковичей! Седлайте коней! Мы разгромим эту горстку русских князей!</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer">Идти на кого-то войной?! Ну нет… Князь еще слишком молод, чтобы участвовать в боевых действиях. Правда, князь?!</button></li>`,
        
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/7.png" alt="Бегство полков Владимира Галицкого">
                <figcaption class="text-img-author text-medium">Бегство полков Владимира Володаревича Галицкого (ум. 1153 г.) от войск Изяслава Мстиславича Киевского (ум. 1154 г.) и венгерского короля Гезы II (1130–1162) из-под Санока и избиение бегущих. 1152 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.)</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterB.svg" alt="Буква B" class='img-letter-small'>
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
                    <img src="assets/letter/letterB.svg" alt="Буква B" class='img-letter-small'>
                    <div class='text text-small'> 
                    енгерский король явно впечатлен Вашей решительностью, однако просит Вас 
                    повременить с походом: нужно собрать силы, и только тогда нанести 
                    мощный удар противнику.
                    <br>
                    <br>
                    Несмотря на то, что король решил отложить поход, он впечатлен Вашей удалью 
                    и желанием скорее вступить в бой. Вы получаете от него мадьярскую саблю – оружие, 
                    которое хранилось в чертогах венгерских правителей уже около двух столетий. 
                    К Вашему удивлению, сабля за это время нисколько не износилась, напротив, 
                    отличалась большой удобностью и быстротой. 
                    С таким клинком можно отвоевать любое княжество!
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
                <figcaption class="text-img-author text-medium">Бегство полков Владимира Володаревича Галицкого (ум. 1153 г.) от войск Изяслава Мстиславича Киевского (ум. 1154 г.) и венгерского короля Гезы II (1130–1162) из-под Санока и избиение бегущих. 1152 г. Миниатюра из Радзивилловской летописи (рукопись конца XV в.)</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterM.svg" alt="Буква M" class='img-letter-small'>
                    <div class='text text-small'> 
                    олодой князь явно не согласен с Вами. Он видит, что Вы не готовы 
                    к настоящей схватке. Он заявляет Вам, что более не нуждается в Вашей помощи. 
                    Ваш князь становится пешкой в делах венгерской внешней политики, 
                    а Вы – изгоем на чужбине.
                    </div>
                </div>
                <button id="choice" class="menu__button text-medium" onclick="location.reload(); return false;">Начать игру заново</button>
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
                            <figcaption class="text-img-author text-medium">Геза II (1130–1162) и Евфросинья Мстиславна (1130–1193) принимают её брата Владимира Мстиславича. Миниатюра из Лицевого летописного свода (XVI век)</figcaption>                     
                        </figure>                       
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                    </div>
                </li>

                <li class="page">
                    <div class="page-content content-text">
                        <div class='main-text'> 
                            <img src="assets/letter/letterP.svg" alt="Буква P" class='img-letter-small'>
                            <div class='text text-small'> 
                            осле переговоров с королем Вы получаете весточку от венгерской королевы 
                            с приглашением в ее покои. Вы соглашаетесь прийти. 
                            После начала разговора, Вы узнаете, что королева – русская княжна, 
                            дочь самого киевского великого князя.
                            </div>
                        </div>
                        <button id="choice" class="menu__button text-medium">Когда разговор прекращается, Вы решаете…</button>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>

        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer">Оставить королеву и уйти в свои покои. Пожалуй, лучше не докучать ей лишней болтовней</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer">Рассказать королеве о планах Вашего князя свергнуть брата королевы, сидящего на киевском престоле и воссесть на него самому</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer">Взять музыкальный инструмент, лежащий у постели королевы. Такой инструмент Вы видели у одного заезжего трубадура-франка в Польше. Он даже научил Вас немного на нем играть. Кажется, он называется «колесная лира». Нужно взять его и попробовать сыграть королеве что-то из русских мотивов. Устала она, наверное, жить так далеко от родных краев…</button></li>`,
        
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/8.png" alt="Геза II и Евфросинья Мстиславна принимают её брата Владимира Мстиславича">
                <figcaption class="text-img-author text-medium">Геза II (1130–1162) и Евфросинья Мстиславна (1130–1193) принимают её брата Владимира Мстиславича. Миниатюра из Лицевого летописного свода (XVI век)</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                    <div class='text text-small'> 
                    опрощавшись с королевой, поблагодарив ее за разговор, Вы возвращаетесь 
                    в свои покои. Ничего плохого не произошло, но и хорошего тоже . День завершен, 
                    и Вам пора отходить ко сну…
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
                <figcaption class="text-img-author text-medium">Геза II (1130–1162) и Евфросинья Мстиславна (1130–1193) принимают её брата Владимира Мстиславича. Миниатюра из Лицевого летописного свода (XVI век)</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li> 

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterK.svg" alt="Буква K" class='img-letter-small'>
                    <div class='text text-small'> 
                    оролева, затаив на Вас и князя обиду, прощается с Вами. На следующий день 
                    Вы узнаете от короля, что он отказывается идти с Вами в поход, потому что, 
                    когда давал свое согласие, не знал о Ваших планах занять киевский стол. 
                    Вы не знаете, что делать дальше: все мечты рухнули, осталось лишь доживать свой век…
                    </div>
                </div>
                <button id="choice" class="menu__button text-medium" onclick="location.reload(); return false;">Начать игру заново</button>
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
                    астроганная королева очень благодарна Вам, она увидела в Вас своего друга и союзника.
                    <br>
                    <br>
                    Вам удалось впечатлить королеву. От воспоминаний родного края слезы сами невольно 
                    навернулись на ее глазах. Вы несколько часов провели за разговорами 
                    о Русской земле и тяготах чужбины. На прощание королева достала для Вас из сундука 
                    золотую шейную гривну. Удалившись в свои покои, Вы начали рассматривать ее, 
                    задумавшись о такой близкой, но такой далекой Русской земле…
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
                <img class="content-img" src="assets/image/10.png" alt="Похороны Андрея Боголюбского">
                <figcaption class="text-img-author text-medium">Похороны Андрея Боголюбского (ум. 1174 г.). Миниатюра из Лицевого летописного свода (XVI в.). Российская национальная библиотека.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
    </li>

    <li class="page">
        <div class="page-content content-text">
            <div class='main-text'> 
                <img src="assets/letter/letterH.svg" alt="Буква И" class='img-letter-small'>
                <div class='text text-small'> 
                    Через пару дней Вы узнаете о смерти одного из младших сыновей короля. Он и королева присылают Вам и князю приглашение на похороны принца.
                </div>
            </div>
            <button id="choice" class="menu__button text-medium">Вы…</button>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>
        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer">Публично заявлю, что не собираюсь идти на похороны этого сорванца. Нашли куда звать!</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer">Необходимо принять приглашение и проводить в последний путь этого достойного юношу.</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer">Думаю, стоит их оставить наедине со своим горем, послав лишь скромное послание-соболезнование.</button></li>`,
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
                <img class="content-img" src="assets/image/10.png" alt="Съезд князей">
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
                    онаршая чета раздосадована Вашими
                    словами и отказом. Вас лишают
                    королевского благоволения и выгоняют из замка. Теперь Вас и Вашего князя ждет жизнь скитальцев без всякой надежды на занятие престола в одном из русских княжеств.
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
                    оролевская чета благодарна Вам за согласие. 
                    <br>
                    <br>
                    Согласившись отправиться на похороны сына короля, Вы должны были одеться подобающим образом. 
                    В качестве признания за Ваше согласие проводить принца в последний путь, королевская чета прислала Вам черный мятель,
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
                <img class="content-img" src="assets/trophy/3.png" alt="Черный мятель">
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
                <img class="content-img" src="assets/image/10.png" alt="Похороны Андрея Боголюбского">
                <figcaption class="text-img-author text-medium">Похороны Андрея Боголюбского (ум. 1174 г.). Миниатюра из Лицевого летописного свода (XVI в.). Российская национальная библиотека.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterK.svg" alt="Буква И" class='img-letter-small'>
                    <div class='text text-small'> 
                    оролевская чета не поняла Ваш
                    отказ проводить в последний путь их
                    сына, но приняла Ваши соболезнования.
                    </div>
                </div>
                <button id="choice" class="menu__button text-medium" onclick="location.reload(); return false;">Начать игру заново</button>
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
                <img class="content-img" src="assets/image/11.png" alt="Венгерский король">
                <figcaption class="text-img-author text-medium">Венгерский король Бела III (ок. 1148–1196). Миниатюра из Венгерской иллюстрированной хроники (вторая половина XIV в.). Национальная библиотека им. Сеченьи (Венгрия).</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
    </li>

    <li class="page">
        <div class="page-content content-text">
            <div class='main-text'> 
                <img src="assets/letter/letterH.svg" alt="Буква И" class='img-letter-small'>
                <div class='text text-small'> 
                Через какое-то время Вы узнаете, что венгерский король не готов отправиться с Вами в поход на юго-западные русские княжества: он тоскует по своему ушедшему сыну, да и князья прекратили вражду между собой и объединились вокруг одного представителя династии. Король просит Вас простить его и попытать счастья в других частях ойкумены.
                </div>
            </div>
            <button id="choice" class="menu__button text-medium">Вы решаете…</button>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>
        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer">Обратиться к одному из старших сыновей короля. Говорят, он поклонник византийских обычаев и нравов и, вполне возможно, имеет связи в Царьграде. Он мог бы помочь нам с князем туда добраться, чтобы продолжить поиск союзников в борьбе за престол…</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer">Плюнуть королю в лицо. Тот король, что не умеет держать свои обещания, не достоин называться владыкой сей державы!</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer">Попросить у короля денег на боевых наемников, чтобы отправиться с ними завоевывать землю для князя.</button></li>`,
        
        "choice-1":` 
        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterP.svg" alt="Буква П" class='img-letter-small'>
                    <div class='text text-small'> 
                    Действительно, сын венгерского короля оказался поклонником императорского двора. 
                    Там у него есть множество влиятельных знакомых. 
                    Принц соглашается помочь Вам отправиться в столицу Державы Ромеев.
                    <br>
                    <br>
                    В знак благодарности за путешествие в Византию, Вы получаете от князя сафьяновые сапоги с золотым узором. 
                    Купленные на одном из венгерских рынков у русского торговца, они пригодятся Вам при ромейском императорском дворе, где ценят красоту.
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/7.png" alt="Сафьяновые сапоги с золотым узором">
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
        <img class="content-img" src="assets/image/11.png" alt="Венгерский король">
        <figcaption class="text-img-author text-medium">Венгерский король Бела III (ок. 1148–1196). Миниатюра из Венгерской иллюстрированной хроники (вторая половина XIV в.). Национальная библиотека им. Сеченьи (Венгрия).</figcaption>                     
        </figure>                       
        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
    </div>
    </li>    

    <li class="page">
        <div class="page-content content-text">
            <div class='main-text'> 
                <img src="assets/letter/letterC.svg" alt="Буква C" class='img-letter-small'>
                <div class='text text-small'> 
                тража подбегает и арестовывает Вас.
                Последние дни Вы проведете в сырой
                камере, пока Вас не казнят за оскорбление Его Величества…
                </div>
            </div>
            <button id="choice" class="menu__button text-medium" onclick="location.reload(); return false;">Начать игру заново</button>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>
`,
    "choice-3":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
            <img class="content-img" src="assets/image/11.png" alt="Венгерский король">
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
                    ороль соглашается дать Вам золото.
                    Вы нанимаете на него дюжину
                    конников-головорезов. Достигая пределов Руси, Вы встречаете войско местных князей, которые знали о Вашем появлении. 
                    Понимая, что окружены, Ваши наемники разворачивают коней и бегут обратно в венгерские владения. 
                    Вас вместе с князем берут в заложники и ослепляют. 
                    Вы больше не представляете опасности как политические соперники…
                    </div>
                </div>
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
                <img class="content-img" src="assets/image/12.png" alt="Император Мануил">
                <figcaption class="text-img-author text-medium">Император Мануил I Комнин (1118–1180) с супругой императрицей Марией Антиохийской (1145–1182). Миниатюра 1166 г. Ватиканская апостольская библиотека.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
    </li>

    <li class="page">
        <div class="page-content content-text">
            <div class='main-text'> 
                <img src="assets/letter/letterB.svg" alt="Буква B" class='img-letter-small'>
                <div class='text text-small'> 
                скоре Вы прибываете в 
                Константинополь. Поражаясь 
                великолепному и богатому убранству императорского дворца, Вы приходите на аудиенцию к василевсу. Рассказывая императору о князе и о себе, Вы просите его помочь вам золотом или войсками в деле завоевания княжеского престола. Взамен Вы обещаете признать себя вассалом (hypospondos) василевса и участвовать в будущем во всех его военных походах. Византийский император принимает Ваше предложение, однако, просит стать его вассалом сейчас же и выполнить важную дипломатическую миссию, поехав в Иерусалимское королевство для достижения соглашения с крестоносцами о совместном завоевании Египта. Если Вы согласитесь, Вам необходимо будет переговорить с аколуфом варяжской гвардии для выделения Вам боевой охраны.
                </div>
            </div>
            <button id="choice" class="menu__button text-medium">Что Вы намерены ответить василевсу?</button>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>
        `,
        "btn-1":`<li><button id="choice-1" class="text-medium button-answer">Нужно ответить императору согласием. При этом его нужно удивить нашей храбростью! Мы откажемся от сопровождения варяжской гвардией. Оставив князя в этом великолепном дворце, я отправлюсь в Святую землю лично, где встречусь с латинским королем.</button></li>`,
        "btn-2":`<li><button id="choice-2" class="text-medium button-answer">Кто мы такие, чтобы отказывать великому православному правителю? Мы принимаем предложение. Я готов переговорить с аколуфом сейчас же!</button></li>`,
        "btn-3":`<li><button id="choice-3" class="text-medium button-answer">Он хочет нас обмануть! Не стоит принимать его предложение! К тому же можно просто сгинуть по пути в Святую землю!</button></li>`,
        
        "choice-1":`
        <li class="page">
        <div class="page-content content-img">
            <figure>
            <img class="content-img" src="assets/image/12.png" alt="Император Мануил">
            <figcaption class="text-img-author text-medium">Император Мануил I Комнин (1118–1180) с супругой императрицей Марией Антиохийской (1145–1182). Миниатюра 1166 г. Ватиканская апостольская библиотека.</figcaption>                     
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
        </li>    

        <li class="page">
            <div class="page-content content-text">
                <div class='main-text'> 
                    <img src="assets/letter/letterB.svg" alt="Буква B" class='img-letter-small'>
                    <div class='text text-small'> 
                    асилевс удивлен Вашей 
                    безрассудностью, но соглашается с
                    Вами. Через пару дней, после кратковременного отдыха, Вы отправляетесь в Святую землю.
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
                    <img src="assets/letter/letterU.svg" alt="Буква И" class='img-letter-small'>
                    <div class='text text-small'> 
                    мператор доволен Вашим согласием.
                    Он приказывает своим слугам 
                    сопроводить Вас к аколуфу. Встретившись с ним в окружении грозных варягов, 
                    Вы получаете согласие на выделение боевого сопровождения. 
                    После кратковременного отдыха Вы отправляетесь в Святую землю.
                    <br>
                    <br>
                    Удовлетворив василевса своим согласием и получив одобрение от аколуфа варяжской гвардии, 
                    Вы отправились в свои покои. Вскоре в Вашу дверь постучались. 
                    Вам преподнесли щит, обтянутый бархатом, подарок от императора. 
                    Слуга, принесший щит, передал Вам и устное послание от него: в случае успешной дипломатической миссии, он хотел бы видеть 
                    Вас рядом с севастократором в рядах лучших конников Державы Ромеев для скорого похода на Египет.
                    </div>
                </div>
                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
            </div>
        </li>

        <li class="page">
        <div class="page-content content-img">
            <figure>
                <h2 class='text-trophy'>Получен трофей:</h2>
                <img class="content-img" src="assets/trophy/8.png" alt="Щит, обтянутый бархатом">
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
            <img class="content-img" src="assets/image/12.png" alt="Император Мануил">
            <figcaption class="text-img-author text-medium">Император Мануил I Комнин (1118–1180) с супругой императрицей Марией Антиохийской (1145–1182). Миниатюра 1166 г. Ватиканская апостольская библиотека.</figcaption>                     
        </figure>                       
        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
    </div>
    </li>    

    <li class="page">
        <div class="page-content content-text">
            <div class='main-text'> 
                <img src="assets/letter/letterB.svg" alt="Буква B" class='img-letter-small'>
                <div class='text text-small'> 
                асилевс разочарован в Вас и в 
                Вашем князе. Без вашего согласия он
                не готов оказывать свою помощь. Он не изгоняет вас из Царьграда, но вы просто продолжаете тихо доживать свой век при императорском дворе…
                </div>
            </div>
            <button id="choice" class="menu__button text-medium" onclick="location.reload(); return false;">Начать игру заново</button>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>
`,
    
    },
];