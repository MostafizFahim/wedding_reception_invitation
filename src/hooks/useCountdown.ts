import { useState, useEffect } from 'react'
import { CONTENT } from '../content'

export interface CountdownState {
  days: number
  hours: number
  minutes: number
  seconds: number
  isStarted: boolean // Target time reached
  isPassed: boolean  // Reception concluded
  isEventDay: boolean // Event in progress / today
  isPostEvent: boolean // Concluded
}

/**
 * Calculates countdown units accurately against Asia/Dhaka ISO timestamp.
 * Supports custom timestamp injection for testing before, during, and post-event states.
 */
export function calculateRemainingTime(customNow?: number): CountdownState {
  const targetTime = new Date(CONTENT.event.isoDateTime).getTime()
  const endTime = CONTENT.event.isoEndDateTime
    ? new Date(CONTENT.event.isoEndDateTime).getTime()
    : targetTime + 4 * 60 * 60 * 1000

  // Check for global test override or caller parameter
  const now =
    customNow ??
    (typeof window !== 'undefined' &&
    (window as unknown as { __COUNTDOWN_TEST_NOW__?: number }).__COUNTDOWN_TEST_NOW__
      ? (window as unknown as { __COUNTDOWN_TEST_NOW__: number }).__COUNTDOWN_TEST_NOW__
      : Date.now())

  const diff = targetTime - now

  if (diff <= 0) {
    const isPostEvent = now >= endTime
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isStarted: true,
      isPassed: isPostEvent,
      isEventDay: !isPostEvent,
      isPostEvent,
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
    isEventDay: false,
    isPostEvent: false,
  }
}

export function useCountdown(overrideNow?: number): CountdownState {
  const [countdown, setCountdown] = useState<CountdownState>(() =>
    calculateRemainingTime(overrideNow)
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateRemainingTime(overrideNow))
    }, 1000)

    return () => clearInterval(timer)
  }, [overrideNow])

  return countdown
}
