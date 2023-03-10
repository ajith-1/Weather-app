
function btn() {

    let name = document.getElementById('name');
    let cityName = name.value;                       
   
    if (cityName != 0) {
        document.getElementById('err').style.visibility = "hidden";
    }
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7f325534a3f95ae95fbcea68796b02db&units=metric`;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        if (data.cod === 200) {
            showWeatherData(data)
            document.getElementById('show').style.visibility = "visible";
            document.getElementById('show').style.transform = "translateY(0px)";
        }
        else {
            document.getElementById('err').style.visibility = "visible";
        }
    }).catch((error) => {

    })
}

function showWeatherData(data) {
    document.getElementById('description').innerHTML = `<img src="https://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png" class="icon"/>${data.weather[0].description}`;
    document.getElementById('temp').innerHTML = `${Math.ceil(data.main.temp)}`;
    document.getElementById('cityName').innerHTML = `${data.name}`;
    document.getElementById('humidity').innerHTML = `${data.main.humidity}`;
    document.getElementById('wind').innerHTML = `${(Math.ceil(data.wind.speed)) * 3.6}`;
    document.getElementById('max').innerHTML = `${Math.ceil(data.main.temp_max)}`;
    document.getElementById('min').innerHTML = `${Math.floor(data.main.temp_min)}`;
}
