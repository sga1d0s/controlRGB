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
            index: 0,
        }
    }

    handleSliderChangeRed = (event) => {
        console.log({ valueRed: event.target.value })
        this.setState({ valueRed: event.target.value })

    };

    handleSliderChangeBlue = (event) => {
        console.log({ valueBlue: event.target.value })
    };
    handleSliderChangeGreen = (event) => {
        console.log({ valueGreen: event.target.value })
    };

    render() {
        return (
            <>
                <h1>Control RGBA</h1>

                <div className='frame' style={{ backgroundColor: `rgb(${this.state.valueRed}, ${this.state.valueGreen}, ${this.state.valueBlue})` }}>
                    {/* Contenido de la clase .frame */}
                </div>

                <div className='sliders'>

                    <Slider
                        id="red"
                        defaultValue={this.state.valueRed}
                        aria-label="red"
                        valueLabelDisplay="auto"
                        onChange={this.handleSliderChangeRed}
                        key={0}
                        value={this.state.red}
                    />
                    <Slider
                        defaultValue={this.state.valueBlue}
                        aria-label="blue"
                        valueLabelDisplay="auto"
                        onChange={this.handleSliderChangeBlue}
                        key={1}
                    />
                    <Slider
                        defaultValue={this.state.valueGreen}
                        aria-label="green"
                        valueLabelDisplay="auto"
                        onChange={this.handleSliderChangeGreen}
                        key={2}
                    />


                </div>
            </>
        );
    }
}
export default App;