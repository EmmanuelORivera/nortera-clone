'use client'
import React, { useEffect } from 'react'

const LoadInitialUseEffects = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])
  return <></>
}

export default LoadInitialUseEffects
