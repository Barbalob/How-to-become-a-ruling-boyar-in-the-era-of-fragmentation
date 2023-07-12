import { trophiesDict} from "./trophiesList";
const trophiesList = Object.keys(trophiesDict)

const cycle = () => {
    for (let i = 0; i < trophiesList.length; i=i+3){
        F(trophiesList[i])
    }
}
const F = (first) => {
    const imageFirst = trophiesList[first]
    const imageSecond = trophiesList[first + 1]
    const imageThird = trophiesList[first + 2]
    return `
    <li class="page trophy_class">
        <div class="page-content content-dictionary">

            <div class="content-list-img">
                <ul class="content-list-img-dop">
                    <li class="content-list-img-dop-li"> <img src="assets/trophy/${first}.png" alt=""></li> 
                    <li class="content-list-img-dop-li"> <img src="assets/trophy/${second}.png" alt=""></li> 
                </ul>
                <div class="content-list-img-bottom"> <img src="assets/trophy/${third}.png" alt="" class="menu__logo"> </div>  
            </div>

            <div class='decor'><img src="assets/decor-1.svg" alt=""></div>
        </div>
    </li> 
    `
}

export function trophiesBook(){
    return `
    <div class="container">
        <button class='dictionary-btn'></button>
        <div class="wrapper-book">
            <ul class="flip-book" id="demoBookExample">

            ${cycle()}
                <li class="page trophy_class">
                    <div class="page-content content-dictionary">

                        <div class="content-list-img">
                            <ul class="content-list-img-dop">
                                <li class="content-list-img-dop-li"> <img src="assets/trophy/${first}.png" alt=""></li> 
                                <li class="content-list-img-dop-li"> <img src="assets/trophy/${second}.png" alt=""></li> 
                            </ul>
                            <div class="content-list-img-bottom"> <img src="assets/trophy/${third}.png" alt="" class="menu__logo"> </div>  
                        </div>

                        <div class='decor'><img src="assets/decor-1.svg" alt=""></div>
                    </div>
                </li>  


            </ul>
        </div>
    </div>
    `;
}
