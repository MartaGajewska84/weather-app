import React from 'react';

class Form extends React.Component { 
    state = {
        city: '',
    }

    render() {
        const {city, getWeather, changeStateOfInput} = this.props
        return(
           <form className="form-inline mb-4 justify-content-center" onSubmit={getWeather}>
                <input type='text' 
                    name='city' 
                    value={city}
                    placeholder='City...'
                    onChange={changeStateOfInput}
                    >
                </input>
                <button  className="btn btn-warning btn-sm ml-3">Check Weather</button>
            </form>
                    
        )
    }    
}

export default Form;