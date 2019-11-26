import React from 'react';

class Form extends React.Component { 
    state = {
        city: ''
    }

    changeStateOfInput = (event) => {
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        const {city} = this.state
        return(
            <form onSubmit={this.props.getWeather}>
                <input type='text' 
                       name='city' 
                       value={city}
                       placeholder='City...'
                       onChange={this.changeStateOfInput}>
                </input>
                <button>Check Weather</button>
            </form>
        )
    }    
}

export default Form;