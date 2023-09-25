import { definitions } from "./definitionDict";
let remainingText = ''
let count = 1;
const sumbol = ['.', ':', ';', ',', ' ', '!', '?']
const isEmptyText = (word) => {return !sumbol.includes(word) ?   `<li>${word}</li>` : ''};
const isEmptyRemainingText = (word) => {return word != '' ?  `${word}` : ''};
const wrapperLi = (word) => {return `<li>${word}</li>`}
const dictClass = `dict_class`
function cutOffPartString (word, num) {
    if (num <= 0){
        return ['', word]
    }
    if (word.length < num){
      return [word, '']
    }
    else {
        for (let i = num-1; i >= 0; i--){
          if (sumbol.includes(word[i])){
            if (word.slice(0,i).length <= 10){
                return ['', word]
            }
            if (word.slice(i).length <= 15){
                return [word, '']
            }
            return [word.slice(0,i), word.slice(i)]
          }
        }
    }
    return ['', word]
}

export const dictionary = 
  `
    ${
        Object.keys(definitions).map(key =>{
        
            if (definitions[key][3] === 0){
                return ''
            }
            return `
            <li class="page ${dictClass}">
                <div class="page-content content-dictionary">
                    <ol class='text ${(definitions[key][0].length + definitions[key][2].length)>= 900?"text-very-small":"text-small"}'>
                        <li>
                            ${count++}. <span class='keyword'>${key}</span>. ${definitions[key][0]}        
                        </li>
                        <li>
                        ${definitions[key][2]}
                        </li>
                    </ol>
                    <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                </div>
            </li>
            <li class="page ${dictClass}">
                <div class="page-content content-img first">
                    <figure>
                        <img class="content-img" src="assets/dict/${definitions[key][3]}.png">
                        <figcaption class="text-img-author ${(definitions[key][1].length)>= 360?"text-small":"text-medium"}">${definitions[key][1]}</figcaption>                     
                    </figure>                       
                    <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                </div>
            </li>
        `
        }).join(' ')
    }
    
  `;
