import React, { PropTypes, Component } from 'react'
import convertTime from './convert-time'

class CountUp extends Component {
  constructor (props) {
    super(props)
    this.startTime = Date.now() - (props.startTime * 1000)
    this.state = { time: props.startTime }
    this.tick = this.tick.bind(this)
  }

  componentDidMount () {
    this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({ time: Date.now() - this.startTime })
  }

  render () {
    return <span>{convertTime(this.state.time)}</span>
  }
}
CountUp.propTypes = {
  startTime: PropTypes.number
}
CountUp.defaultProps = {
  startTime: 0
}
export default CountUp
