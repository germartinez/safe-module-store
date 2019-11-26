// @flow
import DailyLimitSol from '@gnosis.pm/safe-contracts/build/contracts/DailyLimitModule.json'
import ProxyFactorySol from '@gnosis.pm/safe-contracts/build/contracts/ProxyFactory.json'
import GnosisSafeSol from '@gnosis.pm/safe-contracts/build/contracts/GnosisSafe.json'
import SafeProxy from '@gnosis.pm/safe-contracts/build/contracts/Proxy.json'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const SENTINEL_ADDRESS = '0x0000000000000000000000000000000000000001'


const getDailyLimitContract = (web3: any, address: any) => {
  return new web3.eth.Contract(DailyLimitSol.abi, address)
}

const deployDailyLimitContract = async (web3: any) => {
  let dailyLimitContract = new web3.eth.Contract(DailyLimitSol.abi)
  let accounts = await web3.eth.accounts
  let defaultAccount = accounts[0]
  let deployedContract = await dailyLimitContract.deploy({'data': DailyLimitSol.bytecode, 'arguments': [[], []]}).send({'from': defaultAccount, 'gas': 1800000})
  return deployedContract
}