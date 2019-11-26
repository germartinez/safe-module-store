import React from 'react'
import Page from 'components/Page'
import Button from 'components/layout/Button'

const Playground = () => {
  const handleClick = () => {
    alert('Hello')
  }

  return (
    <Page>
      <Button onClick={handleClick}>Test button</Button>
    </Page>
  )
}

export default Playground
