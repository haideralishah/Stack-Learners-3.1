import React, { Component } from 'react';


class StopWatch extends Component {
    state = {
        minute: 0,
        seconds: 0,
        hasStarted: false
    }
    startTimer = () => {
        this.setState({ hasStarted: true });
        this.updateTimer();
    }

    timerInterval;
    updateTimer() {
        this.timerInterval = setInterval(() => {
            let secondsClone = this.state.seconds;
            secondsClone++;
            if (secondsClone < 60) {
                this.setState({ seconds: secondsClone });
            }
            else {
                let minuteClone = this.state.minute;
                minuteClone++;
                this.setState({
                    seconds: 0,
                    minute: minuteClone
                });
            }
        }, 10);
    }

    pauseInterval = () => {
        clearInterval(this.timerInterval);
        this.setState({ hasStarted: false });
    }

    stopTimer = () => {
        clearInterval(this.timerInterval);
        this.setState({
            minute: 0,
            seconds: 0,
            hasStarted: false
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevState.hasStarted);
    }

    componentDidUpdate() {
        console.log('component has been updated successfully.');
    }
    render() {
        return (
            <div>
                <h1>{this.state.minute}:{this.state.seconds}</h1>

                {
                    this.state.hasStarted ?
                        <button onClick={this.pauseInterval}>Pause</button> :
                        <button onClick={this.startTimer}>Start</button>
                }

                <button onClick={this.stopTimer}>Stop</button>
            </div>
        )
    }
}

export default StopWatch;
