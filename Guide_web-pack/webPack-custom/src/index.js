import _ from 'lodash';
import printMe from './print.js';
import './style.css'
import icon_2 from './icon/logo__react.png'
import icon_3 from './icon/logo_react5_prev_ui.png'
import Data from './data.xml';
import Notes from './data.csv';
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML='Click me and Check the console'
    btn.onclick=printMe
    element.appendChild(btn)
    element.classList.add('hello');
    const myIcon2 = new Image();
    myIcon2.src = icon_2;
    const myIcon3 = new Image();
    myIcon3.src = icon_3;
    element.appendChild(myIcon2);
    element.insertAdjacentElement('beforeend',myIcon3);
    console.log("test Okey");
    console.log(Data);
    console.log(Notes);
    return element;
  }
  
  document.body.appendChild(component());