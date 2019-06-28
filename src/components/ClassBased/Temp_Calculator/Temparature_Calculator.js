import React from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function Boiling_Verdict(props) {
    let message;
    if ((props.temperature >= 100 && props.unit === 'Celsius') || (props.temperature >= 36 && props.unit === 'Fahrenheit')) {
        message = 'Water will boil at this temperature.'
    } else {
        if (props.unit === 'Fahrenheit') {
            message = 'Water will boil only at boiling temperature which is 36F.';
        } else {
            message = 'Water will boil only at boiling temperature which is 100C.';
        }
    }

    return <p>{message}
        <br />
        Current Temperature is {props.temperature || 0} {props.unit}.
    </p>;
}

class Temparature_Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '' }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }

    render() {
        const temperature = this.state.temperature;
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

class Temparature_Calculator extends React.Component {
    render() {
        return (
            <div>
                <Temparature_Input scale='c' />
                <br />
                <Temparature_Input scale='f' />
            </div>
        );
    }
}

export default Temparature_Calculator;