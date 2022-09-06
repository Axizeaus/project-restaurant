import "./contact.css";
import Chef from "./chef.png"
import ChefTwo from "./chef2.png"

export function contact(){
  // element creation
  const mainDiv = document.getElementById("content");
  const imgCrd = document.createElement("div");
  const ul = document.createElement('ul');
  const ul2 = document.createElement('ul');

  // image 
  const chefImage = new Image();
  const img = document.createElement('img');
  chefImage.src = Chef;

  const chefTwoImage = new Image();
  const img2 = document.createElement('img');
  chefTwoImage.src = ChefTwo

  // adding data in elements
  img.classList.add('chefImg');
  img2.classList.add('chefImg2');
  imgCrd.innerHTML = `
  Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=149840">OpenClipart-Vectors</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=149840">Pixabay</a>`
  ul.innerHTML = `
    <li>name - none of your business</li>
    <li>age - aged well I think</li>
    <li>speciality - pineapple pizza (only dish here)</li>
    <li>phone - +959123456789</li>
    <li>email - chefjudge@legitemail.com</li>
    <li>address - third column second row (this restaurant</li>
  `

  ul2.innerHTML = `
  <li>name - none of your business 2</li>
  <li>age - same as the above</li>
  <li>speciality - tab water server (the only available liquid)</li>
  <li>phone - +7894561231</li>
  <li>email - chefjudge.junior@legitemail.com</li>
  <li>address - third column third row (this restaurant)</li>
  `
  // appending stage
  mainDiv.appendChild(img);
  mainDiv.appendChild(imgCrd);
  mainDiv.appendChild(ul);
  mainDiv.appendChild(img2);
  mainDiv.appendChild(ul2);
}