import { useState, useEffect } from 'react'
import { CONTENT } from '../content'

export interface CountdownState {
  days: number
  hours: number
  minutes: number
  seconds: number
  isStarted: boolean
  isPassed: boolean
}

export function useCountdown(): CountdownState {
  const [countdown, setCountdown] = useState<CountdownState>(() => {
    return calculateRemainingTime()
  })

  function calculateRemainingTime(): CountdownState {
    const targetTime = new Date(CONTENT.event.isoDateTime).getTime()
    const endTime = CONTENT.event.isoEndDateTime
      ? new Date(CONTENT.event.isoEndDateTime).getTime()
      : targetTime + 4 * 60 * 60 * 1000

    const now = Date.now()
    const diff = targetTime - now

    if (diff <= 0) {
      const isPassed = now >= endTime
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isStarted: true,
        isPassed,
      }
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    return {
      days,
      hours,
      minutes,
      seconds,
      isStarted: false,
      isPassed: false,
    }
  }

  useEffect(() => {
    // Immediate calculation
    setCountdown(calculateRemainingTime())

    const timer = setInterval(() => {
      setCountdown(calculateRemainingTime())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return countdown
}
