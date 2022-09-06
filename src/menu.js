import TapWater from "./tapwater.jpg";
import PineapplePizza from "./pineapplePizza.png";
import './menu.css';

export function menu(){
    // element creations
    const mainDiv = document.getElementById('content');
    const imgCrd = document.createElement('div');
    const img2Crd = document.createElement('div');
    const description1 = document.createElement('div');
    const description2 = document.createElement('div');

    // images 
    const tapWater = new Image();
    const img = document.createElement('img');
    tapWater.src = TapWater;
  
    const pineapplePizza = new Image();
    const img2 = document.createElement('img');
    pineapplePizza.src = PineapplePizza

    // adding data to the elements

    img.classList.add('tapwater');
    img2.classList.add('pizza');
    img2Crd.innerHTML =
    'Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=576551">OpenClipart-Vectors</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=576551">Pixabay</a> ';
    imgCrd.innerHTML =
    'Image by <a href="https://pixabay.com/users/arcaion-2057886/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2057924">Henryk Niestrój</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2057924">Pixabay</a>';
    description1.innerText = 'Pineapple Pizza, will get you in the mood to fight';
    description2.innerText = 'All you can drint tapwater, stay hydrated';

    // appending stage

    mainDiv.appendChild(img);
    mainDiv.appendChild(imgCrd);
    mainDiv.appendChild(description2)
    mainDiv.appendChild(img2);
    mainDiv.appendChild(img2Crd);
    mainDiv.appendChild(description1)
}