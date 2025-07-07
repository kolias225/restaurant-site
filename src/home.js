export default function createHome() {
    const home = document.createElement('div');
    home.id = 'home';

    const box = document.createElement('div');
    box.className = 'home-box';

   const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Our Restaurant!';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'We serve the best food in town. Come and taste it!';

  box.appendChild(heading);
  box.appendChild(paragraph);
  home.appendChild(box);

  return home;
}