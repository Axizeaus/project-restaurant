import { loadPage } from './load';
import { contact } from './contact';

// const btn = document.createElement('button');
// btn.textContent = 'hello there';
// document.body.appendChild('btn');
loadPage();

function obj(){
    const text = document.createElement('div');
    text.innerHTML = 'hello';
    return text
}

document.body.appendChild(obj());
