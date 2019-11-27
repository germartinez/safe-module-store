// @flow
import DailyLimitJson from '@gnosis.pm/safe-contracts/build/contracts/DailyLimitModule.json'
import GnosisSafeJson from '@gnosis.pm/safe-contracts/build/contracts/GnosisSafe.json'
import ModuleManagerJson from '@gnosis.pm/safe-contracts/build/contracts/ModuleManager.json'
import ProxyFactoryJson from '@gnosis.pm/safe-contracts/build/contracts/ProxyFactory.json'
import ProxyJson from '@gnosis.pm/safe-contracts/build/contracts/Proxy.json'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const SENTINEL_ADDRESS = '0x0000000000000000000000000000000000000001'


interface ModuleInfo{
    address: string
    name: string
    version: string
}

const getDefaultAccount = async (web3: any): Promise<string> => {
  let accounts = await web3.eth.accounts
  return accounts[0]
}

const getDailyLimitContract = (web3: any, address?: string) => {
  return new web3.eth.Contract(DailyLimitJson.abi, address)
}

const getSafeContract = (web3: any, address?: string) => {
  return new web3.eth.Contract(GnosisSafeJson.abi, address)
}

const deployDailyLimitContract = async (web3: any) => {
  let dailyLimitContract = getDailyLimitContract(web3)
  let deployData = {
    'data': DailyLimitJson.bytecode
  }
  let from = await getDefaultAccount(web3)
  let gas = await dailyLimitContract.deploy(deployData).estimateGas()
  let deployedContract = await dailyLimitContract.deploy(deployData).send({from, gas})
  // address is in `deployedContrat.options.address`
  return deployedContract
}

export const getEnabledModulesForSafe = async (web3: any, address: string): Promise<ModuleInfo[]> => {
  let safeContract = getSafeContract(web3, address)
  let moduleAddresses = await safeContract.methods.getModules().call()
  let moduleInfos: ModuleInfo[] = []
  for (let i = 0; i < moduleAddresses.length; i += 1) {
    // Use any module with 'NAME' and 'VERSION'
    let moduleAddress = moduleAddresses[i]
    let moduleContract = new web3.eth.Contract(DailyLimitJson.abi, moduleAddress)
    moduleInfos.push({
      address: moduleAddress,
      name: await moduleContract.methods.NAME().call(),
      version: await moduleContract.methods.VERSION().call(),
    })
  }
  return moduleInfos
}

const enableModuleForSafe = async (web3: any, address: string, moduleAddress: string) => {
  let safeContract = getSafeContract(web3, address)
  safeContract.methods.enableModule(moduleAddress).send('')
}

const disableModuleForSafe = async (web3: any, address: string, moduleAddress: string) => {
  let safeContract = getSafeContract(web3, address)
  safeContract.methods.disableModule(moduleAddress).send()
}