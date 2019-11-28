import * as React from 'react'
import WalletConnect from '@walletconnect/browser'
import WalletConnectQRCodeModal from '@walletconnect/qrcode-modal'
import { IInternalEvent } from '@walletconnect/types'
import Button from 'components/layout/Button'

interface IAppState {
  walletConnector: WalletConnect | null
  connected: boolean
  chainId: number
  uri: string
  accounts: string[]
  address: string
  result: any | null
}

const INITIAL_STATE: IAppState = {
  walletConnector: null,
  connected: false,
  chainId: 1,
  uri: '',
  accounts: [],
  address: '',
  result: null,
}

class ConnectButton extends React.Component<any, any> {
  public state: IAppState = {
    ...INITIAL_STATE
  }

  public walletConnectInit = async () => {
    // bridge url
    const bridge = 'https://bridge.walletconnect.org'

    // create new walletConnector
    const walletConnector = new WalletConnect({ bridge })

    window.walletConnector = walletConnector

    await this.setState({ walletConnector })

    // check if already connected
    if (!walletConnector.connected) {
      // create new session
      await walletConnector.createSession()

      // get uri for QR Code modal
      const uri = walletConnector.uri

      // display QR Code modal
      WalletConnectQRCodeModal.open(uri, () => {
        console.log('QR Code Modal closed') // tslint:disable-line
      })
    }
    // subscribe to events
    await this.subscribeToEvents()
  }
  public subscribeToEvents = () => {
    const { walletConnector } = this.state
    if (!walletConnector) {
      return
    }

    walletConnector.on('session_update', async (error, payload) => {
      console.log('walletConnector.on("session_update")') // tslint:disable-line
      if (error) {
        throw error
      }
      const { chainId, accounts } = payload.params[0]
      this.onSessionUpdate(accounts, chainId)
    })

    walletConnector.on('connect', (error, payload) => {
      console.log('walletConnector.on("connect")') // tslint:disable-line
      if (error) {
        throw error
      }
      this.onConnect(payload)
    })

    walletConnector.on('disconnect', (error, payload) => {
      console.log('walletConnector.on("disconnect")') // tslint:disable-line
      if (error) {
        throw error
      }
      this.onDisconnect()
    })

    if (walletConnector.connected) {
      const { chainId, accounts } = walletConnector
      const address = accounts[0]
      this.setState({
        connected: true,
        chainId,
        accounts,
        address
      })
    }

    this.setState({ walletConnector })
  }

  killSession = async () => {
    const { walletConnector } = this.state
    if (walletConnector) {
      walletConnector.killSession()
    }
    this.resetApp()
  }

  public resetApp = async () => {
    await this.setState({ ...INITIAL_STATE })
  }

  public onConnect = async (payload: IInternalEvent) => {
    const { chainId, accounts } = payload.params[0]
    const address = accounts[0]
    await this.setState({
      connected: true,
      chainId,
      accounts,
      address
    })
    WalletConnectQRCodeModal.close()
    this.getAccountAssets()
  }

  public onDisconnect = async () => {
    WalletConnectQRCodeModal.close()
    this.resetApp()
  }

  public onSessionUpdate = async (accounts: string[], chainId: number) => {
    const address = accounts[0]
    await this.setState({ chainId, accounts, address })
    await this.getAccountAssets()
  }

  public getAccountAssets = async () => {
    const { address } = this.state
    try {
      await this.setState({ address })
    } catch (error) {
      console.error(error) // tslint:disable-line
    }
  }

  public render = () => {
    const {
      address,
      connected,
    } = this.state
    return (connected
      ? (
        <div>
          <>{address}</>
          <Button onClick={this.killSession}>Disconnect</Button>
        </div>
      )
      : <Button onClick={this.walletConnectInit}>Connect</Button>
    )
  }
}

export default ConnectButton
