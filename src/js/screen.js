const cityText = document.getElementById('city')
const temperatureText = document.getElementById('temperature')
const climateText = document.getElementById('climate')
const principalInfoTitle = document.getElementById('principal-info-title')
const humidityText = document.getElementById('humidity')
const windSpeedText = document.getElementById('wind-speed')
const weatherImage = document.getElementById('weather-image')

export function showWeatherInfo(data) {
    const temperatureInfo = data.current.temp_c

    const cityName = data.location.name

    principalInfoTitle.classList.add('unshow')

    temperatureText.textContent = `${temperatureInfo} ºC`

    cityText.textContent = cityName

    climateText.textContent = data.current.condition.text

    humidityText.textContent = `${data.current.humidity} %`

    windSpeedText.textContent = `${data.current.wind_mph} km/h`

    weatherImage.src = data.current.condition.icon
}