import React from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/title';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = '05508bb378ad891b493b0c886cca7a57';

class App extends React.Component {
  state = {
    city: '',
    latitude: '',
    longitude: '',
    temp: '',
    tempMax: '',
    tempMin: '',
    humidity: '',
    pressure: '',
    rain: '',
    wind: '',
    isLoading: false,
    error: false
  }

  getWeather= (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
  
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(response => {
      console.log(response);
      this.setState({
        city: response.data.name,
        latitude: response.data.coord.lat,
        longitude: response.data.coord.lon,
        temp: response.data.main.temp,
        tempMax: response.data.main.temp_max,
        tempMin: response.data.main.temp_min,
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        rain: response.data.rain,
        wind: response.data.wind.speed,
        })
    })

}

  
  
  
  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather city={this.state.city}
                 latitude={this.state.latitude}
                 longitude={this.state.longitude}
                 temp={this.state.temp}
                 tempMax={this.state.tempMax}
                 tempMin={this.state.tempMin}
                 humidity={this.state.humidity}
                 pressure={this.state.pressure}
                 rain={this.state.rain}
                 wind={this.state.wind}/>
      </div>
    );
  }
}

export default App;
