import React from 'react'
import Header from 'components/Header'
import { styles } from './styles'

interface PageProps {
  readonly children: React.ReactNode
}

const Page = ({ children }: PageProps) => {
  const classes = styles()
  return (
    <>
      <Header />
      <div className={classes.page}>
        {children}
      </div>
    </>
  )
}

export default Page
