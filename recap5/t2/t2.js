async function createNewUser() {
  const url = 'https://reqres.in/api/users';

  // Tiedot, jotka lähetetään palvelimelle
  const userData = {
    name: 'Anders Nuri',
    job: 'Full Stack Developer'
  };

  const options = {
    method: 'POST', // Ilmoitetaan, että kyseessä on lähetys
    headers: {
      'Content-Type': 'application/json', // Kerrotaan, että body on JSON-tekstiä
      'x-api-key': 'pub_d3312a12092ad6151b4df7d8dd828cd85e044db54f102c145ed1917a68333e09'
    },
    body: JSON.stringify(userData) // Muutetaan JavaScript-olio tekstimuotoon
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // Tehtävän vaatimus: Logataan vastaus konsoliin
    console.log('Tehtävä 2 - Käyttäjä luotu onnistuneesti!');
    console.log(result);
    // Tulosteen pitäisi sisältää nimi, työ, uusi ID ja aikaleima

  } catch (error) {
    console.error('Tehtävä 2 - Lähetys epäonnistui:', error);
  }
}

createNewUser();
