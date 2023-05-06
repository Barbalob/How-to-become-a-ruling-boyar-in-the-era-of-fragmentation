// import name from "./module.js";
import './styles/style.scss'

import {PageFlip} from 'page-flip';
const pageFlip = new PageFlip(document.getElementById('book'),
    {
        width: 701, // required parameter - base page width
        height: 878,  // required parameter - base page height
    }
);

pageFlip.loadFromHTML(document.querySelectorAll('.page'));