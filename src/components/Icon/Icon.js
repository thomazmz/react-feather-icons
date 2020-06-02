import React from 'react'
import * as icons from './Icons'
import style from './style.module.css'

export function Icon({ name, className }) {
  const IconComponent = icons[name]
  return (
    <IconComponent className={`${style.icon} ${className}`} />
  )
}