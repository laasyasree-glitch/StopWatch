import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timeElapsedInSeconds} = this.state

    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  tick = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  startOrPause = () => {
    const {isTimeRunning} = this.state

    if (!isTimeRunning) {
      this.timerID = setInterval(this.tick, 1000)
    } else {
      clearInterval(this.timerID)
    }
    this.setState(prevState => ({isTimeRunning: !prevState.isTimeRunning}))
  }

  resetBtn = () => {
    this.setState({
      isTimeRunning: false,
      timeElapsedInSeconds: 0,
    })
    clearInterval(this.timerID)
  }

  render() {
    const time = this.getElapsedSecondsInTimeFormat()

    return (
      <div className="bg">
        <h1 className="title">Stopwatch</h1>
        <div className="card">
          <div>
            <div className="timer">
              <img
                className="img"
                src="https://tse4.mm.bing.net/th?id=OIP.rx1I39YwGJ2szAvIrCZRsQHaHa&pid=Api&P=0"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
          </div>
          <div className="timer time">
            <h1 className="timePart">{time}</h1>
            <div className="button-container">
              <button
                type="button"
                className="btn btn-green"
                onClick={this.startOrPause}
              >
                Start
              </button>
              <button
                type="button"
                className="btn btn-red"
                onClick={this.startOrPause}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn btn-yellow"
                onClick={this.resetBtn}
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
