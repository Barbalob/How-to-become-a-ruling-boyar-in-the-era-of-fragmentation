const people = {
    'Кунщиков Артём': ['Artem.jpg','Frontend'],
};

export const aboutUs = 
  `
    ${
        Object.keys(people).map(key =>{
            console.log(key);
            return `
            <li class="page">
                <div class="page-content content-img">
                    <figure>
                        <img class="content-img" src="assets/photo/${people[key][0]}" alt="Портрет Гоголя">
                        <figcaption class="text-img-author text-medium">${key}<br>${people[key][1]}</figcaption>                     
                    </figure>                       
                    <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                </div>
            </li>
        `
        }).join(' ')
    }
  `;
