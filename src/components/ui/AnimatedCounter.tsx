'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView && !started && ref.current) {
      setStarted(true)
      const node = ref.current
      const controls = animate(0, target, {
        duration,
        ease: 'easeOut',
        onUpdate(value) {
          node.textContent = `${prefix}${Math.round(value)}${suffix}`
        },
      })
      return () => controls.stop()
    }
  }, [isInView, started, target, duration, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
