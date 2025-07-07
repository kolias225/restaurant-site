import locationImg from './images/location.jpg';

export default function createContact() {
  const contact = document.createElement('div');
  contact.className = 'contact-section';

  const title = document.createElement('h2');
  title.textContent = 'Contact Us';

  const email = document.createElement('p');
  email.innerHTML = '<strong>Email:</strong> info@yourrestaurant.com';

  const phone = document.createElement('p');
  phone.innerHTML = '<strong>Phone:</strong> +31 6 12345678';

  const address = document.createElement('p');
  address.innerHTML = '<strong>Address:</strong> Witte de Withstraat, 163012 BP, Rotterdam, Netherlands';

  const mapImg = document.createElement('img');
  mapImg.src = locationImg;
  mapImg.alt = 'Our location on the map';
  mapImg.className = 'contact-map';

  contact.appendChild(title);
  contact.appendChild(email);
  contact.appendChild(phone);
  contact.appendChild(address);
  contact.appendChild(mapImg);

  return contact;
}