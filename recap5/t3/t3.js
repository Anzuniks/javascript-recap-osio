// recap5/t3/t3.js
async function testErrorHandling() {
  const url = 'https://reqres.in/api/unknown/23';

  const options = {
    headers: {
      'x-api-key': 'pub_d3312a12092ad6151b4df7d8dd828cd85e044db54f102c145ed1917a68333e09'
    }
  };


  console.log('Tehtävä 3 - Aloitetaan virheenkäsittelyn testaus...');
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Tätä ei pitäisi näkyä:', data);
} catch (error) {
    console.log('Tehtävä 3 - Virhe tapahtui:');
    console.error('Virhe:', error);
  }
}

testErrorHandling();
