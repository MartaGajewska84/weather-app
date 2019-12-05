import React from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/title';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = '05508bb378ad891b493b0c886cca7a57';

class App extends React.Component {
  state = {
    cityName: '',
    weather: '',
    latitude: '',
    longitude: '',
    temp: '',
    tempMax: '',
    tempMin: '',
    humidity: '',
    pressure: '',
    wind: '',
    error: false,
    showWeather: false
  }

  changeStateOfInput = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
      showWeather: false
      })
  }

  toggleWeatherHandler = () => {
    const doesShow = this.state.showWeather;
    this.setState({showWeather: !doesShow})
  }

    getWeather= (e) => {
    e.preventDefault();
    
    const {city} = this.state
  
    if (city){
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(response => {
      console.log(response);
        this.setState({
        cityName: response.data.name,
        weather: response.data.weather[0].description,
        latitude: response.data.coord.lat,
        longitude: response.data.coord.lon,
        temp: response.data.main.temp,
        tempMax: response.data.main.temp_max,
        tempMin: response.data.main.temp_min,
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        wind: response.data.wind.speed,
        error: false,
        showWeather: true
        })
       })
      } else {
        this.setState({
          error: true,
        })
      }
    }  
    
    render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather} 
              toggleWeatherHandler={this.toggleWeatherHandler} 
              changeStateOfInput={this.changeStateOfInput}/>
        {this.state.showWeather ?
        <div>
          <Weather {...this.state}/>
        </div> : null}
      </div>
    );
  }
}

export default App;
