function getWeather(city, apiKey) {
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const params = { q: city, appid: apiKey, lang: "en" };
    
    fetch(url + "?" + new URLSearchParams(params))
        .then(response => response.json())
        .then(data => {
            const city = data.name;
            const country = data.sys.country;
            const temp = Math.round(data.main.temp - 273.15);
            const icon = data.weather[0].icon;
            const condition = data.weather[0].description;

            document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            document.getElementById("weather-temp").textContent = `${temp}°C, ${city}, ${country}`;
            document.getElementById("weather-condition").textContent = condition;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "a363357900b357f804a2b3597af6e228";  // You can also get this from an input field
    const city = "Baku";  // You can also get this from an input field
    getWeather(city, apiKey);
});