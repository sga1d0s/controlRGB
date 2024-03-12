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
        }
    }

    // Cambio UNICO
    handleSliderChangeColor = (event) => {
        if (event.target.name == "red") {
            this.setState({ valueRed: event.target.value })
        }
        if (event.target.name == "blue") {
            this.setState({ valueBlue: event.target.value })
        }
        if (event.target.name == "green") {
            this.setState({ valueGreen: event.target.value })
        }
    };

    render() {
        return (
            <>
                <h1>Control RGBA</h1>

                <div className='frame'
                    // Cambio de estilo literales `${valor}`
                    style={{ backgroundColor: `rgb(${this.state.valueRed}, ${this.state.valueGreen}, ${this.state.valueBlue})` }}>
                </div>

                <div className='sliders'>

                    <label htmlFor="">RED</label>
                    <Slider
                        // defaultValue={this.state.valueBlue}
                        value={this.state.valueRed}
                        onChange={this.handleSliderChangeColor}
                        name="red"
                        min={0}
                        max={255}
                        valueLabelDisplay='on'
                    />
                    <label htmlFor="">BLUE</label>
                    <Slider
                        value={this.state.valueBlue}
                        onChange={this.handleSliderChangeColor}
                        name="blue"
                        min={0}
                        max={255}
                        valueLabelDisplay='on'
                    />
                    <label htmlFor="">GREEN</label>
                    <Slider
                        value={this.state.valueGreen}
                        onChange={this.handleSliderChangeColor}
                        name="green"
                        min={0}
                        max={255}
                        valueLabelDisplay='on'
                    />


                </div>
            </>
        );
    }
}
export default App;