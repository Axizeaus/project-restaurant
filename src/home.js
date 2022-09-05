import "./style.css";
import Pizza from "./pineapplePizza.png";

export function mainPage() {
  // content and element creations
  const mainDiv = document.getElementById("content");
  const h1 = document.createElement("h1");
  const imgCrd = document.createElement("div");
  const pre = document.createElement("pre");
  const h4 = document.createElement('h4');
  const ul = document.createElement('ul');

  // image
  const mainImage = new Image();
  const img = document.createElement("img");
  mainImage.src = Pizza;

  // adding data in elements
  h1.textContent = "Eat and Fight club";
  imgCrd.innerHTML =
    'Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=576551">OpenClipart-Vectors</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=576551">Pixabay</a> ';

  pre.textContent = `
  Food is the source of life for out mere carbon-based bodies.
  The combination of flavours, good food can make enemies become friends.
  And bad food, friends, mortal enemies.
  We love the later part as we love a good fight.
  We have a boxing ring in the middle of the Restaurant
  An ambulance is parked outside in case of emergency.
  A pack of ice will bring down the pain most of the time. 
  So get your boxing gloves and bring your SO to our Restaurant.
  A problem solved now is better than never...
  `;

  h4.textContent = 'opening time';
  ul.innerHTML = `
  <li>6 am to 12 am - Monday</li>
  <li>6 am to 10 pm - Tuesday</li>
  <li>6 am to 12 am - Wednesday</li>
  <li>6 am to 10 pm - Thursday</li>
  <li>6 am to 12 am - Friday</li>
  <li>6 am to 9 pm  - Saturday</li>
  <li>9 pm to 12 am (Sunday special)</li>
  `


  // adding css classes
  mainDiv.classList.add("content");
  img.classList.add("img");

  // appending stage
  mainDiv.appendChild(h1);
  mainDiv.appendChild(img);
  mainDiv.appendChild(imgCrd);
  mainDiv.appendChild(pre);
  mainDiv.appendChild(h4);
  mainDiv.appendChild(ul);

  return mainDiv;
}
