const apiKey = "fba7536ed1e7654e8c237511578307b0";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const appId = `&appid=${apiKey}`;

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + appId);
  

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else if(!response.ok){
    document.querySelector(".null").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";
    document.querySelector(".fl").innerHTML = Math.round(data.main.feels_like) + "°C";

    const weatherIcon = document.querySelector(".weather-icon");

    switch (data.weather[0].main) {
      case "Clear":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-1.svg";
        break;
      case "Clouds":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-7.svg";
        break;
      case "Drizzle":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-34.svg";
        break;
      case "Mist":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-17.svg";
        break;
      case "Rain":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-19.svg";
        break;
      case "Snow":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-30.svg";
        break;
      case "Thunderstorm":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-15.svg";
        break;
      case "Fog":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-5.svg";
        break;
      case "Haze":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-16.svg";
        break;
      case "Smoke":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-18.svg";
        break;
      case "Dust":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-11.svg";
        break;
      case "Sand":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-12.svg";
        break;
      case "Ash":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-13.svg";
        break;
      case "Squall":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-25.svg";
        break;
      case "Tornado":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-26.svg";
        break;
      case "Overcast":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-8.svg"; // Overcast clouds
        break;
      case "Partly Cloudy":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-6.svg"; // Partly cloudy skies
        break;
      case "Light Rain":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-36.svg"; // Light rain
        break;
      case "Heavy Rain":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-20.svg"; // Heavy rain
        break;
      case "Light Snow":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-31.svg"; // Light snow
        break;
      case "Heavy Snow":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-32.svg"; // Heavy snow
        break;
      case "Freezing Rain":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-33.svg"; // Freezing rain
        break;
      default:
        weatherIcon.src = "https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"; // Default/fallback icon
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".null").style.display = "none";
  }
}

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});


searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
