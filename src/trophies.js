// import { trophiesList } from "./trophiesList";

export function trophiesBook(){
    return `
    <div class="container">
        <button class='dictionary-btn'></button>
        <div class="wrapper-book">
            <ul class="flip-book" id="demoBookExample">


                <li class="page">
                <div class="page-content content-dictionary">

                    <div class="content-list-img">
                        <ul class="content-list-img-dop">
                            <li class="content-list-img-dop-li"> <img src="assets/trophy/7.png" alt=""></li> 
                            <li class="content-list-img-dop-li"> <img src="assets/trophy/8.png" alt=""></li> 
                        </ul>
                        <div class="content-list-img-bottom"> <img src="assets/trophy/9.png" alt="" class="menu__logo"> </div>  
                    </div>

                    <div class='decor'><img src="assets/decor-1.svg" alt=""></div>
                </div>
                </li>  


            </ul>
        </div>
    </div>
    `;
}
