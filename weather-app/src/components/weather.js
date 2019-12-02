import React from 'react';

const Weather = ({city, cityName, weather, latitude, longitude, temp, tempMax, tempMin, humidity, pressure, wind, error}) => {
    
        return(
            
          <div className="container mt-3 text-center text-light">
              {city && <h3>{cityName}</h3>}
              {city && <h4>{weather}</h4>}
            <div className="mt-4">
              {city && <h6>Latitude: {latitude}</h6>}
              {city && <h6>Longitude: {longitude}</h6>}
            </div>
              {city && <h6>Temperature: {temp}&#176;C</h6>}
              {city && <h6>Max temperature: {tempMax}&#176;C</h6>}
              {city && <h6>Min temperature: {tempMin}&#176;C</h6>}
              {city && <h6>Humidity: {humidity}%</h6>}
              {city && <h6>Pressure: {pressure}hPa</h6>}
              {city && <h6>Wind: {wind}m/s</h6>}
              {error && <h3>Please enter the city name</h3>} 
          </div>
          
        )
    
}

export default Weather;