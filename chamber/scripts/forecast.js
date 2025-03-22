const currentDay = document.querySelector('.day1');
const tomorrow = document.querySelector('.day2');
const dayAfter = document.querySelector('.day3');

const key = "be4d345637ed47d542e6c75dde64fe18"
const latitude = "43.61"
const long = "-116.39"

const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${long}&appid=${key}&units=imperial`

async function apiFetch() {
    try {
        const answer = await fetch(forecastUrl);
        if (answer.ok) {
            const data = await answer.json();
            console.log(data);
            displayAnswer(data);
        } else {
            throw Error (await answer.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayAnswer(data) {
    currentDay.innerHTML = `High: ${data.list[0].main.temp_max} &deg;F<br>Low: ${data.list[0].main.temp_min} &deg;F`
    tomorrow.innerHTML = `High: ${data.list[1].main.temp_max} &deg;F<br>Low: ${data.list[1].main.temp_min} &deg;F`
    dayAfter.innerHTML = `High: ${data.list[2].main.temp_max} &deg;F<br>Low: ${data.list[2].main.temp_min} &deg;F`
}

apiFetch();