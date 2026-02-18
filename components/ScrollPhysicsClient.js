'use client'

import { useEffect } from 'react'
import { initScrollPhysics } from '../lib/scrollPhysics'

export default function ScrollPhysicsClient() {
  useEffect(() => {
    initScrollPhysics()
  }, [])

  return null
}
