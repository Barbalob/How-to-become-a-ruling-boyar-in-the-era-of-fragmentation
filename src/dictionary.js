import { definitions } from "./definitionDict";
let remainingText = ''
let count = 1;
const sumbol = ['.', ':', ';', ',', ' ', '!', '?']
const isEmptyText = (word) => {return !sumbol.includes(word) ?   `<li>${word}</li>` : ''};
const isEmptyRemainingText = (word) => {return word != '' ?  `${word}` : ''};
const wrapperLi = (word) => {return `<li>${word}</li>`}

function cutOffPartString (word, num) {
    if (word.length < num){
      return [word, '']
    }
    else {
        for (let i = num-1; i >= 0; i--){
          if (sumbol.includes(word[i])){
            return [word.slice(0,i), word.slice(i)]
          }
        }
    }
    return ['', word]
}

export const dictionary = 
  `
  <div class="container">
          <div class="wrapper-book">
            <ul class="flip-book" id="demoBookExample">
    ${
        Object.keys(definitions).map(key =>{

            if (definitions[key][1] != '' && definitions[key][2] != ''){

                let one = definitions[key][0]
                let thee = definitions[key][2]
                let dop = ''
                let newList =''
                const transfer = 700
                if (remainingText != ''){
                    dop = remainingText;
                    remainingText = '';
                }

                const len = definitions[key][0].length + definitions[key][2].length + dop.length

                if (len >= transfer){
                    if (dop.length >= transfer){
                        newList = `
                            <li class="page">
                                <div class="page-content content-dictionary">
                                    <ol class='text text-small'>
                                        ${dop}
                                    </ol>
                                    <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                                </div>
                            </li>
                            `
                        dop = ''
                    }
                    else if (definitions[key][0].length + dop.length >= transfer){
                        const array = cutOffPartString(one, transfer - dop.length)
                            remainingText = wrapperLi(array[1]) + wrapperLi(thee)
                            thee = ''
                            one = array[0]            
                    }
                    else if (len >= transfer){
                        console.log(len - (definitions[key][0].length + dop.length));
                        console.log(thee.length);
                        const array = cutOffPartString(thee, (len - (definitions[key][0].length + dop.length)) / 2)
                        console.log(array);
                        remainingText = wrapperLi(array[1])
                        thee = array[0]        
                    }          
                };
                if (newList === '')
                    {return `
                        <li class="page">
                            <div class="page-content content-dictionary">
                                <ol class='text text-small'>
                                    ${isEmptyRemainingText(dop)}
                                    <li>
                                        ${count++}. ${key}. ${one}        
                                    </li>
                                    ${isEmptyText(thee)}
                                </ol>
                                <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                            </div>
                        </li>
                    `}
                else {return newList + `
                <li class="page">
                    <div class="page-content content-dictionary">
                        <ol class='text text-small'>
                            ${isEmptyRemainingText(dop)}
                            <li>
                                ${count++}. ${key}. ${one}        
                            </li>
                            ${isEmptyText(thee)}
                        </ol>
                        <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
                    </div>
                </li>
            `}
            }
        
        })
    }
    ${`
    <li class="page">
        <div class="page-content content-dictionary">
            <ol class='text text-small'>
                <li>
                    ${remainingText}       
                </li>
            </ol>
            <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>
        </div>
    </li>
    `}
    

    </ul>
    </div>
</div>
  `;
