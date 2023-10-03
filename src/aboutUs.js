const people = {
    'Рябов Сергей': ['Sergey.jpg','Руководитель проекта, куратор и сценарист'],
    'Попович Алексей': ['Alexei.jpg','Редактор и научный консультант проекта'],
    'Мария Кузнецова': ['Maria.jpg','Тимлид'],
    'Елизавета Федорова': ['Lisa.jpg','Дизайнер'],
    'Артём Кунщиков': ['Artem.jpg','Frontend'],
    'Андрей Ситников': ['Andrey.jpg','Frontend'],
};

export const aboutUs = 
  `
    ${
        Object.keys(people).map(key =>{
            // console.log(key);
            return `
            <li class="page">
                <div class="page-content content-img">
                    <figure>
                        <img class="content-img" src="assets/photo/${people[key][0]}" alt="${key}">
                        <figcaption class="text-img-author text-medium">${key}<br>${people[key][1]}</figcaption>                     
                    </figure>                       
                    <div class='decor'><img src="assets/decor-1.svg" alt="" class="img-decor"></div>    
                </div>
            </li>
        `
        }).join(' ')
    }
  `;
