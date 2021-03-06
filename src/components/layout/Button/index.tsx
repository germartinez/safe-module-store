import React from 'react'
import Button from '@material-ui/core/Button'
import { styles } from './styles'

interface ButtonComponentProps {
  readonly children: React.ReactNode
  readonly onClick: any
}

const ButtonComponent = ({
  children,
  onClick
}: ButtonComponentProps) => {
  const classes = styles()
  return <Button className={classes.button} onClick={onClick} variant="contained">{children}</Button>
}

export default ButtonComponent
