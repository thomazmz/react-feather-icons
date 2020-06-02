import React from 'react'
import * as icons from '../Icon/Icons'
import { IconCard } from '../IconCard'
import { Icon } from '../Icon'
import style from './style.module.css'

export const IconList = ({ className }) => {
  return (
    <div className={`${style.iconList} + ${className}`}>
      {Object.keys(icons).map((iconKey, i) => {
        return (
          <IconCard key={i} className={style.iconCard} >
            <Icon name={iconKey} className={style.icon} />
            {`<${iconKey} />`}
          </IconCard>
        )
      })}
    </div>
  )
}