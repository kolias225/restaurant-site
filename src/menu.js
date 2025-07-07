import bowl from './images/bowlWithVegetables.jpg';
import cake from './images/cake.jpg';
import burger from './images/burger.jpg';
import fruitToast from './images/fruitToast.jpg';
import pizza from './images/pizzaChoapingBoard.jpg';
export default function createMenu() {
    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');

    const items = [
        { name: 'Vegetable Bowl', img: bowl },
        { name: 'Cake', img: cake },
        { name: 'Burger', img: burger },
        { name: 'Fruit Toast', img: fruitToast },
        { name: 'Pizza', img: pizza },
    ];

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        const image = document.createElement('img');
        image.src = item.img;
        image.alt = item.name;
        image.classList.add('menu-image');

        const title = document.createElement('h3');
        title.textContent = item.name;
        title.classList.add('menu-title');

        card.appendChild(image);
        card.appendChild(title);
        menuSection.appendChild(card);
    });

    return menuSection;
}