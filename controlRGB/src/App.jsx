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
            opacity: 100,
            degrees: 0,
            radius: 0,
            scale: 100,
        }
    }

    // Cambio color
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

    // Rotar
    changeForm = (event => {
        if (event.target.name == "rotate"){
            this.setState({degrees: event.target.value})
        }
        if (event.target.name == "circle"){
            this.setState({radius: event.target.value})
        }
        if (event.target.name == "scale"){
            this.setState({scale: event.target.value});
        }

    })

    render() {
        return (
            <>
                <h1>Control&nbsp;
                    <span style={{color:`red`}}>R</span>
                    <span style={{color:`green`}}>G</span>
                    <span style={{color:`blue`}}>B</span>
                    <span style={{color:`black`}}>A</span>
                </h1>

                <div className='frame'
                    // Cambio de estilo literales style={{`${valor}`}}
                    style={{
                        backgroundColor: `rgba(${this.state.valueRed}, ${this.state.valueGreen}, ${this.state.valueBlue}, ${this.state.opacity / 100})`,
                        boxShadow: `10px 10px 10px rgba(${this.state.valueRed}, ${this.state.valueGreen}, ${this.state.valueBlue}, ${this.state.opacity / 190})`,
                        transform: `rotate(${this.state.degrees}deg)`,
                        borderRadius: `${this.state.radius}%`,
                        transform: `scale(${this.state.scale}%)`,
                    }}>
                </div>

                <div className='sliders'>
                    <div className='contSlider'>
                        <label style={{ color: `red` }}>RED</label>
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
                        <label style={{ color: `green` }}>GREEN</label>
                        <Slider
                            value={this.state.valueGreen}
                            onChange={this.handleSliderChange}
                            name="green"
                            min={0}
                            max={255}
                            valueLabelDisplay='on'
                        />
                    </div>

                    <div className='contSlider'>
                        <label style={{ color: `blue` }}>BLUE</label>
                        <Slider
                            value={this.state.valueBlue}
                            onChange={this.handleSliderChange}
                            name="blue"
                            min={0}
                            max={255}
                            valueLabelDisplay='on'
                        />
                    </div>

                    <div className='contSlider'>
                        <label htmlFor="">OPACITY</label>
                        <Slider
                            value={this.state.opacity}
                            onChange={this.handleSliderChange}
                            name="opacity"
                            min={0}
                            max={100}
                            valueLabelDisplay='on'
                        />
                    </div>

                    <div className='contSlider'>
                        <label htmlFor="">ROTATE</label>
                        <Slider
                            value={this.state.degrees}
                            onChange={this.changeForm}
                            name="rotate"
                            min={0}
                            max={360}
                            valueLabelDisplay='on'
                        />
                    </div>

                    <div className='contSlider'>
                        <label htmlFor="">CIRCLE</label>
                        <Slider
                            value={this.state.radius}
                            onChange={this.changeForm}
                            name="circle"
                            min={0}
                            max={50}
                            valueLabelDisplay='on'
                        />
                    </div>

                    <div className='contSlider'>
                        <label htmlFor="">SCALE</label>
                        <Slider
                            value={this.state.scale}
                            onChange={this.changeForm}
                            name="scale"
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