const form = document.querySelector("form");
form.addEventListener("submit", searchCity);

async function searchCity(e) {
  e.preventDefault();

  const city = document.getElementById("inputText").value.trim();
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1ecfa0f914fee84260e7f4511b9d67dc`
    );
    const dataW = await response.json();
    if (!dataW.message) {
      document.getElementsByClassName("weather")[0].innerHTML = `
                     <div style="width:100%; text-align:center; margin-top:20px;"><h1>${dataW.name.toUpperCase()}</h1></div>
                    
             <div style="display: flex; justify-content: space-around;">
                <div><img src="images/weather_icon_full_clouds.svg" alt="" class="weatherIcon">
                    <h4>${dataW.weather[0].main}</h4>
                    
                </div>
               
                <h2 style="margin-top: 80px;">${dataW.main.temp}°C</h2>
                <div style="margin:50px 0;">
                    <p>Wind:${dataW.wind.speed} kmph </p>
                    <p>Precip: 0 mm</p>
                    <p>Humidity:${dataW.main.humidity}%</p>
                    <p>Pressure:${dataW.main.pressure}mb</p>
                </div>
            </div>
            <div>

            </div>
            <div style=" display:flex; justify-content: space-around;">
                <div class="day">
                    <p>MON</p>
                    <img src="images/weather_icon_full_sun.svg" alt="">
                </div>
                <div class="day">
                    <p>TUE</p>
                    <img src="images/weather_icon_full_sun.svg" alt="">
                </div>
                <div class="day">
                    <p>WED</p>
                    <img src="images/weather_icon_full_sun.svg" alt="">
                </div>
                <div class="day">
                    <p>THU</p>
                    <img src="images/weather_icon_full_sun.svg" alt="">
                </div>
                <div class="day">
                    <p>FRI</p>
                    <img src="images/weather_icon_full_sun.svg" alt="">
                </div>
                <div class="day">
                    <p>SAT</p>
                    <img src="images/weather_icon_full_sun.svg" alt="">
                </div>
                <div class="day">
                    <p>SUN</p>
                    <img src="images/weather_icon_full_sun.svg" alt="">
                </div>
            </div>
          
            `;
      inputText.value = "";
    } else {
      alert(dataW.message);
    }
  } catch (error) {
    console.log(error);
  }
}
