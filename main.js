
document.getElementById('bt').addEventListener("click", townListener);
function townListener() {
        let url = "https://api.openweathermap.org/data/2.5/weather?q="+ document.querySelector('input').value +"&appid=6f88826d767f323ad19cd282444924e9";
        let apiMeteo = fetch(url)
                    .then(async response=> {
                        console.log(response);
                        const json = await response.json();

                        let para = document.querySelectorAll('p');

                        let error = response.status;
                        if(error == 404) {
                            para[0].textContent = "Cette ville n'existe pas"
                            para[1].textContent = "";
                            para[2].textContent = "";
                        }

                        let town = json.name;
                        let temperature = json.main.temp -273.1;
                        let weather = json.weather[0].main;

                        para[0].textContent = "Town: " + town;
                        para[1].textContent = "Temperature: " + temperature.toFixed(2) + "°c";
                        para[2].textContent = "Weather: " + weather;
                    });
                }