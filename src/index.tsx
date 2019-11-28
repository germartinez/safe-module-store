import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'components/Root'
import * as serviceWorker from 'serviceWorker'

declare global {
  // tslint:disable-next-line
  interface Window {
    walletConnector: any;
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
