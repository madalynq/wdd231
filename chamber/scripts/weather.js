const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



const myKey = "be4d345637ed47d542e6c75dde64fe18"
const lat = "49.75"
const lon = "6.64"

const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)
  }

apiFetch();