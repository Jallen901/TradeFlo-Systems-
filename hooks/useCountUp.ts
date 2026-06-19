'use client'
import { useEffect, useState } from 'react'

export function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [inView, target, duration])

  return count
}
