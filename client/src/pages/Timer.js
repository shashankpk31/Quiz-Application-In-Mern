import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: parseInt(props.startTimeInSeconds, 10) || 0,
            variant:"success"
           
        };
    }

    tick() {
        if (this.state.seconds <= 0) {
            this.setState(state => ({
                seconds: state.seconds
            }));
        } else {
            this.setState(state => ({
                seconds: state.seconds - 1
            }));
        }
        if (this.state.seconds < 10) {
            this.setState({ variant: "danger" })
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    formatTime(secs) {
        let hours = Math.floor(secs / 3600);
        let minutes = Math.floor(secs / 60) % 60;
        let seconds = secs % 60;
        return [hours, minutes, seconds]
            .map(v => ('' + v).padStart(2, '0'))
            .filter((v, i) => v !== '00' || i > 0)
            .join(':');
    }
    render() {
        return (
            <Alert variant={this.state.variant}>
                Time left:{this.state.seconds > 1 ? this.formatTime(this.state.seconds) : "Times Up" }
            </Alert>
        )
    }
}

export default Timer
