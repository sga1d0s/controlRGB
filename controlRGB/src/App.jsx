import React, { Component } from 'react'
import Slider from '@mui/material/Slider';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueRed: 0,
            valueBlue: 0,
            valueGreen: 0,
            opacity: 100
        }
    }

    // Cambio UNICO
    handleSliderChange = (event) => {
        if (event.target.name == "red") {
            this.setState({ valueRed: event.target.value })
        }
        if (event.target.name == "blue") {
            this.setState({ valueBlue: event.target.value })
        }
        if (event.target.name == "green") {
            this.setState({ valueGreen: event.target.value })
        }
        if (event.target.name == "opacity") {
            this.setState({ opacity: event.target.value })
        }
    };

    render() {
        return (
            <>
                <h1>Control RGBA</h1>

                <div className='frame'
                    // Cambio de estilo literales `${valor}`
                    style={{ backgroundColor: `rgba(${this.state.valueRed}, ${this.state.valueGreen}, ${this.state.valueBlue}, ${this.state.opacity / 100})`,
                    boxShadow: `10px 10px 10px rgba(${this.state.valueRed}, ${this.state.valueGreen}, ${this.state.valueBlue}, ${this.state.opacity / 190})` }}>
                </div>

                <div className='sliders'>

                    <div className='contSlider'>
                        <label style={{color:`red`}}>RED</label>
                        <Slider
                            // defaultValue={this.state.valueBlue}
                            value={this.state.valueRed}
                            onChange={this.handleSliderChange}
                            name="red"
                            min={0}
                            max={255}
                            valueLabelDisplay='on'
                        />
                    </div>

                    <div className='contSlider'>
                        <label style={{color: `blue`}}>BLUE</label>
                        <Slider
                            // defaultValue={this.state.valueBlue}
                            value={this.state.valueBlue}
                            onChange={this.handleSliderChange}
                            name="blue"
                            min={0}
                            max={255}
                            valueLabelDisplay='on'
                        />
                    </div>

                    <div className='contSlider'>
                        <label style={{color: `green`}}>GREEN</label>
                        <Slider
                            // defaultValue={this.state.valueBlue}
                            value={this.state.valueGreen}
                            onChange={this.handleSliderChange}
                            name="green"
                            min={0}
                            max={255}
                            valueLabelDisplay='on'
                        />
                    </div>
                    <div className='contSlider'>
                        <label htmlFor="">OPACITY</label>
                        <Slider
                            // defaultValue={this.state.valueBlue}
                            value={this.state.opacity}
                            onChange={this.handleSliderChange}
                            name="opacity"
                            min={0}
                            max={100}
                            valueLabelDisplay='on'
                        />
                    </div>
                </div>
            </>
        );
    }
}
export default App;