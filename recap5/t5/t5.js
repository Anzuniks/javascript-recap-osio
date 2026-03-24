const apiBase = 'https://media2.edu.metropolia.fi/restaurant/api/v1';


async function fetchData(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
  return await response.json();
}


async function showMenu(id, name) {
  const modal = document.querySelector('#menu-modal');
  const content = document.querySelector('#modal-content')

  content.innerHTML = '<p>Ladataan menu...</p>';
  modal.showModal();

  try {
    const menuData = await fetchData(`${apiBase}/restaurants/daily/${id}/fi`);

    let html = `<h2>${name}</h2><ul>`;
    menuData.courses.forEach(course => {
      html += `<li><strong>${course.name}</strong> (${course.dietcodes || 'ei dieettiä'}) - ${course.price || '?? €'}</li>`;
    });
    html += '</ul>';


    content.innerHTML = html;
  } catch (error) {
    console.error('Menu data:', error);
    content.innerHTML = `<p>Virhe ladattaessa menu. Muista VPN</p>`;
    }
  }

  async function init() {
  const target = document.querySelector('#restaurant-target');

  try {
    const restaurants = await fetchData(`${apiBase}/restaurants`);

   restaurants.sort((a, b) => a.name.localeCompare(b.name));

   restaurants.forEach(resta => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${resta.name}</td><td>${resta.address}</td>`;

      // Kun riviä klikataan, avataan menu
      tr.addEventListener('click', () => {
        showMenu(resta._id, resta.name);
      });

      target.appendChild(tr);
    });
  } catch (error) {
    console.error('Latausvirhe:', error);
    alert('Ravintoloiden lataus epäonnistui. Tarkista VPN-yhteys!');
  }
}

document.querySelector('#close-modal').addEventListener('click', () => {
  document.querySelector('#menu-modal').close();
});

init();
