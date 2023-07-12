import { trophiesDict} from "./trophiesList";
const trophiesList = Object.keys(trophiesDict)
const cycle = () => {
    const liList = []
    for (let i = 0; i < trophiesList.length-1; i=i+3){
        liList.push(F(i))
    }
    liList.push(Q(trophiesList.length-1))
    return liList.join(' ');
}
const F = (first) => {
    const imageFirst = trophiesDict[trophiesList[first]][3]
    const imageSecond = trophiesDict[trophiesList[first + 1]][3]
    const imageThird = trophiesDict[trophiesList[first + 2]][3]
    console.log(imageFirst, imageSecond, imageThird);
    return `
    <li class="page trophy_class">
        <div class="page-content content-dictionary">

            <div class="content-list-img">
                <ul class="content-list-img-dop">
                    <li class="content-list-img-dop-li"> 
                        <figure>
                            <img src="assets/trophy/${imageFirst}.png" alt="">
                            <figcaption class='text-medium'>${trophiesList[first]}</figcaption>
                        </figure>
                    </li> 
                    <li class="content-list-img-dop-li"> 
                        <figure>
                            <img src="assets/trophy/${imageSecond}.png" alt="">
                            <figcaption class='text-medium'>${trophiesList[first + 1]}</figcaption>
                        </figure>
                    </li> 
                </ul>
                <div class="content-list-img-bottom"> 
                    <div class="content-list-img-dop-li"> 
                        <figure>
                            <img src="assets/trophy/${imageThird}.png" alt="">
                            <figcaption class='text-medium'>${trophiesList[first + 2]}</figcaption>
                        </figure>
                    </div>
                </div>  
            </div>

            <div class='decor'><img src="assets/decor-1.svg" alt=""></div>
        </div>
    </li> 
    `
}

const Q = (index) => {
    const image =  trophiesDict[trophiesList[index]][3]

    return `
    <li class="page trophy_class">
        <div class="page-content content-dictionary">
                <div class="content-list-img-main"> 
                        <figure>
                            <img src="assets/trophy/${image}.png" alt="">
                            <figcaption class='text-medium'>${trophiesList[index]}</figcaption>
                        </figure>
                    
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


            </ul>
        </div>
    </div>
    `;
}
