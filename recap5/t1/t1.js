// t1.js
async function getUser() {
  const url = 'https://reqres.in/api/users/1';

  const options = {
    headers: {
      // Käytetään nyt tätä uutta löytämääsi avainta
      'x-api-key': 'pub_d3312a12092ad6151b4df7d8dd828cd85e044db54f102c145ed1917a68333e09'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      console.log('API hylkäsi vieläkin, viesti oli:', data.message);
      return;
    }

    console.log('Tehtävä 1 - VIHDOINKIN ONNISTUI!');
    console.log('Tässä data:', data.data);

  } catch (error) {
    console.error('Yhteysvirhe:', error);
  }
}

getUser();
