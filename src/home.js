import './style.css';
// import Pizza from './pineapplePizza.png';

export function mainPage(){

    const mainDiv = document.getElementById('content');
    const h1 = document.createElement('h1');
    // const mainImage = new Image();
    const img = document.createElement('img');
    // mainImage.src = Pizza;

    h1.textContent = "Eat and Fight club";

    mainDiv.classList.add('content');
    img.classList.add('img');

    mainDiv.appendChild(h1);
    mainDiv.appendChild(img);

    return mainDiv
}