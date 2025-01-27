document.addEventListener('DOMContentLoaded', () => {
    let temperature = 9; //  Celsius
    let windSpeed = 20;   //  km/h
  
    function calculateWindChill(temp, wind) {
      return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
    }

    if (temperature <= 10 && windSpeed > 4.8) {
      let windChill = calculateWindChill(temperature, windSpeed);
      document.querySelector('#windchill').innerText = `${windChill.toFixed(1)} °C`;
    } else {
      document.querySelector('#windchill').innerText = 'N/A';
    }

    document.querySelector('#temperature').innerText = `${temperature} °C`;
    document.querySelector('#windspeed').innerText = `SW ${windSpeed} km/h`;

  });
  

// Footer
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `Last update: ${lastModified}`;