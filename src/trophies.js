import { trophiesDict} from "./trophiesList";
import {SaveTr, GetTr} from './save'
const trophiesList = Object.keys(trophiesDict)

let trophies = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];



const CreateAllTrophies = () => {
    const liList = []
    const description = []
    for (let i = 0; i < trophiesList.length-1; i=i+3){
        liList.push(CreateLiTrophies(i))
        description.push(CreateLiDescriptionTrophies(i))
        description.push(CreateLiDescriptionTrophies(i+1))
        description.push(CreateLiDescriptionTrophies(i+2))
    }
    // console.log(trophiesList.length-1);
    liList.push(CreateLiTrophiesMain(trophiesList.length-1))
    description.push(CreateLiDescriptionTrophies(trophiesList.length-1))
    const result = [...liList, ...description];
    return result.join(' ');
}


const CreateLiTrophies = (index) => {
    const imageFirst = trophiesDict[trophiesList[index]][3]
    const imageSecond = trophiesDict[trophiesList[index + 1]][3]
    const imageThird = trophiesDict[trophiesList[index + 2]][3]
    return `
    <li class="page trophy_class">
        <div class="page-content content-dictionary">

            <div class="content-list-img">
                <ul class="content-list-img-dop">
                    <li class="content-list-img-dop-li"> 
                        <figure class='${trophies[index] == 0 ? 'received' : '' }'>
                            <img src="assets/trophy/${imageFirst}.png" alt="">
                            <figcaption class='text-medium'><a href="#" id='${imageFirst}' class="trophImg" alt="Ссылка" data-tooltip="Перейти к описанию">${trophiesList[index]}</a></figcaption>
                        </figure>
                    </li> 
                    <li class="content-list-img-dop-li"> 
                        <figure class='${trophies[index+1] == 0 ? 'received' : '' }'>
                            <img src="assets/trophy/${imageSecond}.png" alt="">
                            <figcaption class='text-medium'><a href="#" id='${imageSecond}' class="trophImg" alt="Ссылка" data-tooltip="Перейти к описанию">${trophiesList[index + 1]}</a></figcaption>
                        </figure>
                    </li> 
                </ul>
                <div class="content-list-img-bottom"> 
                    <figure class='${trophies[index+2] == 0 ? 'received' : '' }'>
                        <img src="assets/trophy/${imageThird}.png" alt="">
                        <figcaption class='text-medium'><a href="#" id='${imageThird}' class="trophImg" alt="Ссылка" data-tooltip="Перейти к описанию">${trophiesList[index + 2]}</a></figcaption>
                    </figure>
                </div>  
            </div>

            <div class='decor'><img src="assets/decor-1.svg" alt=""></div>
        </div>
    </li> 
    `
}

const CreateLiTrophiesMain = (index) => {
    const image =  trophiesDict[trophiesList[index]][3]
    if (index==15){
        return `
    <li class="page trophy_class">
    <div class="page-content content-img first">
    <figure class='${trophies[index] == 0 ? 'received' : '' }'>
        <img class="content-img" src="assets/trophy/${image}.png">
        <figcaption class="text-img-author text-medium"><a href="#" id='${image}' class="trophImg" alt="Ссылка" data-tooltip="Перейти к описанию">${trophiesList[index]}</a></figcaption>                     
    </figure>                       
    <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
</div>
    </li>     
    `
    }

    return `
    <li class="page trophy_class">
        <div class="page-content content-dictionary">
                <div class="content-list-img-main"> 
                        <figure class='${trophies[index] == 0 ? 'received' : '' }'>
                            <img src="assets/trophy/${image}.png" alt="">
                            <figcaption class='text-medium'>${trophiesList[index]}</figcaption>
                        </figure>
                    
                </div>  
            <div class='decor'><img src="assets/decor-1.svg" alt=""></div>
        </div>
    </li> 
    `
}

const CreateLiDescriptionTrophies = (index) => {
    let dop = ''
    if (trophies[index] == 0){
        dop = `<p class="trophy-not-received text-large">Трофей не получен</p>`
    }
    const name  =  trophiesList[index]
    const image =  trophiesDict[name][3]
    const item  =  trophiesDict[trophiesList[index]]
    let textSize = 'text-small'

    if (item[0].length + item[1].length + item[2].length > 1000){
        textSize = 'text-very-small'
    }

    return `
    <li class="page trophy_class">
        <div class="page-content content-trophies-img">
            <figure>
                <img class="content-img" src="assets/trophy/${image}.png">
                <figcaption class="text-img-author text-medium">${name}</figcaption>     
                ${dop}                
            </figure>                       
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
        </div>
    </li>

    <li class="page trophy_class">
    <div class="page-content content-trophies-text">
        <ul class='trophies-description'>
            <li class='trophies-description-li ${textSize}'>${item[0]}</li>
            <li class='trophies-description-li ${textSize}'>${item[1]}</li>
            <li class='trophies-description-li ${textSize}'>${item[2]}</li>
        </ul>
        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
    </div>
</li>
    `
}
        


export function trophiesBook(){
    let savedTr = GetTr();
    if(savedTr){
        trophies = savedTr.split('');
    }
    return `
            ${CreateAllTrophies()}        
    `;
}
