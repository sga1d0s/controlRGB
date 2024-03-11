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

    handleSlide(value) {
        console.log(value)
    }

    render() {
        return (
            <>
                <h1>Control RGBA</h1>
 
                <div className='frame'>

                </div>
                <div className='sliders'>

                    <Slider
                        defaultValue={this.state.valueRed}
                        aria-label="Red"
                        valueLabelDisplay="auto"
                        onChange={() => { this.handleSlide(event.target.value) }} />


                    <Slider defaultValue={this.state.valueBlue} aria-label="Blue" valueLabelDisplay="auto" />
                    <Slider defaultValue={this.state.valueGreen} aria-label="Green" valueLabelDisplay="auto" />
                    <Slider
                        onChange={() => { console.log(this.state.value) }} />
                </div>
            </>
        );
    }
}
export default App;