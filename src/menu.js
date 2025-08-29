function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = ""; // clear previous content

  const heading = document.createElement('h1');
  heading.textContent = "Our Menu";

  const item1 = document.createElement('p');
  item1.textContent = "🍕 Pizza - Hot and cheesy";

  const item2 = document.createElement('p');
  item2.textContent = "🍔 Burger - Juicy and delicious";

  const item3 = document.createElement('p');
  item3.textContent = "🥗 Salad - Fresh and healthy";

  content.appendChild(heading);
  content.appendChild(item1);
  content.appendChild(item2);
  content.appendChild(item3);
}

export default loadMenu;
