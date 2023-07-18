const apiKey = "98566f4f31cdc4fbc3133dd19d072046";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search-box input");
        const searchBtn = document.querySelector(".search-box button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
                document.querySelector(".details").style.display = "none";
                document.querySelector(".details-2").style.display = "none";
                document.querySelector(".details-3").style.display = "none";
            }
            else {
                var data = await response.json();

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".country").innerHTML = "(" + data.sys.country + ")";
                document.querySelector(".temp").innerHTML = (data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
                document.querySelector(".visibility").innerHTML = (data.visibility)/1000 + " km";
                document.querySelector(".feels").innerHTML = data.main.feels_like + "°C";
                document.querySelector(".max").innerHTML = " " + data.main.temp_max + "°C";
                document.querySelector(".min").innerHTML = " " + data.main.temp_min + "°C";

                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "images/clouds.png";
                    console.log("CLouds");
                }
                else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "images/clear.png";
                    console.log("CLouds");
                }
                else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "images/rain.png";
                    console.log("CLouds");
                }
                else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "images/drizzle.png";
                    console.log("CLouds");
                }
                else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "images/mist.png";
                    console.log("CLouds");
                }
                document.querySelector(".details").style.display = "flex";
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".details-2").style.display = "flex";
                document.querySelector(".details-3").style.display = "flex";
                document.querySelector(".error").style.display = "none";
            }
        }

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        })