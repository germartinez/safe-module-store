import React from 'react'
import { styles } from './styles'

const Header = () => {
  const classes = styles()
  return (
    <div className={classes.header}>
      Safe module store header
    </div>    
  )
}

export default Header
