const calculateWindChill = (t, v) => Number((13.12 + 0.6215 * t - 11.37 * v**0.16 + 0.3965 * t * v**0.16).toFixed(1));

const temperature = 10;
const windSpeed = 5;

const windChillElement = document.querySelector('.windChill');

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.innerHTML = `<span>Wind Chill:</span>${calculateWindChill(temperature, windSpeed)}`;
}