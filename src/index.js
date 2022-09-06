import { loadPage } from "./load";
import { contact } from "./contact";
import { menu } from "./menu";

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

function menuPage() {
  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'menu';
  menuBtn.onclick = () => {clear();menu()};
  return menuBtn;
}

function clear(){
    const content = document.getElementById('content');
    content.innerHTML = '';
}

document.body.appendChild(home());
document.body.appendChild(contactPage());
document.body.appendChild(menuPage());
