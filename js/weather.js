function getCurrentWeather(data, zipCode) {
    console.log(data)
    // Check to see if the OpenWeather API returned an error
    if (data.cod == '404' || data.cod == '401' || data.cod == '400' || zipCode.trim() == '') {
        // show the initially hidden div
        weatherContent.style.display = 'block'
        weatherContent.innerHTML = 'Please enter a valid Zip Code'
        return // exit
    }

    let p = document.createElement('p') // create a p element
    let date = new Date(data.dt * 1000)
    let dateStr = date.toLocaleDateString('en-us', { weekday: 'long', month: 'long', day: 'numeric' })
    let timeStr = date.toLocaleTimeString('en-us')

    p.innerHTML = '<h1>' + dateStr + ' - ' + timeStr + '</h1>' + '<br>' + data.name + '<br>' + data.weather[0].description + '<br>' + data.main.temp// content for p
    weatherContent.append(p) // add the p to the weatherContent to the DOM
    const icon = document.createElement('img') // create img element for icon
    icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`) // set the src attribute using the data from the API
    weatherContent.append(icon) // add the icon to the DOM

    let lowTemp = document.createElement('p')
    lowTemp.innerText = 'Lowest Temperature: ' + data.main.temp_min + '\u00B0F'
    weatherContent.append(lowTemp)

    let hiTemp = document.createElement('p')
    hiTemp.innerText = 'Highest Temperature: ' + data.main.temp_max + '\u00B0F'
    weatherContent.append(hiTemp)

    let humid = document.createElement('p')
    humid.innerText = 'Humidity: ' + data.main.humidity
    weatherContent.append(humid)

    let feels = document.createElement('p')
    feels.innerText = 'Feels Like: ' + data.main.feels_like + '\u00B0F'
    weatherContent.append(feels)

    let wind = document.createElement('p')
    wind.innerText = 'Wind speed: ' + data.wind.speed + ' mph'
    weatherContent.append(wind)

    weatherContent.style.display = 'block'
}

function getWeatherForecast(data, zipCode) {
    console.log("There is data here")
    console.log(data)
    let currentDate
    let currentDiv
    data.list.forEach(function (dayInfo) {
        let date = new Date(dayInfo.dt * 1000)
        let dayStr = date.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        let timeStr = date.toLocaleTimeString('en-us')
        let test = document.createElement('p')
        let lowT = dayInfo.main.temp_min
        let hiT = dayInfo.main.temp_max
        let humidity = dayInfo.main.humidity
        let feelsLike = dayInfo.main.feels_like
        let windSpeed = dayInfo.wind.speed

        if (currentDate != dayStr) {
            currentDate = dayStr
            if (currentDiv != null) {
                weatherContent.append(currentDiv)
            }
            currentDiv = document.createElement('p')
            // makeDiv = document.createElement('div')
            console.log(currentDate)
            console.log(' - ' + timeStr)
            // currentDiv.innerText =  date.toLocaleDateString('en-us', { weekday: 'long'})
            test.innerHTML = '<h1>' + dayStr + '</h1>'
            test.innerHTML += '<br>Time: ' + timeStr
            test.innerHTML += '<br> &emsp; Lowest Temperature: ' + lowT + '\u00B0F'
            test.innerHTML += '<br> &emsp; Highest Temperature: ' + hiT + '\u00B0F'
            test.innerHTML += '<br> &emsp; Humidity: ' + humidity
            test.innerHTML += '<br> &emsp; Feels Like: ' + feelsLike + '\u00B0F'
            test.innerHTML += '<br> &emsp; Wind Speed: ' + windSpeed
            currentDiv.append(test)

        } else {
            console.log(' - ' + timeStr)
            test.innerHTML += '<br>Time: ' + timeStr
            test.innerHTML += '<br> &emsp; Lowest Temperature: ' + lowT + '\u00B0F'
            test.innerHTML += '<br> &emsp; Highest Temperature: ' + hiT + '\u00B0F'
            test.innerHTML += '<br> &emsp; Humidity: ' + humidity
            test.innerHTML += '<br> &emsp; Feels Like: ' + feelsLike + '\u00B0F'
            test.innerHTML += '<br> &emsp; Wind Speed: ' + windSpeed
            currentDiv.append(test)

        }
    })
    weatherContent.append(currentDiv)
    weatherContent.style.display = 'block'
}

// Declare Variables
const weatherContent = document.querySelector('#weather')
const API_KEY = '539eb848f74470676a8d41a155b95357' // Replaced this with my own

document.querySelector('#getWeather').addEventListener('click', function () {
    weatherContent.innerHTML = '' // clear out prior results
    let zipCode = document.querySelector('#zip').value
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=${API_KEY}&units=imperial`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Call getWeather function
            console.log(data)
            getCurrentWeather(data, zipCode)
        }).catch((e) => {
            console.log(`This error occurred: ${e}`)
        })
})

document.querySelector('#getWeatherForecast').addEventListener('click', function () {
    weatherContent.innerHTML = '' // clear out prior results
    let zipCode = document.querySelector('#zip').value
    let url = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},US&appid=${API_KEY}&units=imperial`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Call getWeather function
            console.log(data)
            getWeatherForecast(data, zipCode)

        }).catch((e) => {
            console.log(`This error occurred: ${e}`)
        })
})