# JavaScript Recap – Osiot 1 & 2

Tämä repositorio sisältää JavaScript-kurssin **Recap osio 1** ja **Recap osio 2** -tehtävät selkeästi eriteltynä.

## Tehdyt tehtävät ja pisteet

### Recap Osio 1
Olen tehnyt tehtävät **1–4**, joista kertyy yhteensä **11 pistettä** (minimivaatimus **10 p**).

**Tehtävät**
- **Assignment 1:** Lämpötilamuunnos (Celsius → Fahrenheit ja Kelvin)
- **Assignment 2:** Kahden pisteen välinen etäisyys 2D-tasolla
- **Assignment 3:** Kolmion tyypin määrittely sivujen pituuksien perusteella
- **Assignment 4:** Kurssiarvosanan laskeminen pistemäärän mukaan

### Recap Osio 2
Olen tehnyt tehtävät **1–3**, joista kertyy yhteensä **12 pistettä** (minimivaatimus **10 p**).

**Tehtävät**
1. **Tehtävä 1:** Taulukoiden perusteet  
2. **Tehtävä 2:** Taulukko-operaatiot ja lajittelu  
3. **Tehtävä 3:** Parillisten lukujen poiminta  


## Recap 3 - Event Handling
Tässä osiossa keskityttiin JavaScriptin tapahtumankäsittelyyn ja interaktiivisuuden lisäämiseen:
- **TODO-lista:** Toteutettiin lista, jossa on tehtävien lisäys modaalin kautta, tehtävien kuittaaminen checkboxilla ja poistaminen `removeChild`-metodilla.
- **Ravintolalista:** Luotiin aakkostettu lista ravintoloista. Toteutettiin "exclusive highlight" -toiminto, jossa klikattu rivi korostuu ja avaa modaalin ravintolan tarkemmilla tiedoilla.

## Recap 4 - Geolocation & Distance
Harjoiteltiin selaimen paikkatietojen hyödyntämistä:
- Käytettiin `navigator.geolocation` API:a hakemaan käyttäjän koordinaatit.
- Laskettiin ravintoloiden etäisyys käyttäjästä ja järjestettiin lista automaattisesti lähimmän mukaan.

## Recap 5 - Leaflet Maps
Viimeisessä osiossa siirrettiin data visuaaliselle kartalle:
- Integroitiin **Leaflet.js** -kirjasto projektiin.
- Luotiin interaktiivinen kartta, joka keskittyy käyttäjän sijaintiin.
- Lisättiin ravintolat kartalle markereina, jotka avaavat popup-ikkunan klikattaessa.

## Työkalut ja ympäristö

Projektissa on käytetty seuraavia työkaluja koodin laadun ja yhtenäisyyden varmistamiseksi:

- **ESLint:** Staattinen analyysi virheiden löytämiseksi
- **Prettier:** Automaattinen koodin muotoilu
- **EditorConfig:** Editorikohtaiset asetukset (esim. sisennys)

## Testaus / Käyttö

Tehtäviä voi testata avaamalla juurikansion **`index.html`**-tiedoston, joka toimii valikkona kaikkiin harjoituksiin.
