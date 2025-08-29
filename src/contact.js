function loadContact() {
  const content = document.getElementById('content');
  content.innerHTML = ""; // clear previous content

  const heading = document.createElement('h1');
  heading.textContent = "Contact Us";

  const phone = document.createElement('p');
  phone.textContent = "📞 +234-7030-874-520";

  const email = document.createElement('p');
  email.textContent = "✉️ contact@extrarestaurant.com";

  const address = document.createElement('p');
  address.textContent = "📍 5 Court Road Bori Ogoni Rivers State";

  content.appendChild(heading);
  content.appendChild(phone);
  content.appendChild(email);
  content.appendChild(address);
}

export default loadContact;
