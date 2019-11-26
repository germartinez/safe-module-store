import React from 'react'
import { Link } from 'react-router-dom'

interface LinkComponentProps {
  readonly children: React.ReactNode
  readonly to: string
}

const LinkComponent = ({
  children,
  to
}: LinkComponentProps) => {
  return (
    <Link to={to}>
      {children}
    </Link>
  )
}

export default LinkComponent
