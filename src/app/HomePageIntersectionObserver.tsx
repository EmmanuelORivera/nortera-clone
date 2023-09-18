'use client'
import React from 'react'
import useIntersectionObserver from './hooks/useIntersectionObserver'
import {
  FINAL_ZOOM,
  INITIAL_ZOOM,
  MOVE_DOWN_CLASS,
  MOVE_UP_CLASS,
} from './constants/classNames'

const HomePageIntersectionObserver = () => {
  useIntersectionObserver(`.${MOVE_DOWN_CLASS}`, (target: Element) => {
    target.classList.add(MOVE_UP_CLASS)
  })
  useIntersectionObserver(`.${FINAL_ZOOM}`, (target) => {
    target.classList.add(INITIAL_ZOOM)
  })
  return <></>
}

export default HomePageIntersectionObserver
