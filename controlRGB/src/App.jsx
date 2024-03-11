import React, { Component } from 'react'
import Slider from '@mui/material/Slider';
import './App.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            valueBlue:"0",
            valueRed:"0",
            valueGreen:"0",
        }
    }
    render() {
        return (
            <>
                <h1>Control RGBA</h1>
                <div>

                </div>
                <div className='frame'>

                </div>
                <div className='sliders'>

                    <Slider defaultValue={this.valueBlue} aria-label="Default" valueLabelDisplay="auto" />
                    <Slider defaultValue={this.valueRed} aria-label="Default" valueLabelDisplay="auto" />
                    <Slider defaultValue={this.valueGreen} aria-label="Default" valueLabelDisplay="auto" />

                </div>
            </>
        );
    }
}
export default App;