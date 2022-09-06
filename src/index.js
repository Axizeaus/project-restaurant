import { loadPage } from "./load";
import { contact } from "./contact";

window.onload = () => loadPage();

function home() {
  const home = document.createElement("button");
  home.textContent = "home";
  home.onclick = () => {clear();loadPage()};
  return home;
}

function contactPage() {
  const contactBtn = document.createElement("button");
  contactBtn.textContent = 'contact';
  contactBtn.onclick = () => {clear();contact()};
  return contactBtn;
}

function menu() {
  const menu = document.createElement();
  menu.innerHTML = 'menu'
  return menu
}

function clear(){
    const content = document.getElementById('content');
    console.log(content);
    content.innerHTML = '';
}

document.body.appendChild(home());
document.body.appendChild(contactPage());
