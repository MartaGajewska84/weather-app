import React from 'react';

const Weather = ({city, cityName, weather, latitude, longitude, temp, tempMax, tempMin, humidity, pressure, wind}) => {
    
        return(
          <div>
              {city && <p>{cityName}</p>}
              {city && <p>{weather}</p>}
              {city && <p>Latitude: {latitude}</p>}
              {city && <p>Longitude: {longitude}</p>}
              {city && <p>Temperature: {temp}&#176;C</p>}
              {city && <p>Max temperature: {tempMax}&#176;C</p>}
              {city && <p>Min temperature: {tempMin}&#176;C</p>}
              {city && <p>Humidity: {humidity}%</p>}
              {city && <p>Pressure: {pressure}hPa</p>}
              {city && <p>Wind: {wind}m/s</p>}
          </div>
        )
    
}

export default Weather;