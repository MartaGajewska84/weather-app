import React from 'react';

class Form extends React.Component { 
    state = {
        city: '',
    }

    render() {
        const {city, getWeather, changeStateOfInput} = this.props
        return(
            <form onSubmit={getWeather}>
                <input type='text' 
                       name='city' 
                       value={city}
                       placeholder='City...'
                       onChange={changeStateOfInput}
                       >
                </input>
                <button >Check Weather</button>
            </form>
        )
    }    
}

export default Form;