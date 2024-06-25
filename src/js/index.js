import { showWeatherInfo } from "./screen.js"
const inputSearch = document.getElementById('input-search')
const button = document.getElementById('search-button')

button.addEventListener('click', async () => {
    const cityName = inputSearch.value
    if (validateEmptyInput(cityName)) return
    const data = await getData(cityName)
    showWeatherInfo(data)
})

inputSearch.addEventListener('keyup', async (event) => {
    const cityName = event.target.value
    const key = event.which || event.keyCode
    const isEnterKeyPress = key === 13

    if (isEnterKeyPress) {
        if (validateEmptyInput(cityName)) return
        const data = await getData(cityName)
        showWeatherInfo(data)
    }
})

async function getData(city) {
    const apiKey = '506716191f58433996d172125242406'
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&lang=pt`
    const response = await fetch(apiUrl)
    if (response.status !== 200) return
    const data = response.json()
    return data
}

function validateEmptyInput(cityValue) {
    if (cityValue.length === 0) {
        alert('Preencha o campo com o nome de uma cidade')
        return true
    }
}