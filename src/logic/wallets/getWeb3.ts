import Web3 from 'web3'
import { getNetwork } from 'config/index'

export const ETHEREUM_NETWORK = {
  MAINNET: 'MAINNET',
  RINKEBY: 'RINKEBY',
  UNKNOWN: 'UNKNOWN',
}

export const WALLET_PROVIDER = {
  SAFE: 'SAFE',
  METAMASK: 'METAMASK',
  WALLETCONNECT: 'WALLETCONNECT',
}

export const INJECTED_PROVIDERS = [
  WALLET_PROVIDER.SAFE,
  WALLET_PROVIDER.METAMASK,
]

export const ETHEREUM_NETWORK_IDS = {
  1: ETHEREUM_NETWORK.MAINNET,
  4: ETHEREUM_NETWORK.RINKEBY,
}

const getInfuraUrl = () => {
  const isMainnet = process.env.REACT_APP_NETWORK === 'mainnet'

  return `https://${isMainnet ? 'mainnet' : 'rinkeby'}.infura.io:443/v3/${process.env.REACT_APP_INFURA_TOKEN}`
}

// With some wallets from web3connect you have to use their provider instance only for signing
// And our own one to fetch data
export const web3ReadOnly = new Web3((<any>window).web3.currentProvider)

let web3 = web3ReadOnly
export const getWeb3 = () => web3

export const resetWeb3 = () => {
  web3 = web3ReadOnly
}

const getProviderName: Function = (web3Provider: any): string => {
  let name

  switch (web3Provider.currentProvider.constructor.name) {
    case 'SafeWeb3Provider':
      name = WALLET_PROVIDER.SAFE
      break
    case 'MetamaskInpageProvider':
      name = WALLET_PROVIDER.METAMASK
      break
    default:
      name = 'Wallet'
  }

  if (web3Provider.currentProvider.isWalletConnect) {
    name = WALLET_PROVIDER.WALLETCONNECT
  }

  return name
}

export const getAccountFrom: Function = async (web3Provider: any): Promise<string | null> => {
  const accounts = await web3Provider.eth.getAccounts()
  return accounts && accounts.length > 0 ? accounts[0] : null
}

const getNetworkIdFrom = async (web3Provider: any) => {
  const networkId = await web3Provider.eth.net.getId()

  return networkId
}

export const getProviderInfo: Function = async (web3Provider: any) => {
  web3 = new Web3(web3Provider)

  const name: string = getProviderName(web3)
  const account: string = await getAccountFrom(web3)
  const network: number = await getNetworkIdFrom(web3)

  const available = account !== null

  return {
    name,
    available,
    loaded: true,
    account,
    network,
  }
}

export const getBalanceInEtherOf = async (safeAddress: string) => {
  if (!web3) {
    return '0'
  }

  const funds: string = await web3.eth.getBalance(safeAddress)

  if (!funds) {
    return '0'
  }

  return web3.utils.fromWei(funds, 'ether').toString()
}
