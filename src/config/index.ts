import { ETHEREUM_NETWORK } from 'logic/wallets/getWeb3'

export const getNetwork = () => (process.env.REACT_APP_NETWORK === 'mainnet' ? ETHEREUM_NETWORK.MAINNET : ETHEREUM_NETWORK.RINKEBY)
