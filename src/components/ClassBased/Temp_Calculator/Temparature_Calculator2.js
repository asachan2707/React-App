import React from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function Boiling_Verdict(props) {
    let message;
    if ((props.temperature >= 37.78 && props.unit === 'Celsius') || (props.temperature >= 100 && props.unit === 'Fahrenheit')) {
        message = 'Water will boil at this temperature.'
    } else {
        if (props.unit === 'Celsius') {
            message = 'Water will boil only at boiling temperature which is 37.78C.';
        } else {
            message = 'Water will boil only at boiling temperature which is 100F.';
        }
    }

    return <p>{message}
        <br />
        Current Temperature is {props.temperature || 0} {props.unit}.
    </p>;
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Temparature_Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '' }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // this.setState({ temperature: e.target.value });
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        const temeratureUnit = scaleName[scale];
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in {temeratureUnit}:</legend>
                    <span><input value={temperature} onChange={this.handleChange} /></span>
                    <span><Boiling_Verdict temperature={temperature} unit={temeratureUnit} /></span>
                </fieldset>
            </div>
        );
    }
}

class Temparature_Calculator2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' };
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }
    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <Temparature_Input
                    scale='c'
                    onTemperatureChange={this.handleCelsiusChange}
                    temperature={celsius} />
                <br />
                <Temparature_Input
                    scale='f'
                    onTemperatureChange={this.handleFahrenheitChange}
                    temperature={fahrenheit} />
            </div>
        );
    }
}

export default Temparature_Calculator2;