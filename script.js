const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "61b3e7658d4224fb4c1aa52beede17f4";

const searchBox = document.getElementById("input");
const searchBtn = document.getElementById("btn");
const weatherIcon = document.getElementById("weather-icon");


async function weatherCheck(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();

    if(response.status == 404){
        document.getElementById("error").style.display = "block";
        document.getElementById("weather").style.display = "none";
    }else{
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + " " +"°C";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "img/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "img/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "img/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "img/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "img/snow.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "img/rain.png";
        }
    
        document.getElementById("weather").style.display = "block";
        document.getElementById("error").style.display = "none";
    }


}

searchBtn.addEventListener("click",()=>{
    weatherCheck(searchBox.value);
})
