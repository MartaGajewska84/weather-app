import React from 'react';

const Weather = ({city, cityName, weather, latitude, longitude, temp, tempMax, tempMin, humidity, pressure, wind, noSuchCity, error}) => {
    
        return(
            
            <div className="container mt-3 text-center text-light">
                
                    {city && 
                        <div>
                            <h3>{cityName}</h3>
                            <h4>{weather}</h4>
                            <div className="mt-4">
                                <h6>Latitude: {latitude}</h6>
                                <h6>Longitude: {longitude}</h6>
                            </div>
                            <div>
                                <h6>Temperature: {temp}&#176;C</h6>
                                <h6>Max temperature: {tempMax}&#176;C</h6>
                                <h6>Min temperature: {tempMin}&#176;C</h6>
                                <h6>Humidity: {humidity}%</h6>
                                <h6>Pressure: {pressure}hPa</h6>
                                <h6>Wind: {wind}m/s</h6>
                            </div>
                        </div>}
                    {error && <h3>Please enter a city name</h3>}
                    {noSuchCity && <h3>This city does not exist</h3>}
                    
                
            </div>
          
        )
    
}

export default Weather;