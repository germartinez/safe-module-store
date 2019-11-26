import React from 'react'
import Link from 'components/layout/Link'
import { PLAYGROUND_URL } from 'routes/routes'
import { styles } from './styles'

const Header = () => {
  const classes = styles()
  return (
    <div className={classes.header}>
      <div>
        Safe module store header
      </div>
      <div>
        <Link to={PLAYGROUND_URL}>Playground</Link>
      </div>
    </div>    
  )
}

export default Header
