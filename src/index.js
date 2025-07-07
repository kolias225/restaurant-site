import './styles.css';
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";


function loadPage(pageFunction) {
    content.innerHTML = '';
    content.appendChild(pageFunction());
}

document.getElementById('home').addEventListener('click', () => loadPage(createHome));
document.getElementById('menu').addEventListener('click', () => loadPage(createMenu));
document.getElementById('contact').addEventListener('click', () => loadPage(createContact));

loadPage(createHome);