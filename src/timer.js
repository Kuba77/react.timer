import React, { PropTypes } from 'react'
import CountDown from './countdown'
import CountUp from './countup'

function Timer ({ countDown, startTime }) {
  if (countDown && startTime > 0) return <CountDown startTime={startTime} />
  if (!countDown) return <CountUp startTime={startTime} />
  return <span/>
}
Timer.propTypes = {
  countDown: PropTypes.bool,
  startTime: PropTypes.number
}
export default Timer
