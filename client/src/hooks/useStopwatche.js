import { useState, useRef, useEffect } from "react"

const padStart = (num) => {
  return num.toString().padStart(2, "0")
}

export const formatMs = (milliseconds) => {
  if (milliseconds === "DNF") {
    return "DNF"
  }

  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  // using the modulus operator gets the remainder if the time roles over
  // we don't do this for hours because we want them to rollover
  // seconds = 81 -> minutes = 1, seconds = 21.
  // 60 minutes in an hour, 60 seconds in a minute, 1000 milliseconds in a second.
  minutes = minutes % 60
  seconds = seconds % 60
  // divide the milliseconds by 10 to get the tenths of a second. 543 -> 54
  const ms = Math.floor((milliseconds % 1000) / 10)

  let str = `${padStart(minutes)}:${padStart(seconds)}.${padStart(ms)}`

  if (hours > 0) {
    str = `${padStart(hours)}:${str}`
  }

  return str
}

export const useStopWatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const [timeWhenLastStopped, setTimeWhenLastStopped] = useState(0)
  const [laps, setLaps] = useState([])

  const interval = useRef()

  useEffect(() => {
    if (startTime > 0) {
      interval.current = setInterval(() => {
        setTime(() => Date.now() - startTime + timeWhenLastStopped)
      }, 1)
    } else {
      if (interval.current) {
        clearInterval(interval.current)
        interval.current = undefined
      }
    }
  }, [startTime])

  const start = () => {
    setIsRunning(true)
    setStartTime(Date.now())
  }

  const stop = () => {
    setIsRunning(false)
    setStartTime(0)
    setTimeWhenLastStopped(time)
  }

  const reset = () => {
    setIsRunning(false)
    setStartTime(0)
    setTimeWhenLastStopped(0)
    setTime(0)
    setLaps([])
  }

  const lap = () => {
    setLaps(laps => [time, ...laps])
  }

  const formattedLapData = laps.map((l, index) => {
    const previousLap = laps[index + 1] || 0
    const lapTime = l - previousLap

    return {
      time: formatMs(lapTime),
      lap: laps.length - index,
    }
  })

  return {
    start,
    stop,
    reset,
    lap,

    isRunning,
    time: formatMs(time),
    milliseconds: time,

    laps: formattedLapData,
    currentLapTime: laps[0] ? formatMs(time - laps[0]) : formatMs(time),
    hasStarted: time > 0,
  }
}