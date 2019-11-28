import React from 'react'
import Link from 'components/layout/Link'
import ConnectButton from 'components/ConnectButton'
import { WELCOME_URL, PLAYGROUND_URL } from 'routes/routes'
import { styles } from './styles'

const Header = () => {
  const classes = styles()
  return (
    <div className={classes.header}>
      <Link to={WELCOME_URL}>Safe module store</Link>
      <Link to={PLAYGROUND_URL}>Playground</Link>
      <div>
        <ConnectButton />
      </div>
    </div>
  )
}

export default Header
