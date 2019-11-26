import React from 'react'
import Button from '@material-ui/core/Button'

interface ButtonComponentProps {
  readonly children: React.ReactNode
  readonly onClick: any
}

const ButtonComponent = ({
  children,
  onClick
}: ButtonComponentProps) => {
  return <Button onClick={onClick} variant="contained">{children}</Button>
}

export default ButtonComponent
