const target = document.querySelector('#target');

const browserName = navigator.appName;
const browserVersion = navigator.appVersion;
const os = navigator.platform;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const awailWidth = window.screen.availWidth;
const availHeight = window.screen.availHeight;

const options = {day: 'numeric', month: 'long', year: 'numeric'};
const date = new Date().toLocaleDateString('fi-FI', options);


const time = new Date().toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' });


const infoItems = [
  `Selain: ${browserName}, Version: ${browserVersion}`,
  `Käyttöjärjestelmä: ${os}`,
  `Ruudun koko: ${screenWidth} x ${screenHeight}`,
  `Käytettävissä oleva ruutu: ${awailWidth} x ${availHeight}`,
  `Päivämäärä  ${date}`,
  `Kellonaika: ${time}`
];

infoItems.forEach(text => {
  const p = document.createElement('p');
  p.textContent = text;
  target.appendChild(p);
});
