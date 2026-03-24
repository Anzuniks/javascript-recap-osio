async function fetchData(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);

  }

  return await response.json();
}

async function testGenericFetch() {
  const url = 'https://reqres.in/api/users';

  const user = {
    name: 'John Doe',
    job: 'Developer'
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'pub_d3312a12092ad6151b4df7d8dd828cd85e044db54f102c145ed1917a68333e09'
    },
    body: JSON.stringify(user)
  };


  try {
    const userData = await fetchData(url, options);
    console.log('Tehtävä 4 - Käyttäjätiedot saatu:', userData);
  } catch (error) {
    console.error('Virhe:', error.message);
  }
}

testGenericFetch();
