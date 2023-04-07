// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, isRunningTime: false, isSession: false}
  // onStart onStop onReset

  componentDidMount() {
    console.log('componentDidMount got hit.......')
    const {isRunningTime} = this.state
    if (isRunningTime && this.timerId === undefined) {
      console.log('if Condition of componentDidMount got hit.......')
      this.timerId = setInterval(this.tick, 1000)
    } else if (isRunningTime && this.timerId !== undefined) {
      this.tick()
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    let {minutes, seconds} = this.state
    seconds += 1
    if (seconds === 60) {
      seconds = 0
      minutes += 1
    }
    this.setState({minutes, seconds})
  }

  onStart = () => {
    console.log('onStart got hit.......')
    // const {isRunningTime} = this.state
    this.setState({isRunningTime: true, isSession: true})
    // if (isRunningTime === false) {

    // }

    this.timerId = setInterval(this.tick, 1000)
  }

  onStop = () => {
    console.log('onStop got hit.......')
    clearInterval(this.timerId)
    console.log(this.timerId)
    this.setState({isRunningTime: false})
  }

  onReset = () => {
    console.log('onReset got hit.......')
    if (this.timerId) {
      clearInterval(this.timerId)
    }
    this.setState({minutes: 0, seconds: 0, isRunningTime: false})
  }

  render() {
    console.log('render got hit.......')
    const {minutes, seconds} = this.state
    const finalMinutes = minutes >= 10 ? minutes : `0${minutes}`
    const finalSeconds = seconds >= 10 ? seconds : `0${seconds}`
    return (
      <div className="page_container">
        <div className="content_container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card_container">
            <div className="image_and_cardHeading">
              <img
                className="stopwatch"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="card_title">Timer</p>
            </div>
            <h1 className="displayTime">{`${finalMinutes}:${finalSeconds}`}</h1>
            <div className="btn_container">
              <button
                onClick={this.onStart}
                className="btn success"
                type="button"
              >
                Start
              </button>
              <button
                onClick={this.onStop}
                className="btn danger"
                type="button"
              >
                Stop
              </button>
              <button
                onClick={this.onReset}
                className="btn warning"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
