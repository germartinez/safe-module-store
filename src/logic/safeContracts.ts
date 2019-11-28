// @flow
import DailyLimitJson from '@gnosis.pm/safe-contracts/build/contracts/DailyLimitModule.json'
import GnosisSafeJson from '@gnosis.pm/safe-contracts/build/contracts/GnosisSafe.json'
import ModuleManagerJson from '@gnosis.pm/safe-contracts/build/contracts/ModuleManager.json'
import ProxyFactoryJson from '@gnosis.pm/safe-contracts/build/contracts/ProxyFactory.json'
import ProxyJson from '@gnosis.pm/safe-contracts/build/contracts/Proxy.json'

const TransferLimitModuleAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"delegate","type":"address"}],"name":"AddDelegate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint96","name":"value","type":"uint96"}],"name":"ExecuteLimitTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"delegate","type":"address"}],"name":"RemoveDelegate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint96","name":"limitAmount","type":"uint96"},{"indexed":false,"internalType":"uint16","name":"resetTime","type":"uint16"}],"name":"SetLimit","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"LIMIT_TRANSFER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"NAME","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegate","type":"address"}],"name":"addDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint48","name":"","type":"uint48"}],"name":"delegates","outputs":[{"internalType":"address","name":"delegate","type":"address"},{"internalType":"uint48","name":"prev","type":"uint48"},{"internalType":"uint48","name":"next","type":"uint48"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"delegatesStart","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"domainSeparator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract GnosisSafe","name":"safe","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint96","name":"amount","type":"uint96"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint96","name":"payment","type":"uint96"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"executeLimitTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"safe","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint96","name":"amount","type":"uint96"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint96","name":"payment","type":"uint96"},{"internalType":"uint16","name":"nonce","type":"uint16"}],"name":"generateTransferHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint48","name":"start","type":"uint48"},{"internalType":"uint8","name":"pageSize","type":"uint8"}],"name":"getDelegates","outputs":[{"internalType":"address[]","name":"results","type":"address[]"},{"internalType":"uint48","name":"next","type":"uint48"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"getTokenLimit","outputs":[{"internalType":"uint256[5]","name":"","type":"uint256[5]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"limitDetails","outputs":[{"internalType":"uint96","name":"amount","type":"uint96"},{"internalType":"uint96","name":"spent","type":"uint96"},{"internalType":"uint16","name":"resetTimeMin","type":"uint16"},{"internalType":"uint32","name":"lastTransferMin","type":"uint32"},{"internalType":"uint16","name":"nonce","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegate","type":"address"}],"name":"removeDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"resetLimit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint96","name":"limitAmount","type":"uint96"},{"internalType":"uint16","name":"resetTimeMin","type":"uint16"}],"name":"setLimit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokens","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]
const AllowanceModuleAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"safe","type":"address"},{"indexed":false,"internalType":"address","name":"delegate","type":"address"}],"name":"AddDelegate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"safe","type":"address"},{"indexed":false,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint96","name":"value","type":"uint96"}],"name":"ExecuteAllowanceTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"safe","type":"address"},{"indexed":false,"internalType":"address","name":"delegate","type":"address"}],"name":"RemoveDelegate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"safe","type":"address"},{"indexed":false,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint96","name":"allowanceAmount","type":"uint96"},{"indexed":false,"internalType":"uint16","name":"resetTime","type":"uint16"}],"name":"SetAllowance","type":"event"},{"constant":true,"inputs":[],"name":"ALLOWANCE_TRANSFER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"NAME","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegate","type":"address"}],"name":"addDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowances","outputs":[{"internalType":"uint96","name":"amount","type":"uint96"},{"internalType":"uint96","name":"spent","type":"uint96"},{"internalType":"uint16","name":"resetTimeMin","type":"uint16"},{"internalType":"uint32","name":"lastTransferMin","type":"uint32"},{"internalType":"uint16","name":"nonce","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint48","name":"","type":"uint48"}],"name":"delegates","outputs":[{"internalType":"address","name":"delegate","type":"address"},{"internalType":"uint48","name":"prev","type":"uint48"},{"internalType":"uint48","name":"next","type":"uint48"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"delegatesStart","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"domainSeparator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract GnosisSafe","name":"safe","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint96","name":"amount","type":"uint96"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint96","name":"payment","type":"uint96"},{"internalType":"address","name":"delegate","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"executeAllowanceTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"safe","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint96","name":"amount","type":"uint96"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint96","name":"payment","type":"uint96"},{"internalType":"uint16","name":"nonce","type":"uint16"}],"name":"generateTransferHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"safe","type":"address"},{"internalType":"uint48","name":"start","type":"uint48"},{"internalType":"uint8","name":"pageSize","type":"uint8"}],"name":"getDelegates","outputs":[{"internalType":"address[]","name":"results","type":"address[]"},{"internalType":"uint48","name":"next","type":"uint48"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"safe","type":"address"},{"internalType":"address","name":"delegate","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"getTokenAllowance","outputs":[{"internalType":"uint256[5]","name":"","type":"uint256[5]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"safe","type":"address"},{"internalType":"address","name":"delegate","type":"address"}],"name":"getTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegate","type":"address"}],"name":"removeDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegate","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"resetAllowance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegate","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint96","name":"allowanceAmount","type":"uint96"},{"internalType":"uint16","name":"resetTimeMin","type":"uint16"}],"name":"setAllowance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokens","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]

const rinkebyTransferLimitModuleAddress = '0x3F0Ce7d9d56880655C497977f3c2037f60388344'
const rinkebyAllowanceModuleAddress = '0x0E61D0df5F58f35972Eb46F2008C270f5c36C3CB'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const SENTINEL_ADDRESS = '0x0000000000000000000000000000000000000001'


interface ModuleInfo{
    address: string
    name: string
    version: string
}

const getDefaultAccount = async (web3: any): Promise<string> => {
  return web3.eth.getAccounts().then((accounts: string[]) => accounts[0])
}

const deployDailyLimitContract = async (web3: any): Promise<any> => {
  // Not used anymore
  let dailyLimitContract = new web3.eth.Contract(DailyLimitJson.abi)
  let deployData = {
    'data': DailyLimitJson.bytecode
  }
  let from = await getDefaultAccount(web3)
  let gas = await dailyLimitContract.deploy(deployData).estimateGas()
  // address is in `deployedContrat.options.address`
  return dailyLimitContract.deploy(deployData).send({from, gas})
}

const getTransferLimitContract = (web3: any, address?: string) => {
  return new web3.eth.Contract(TransferLimitModuleAbi, address)
}

const getSafeContract = (web3: any, address?: string) => {
  return new web3.eth.Contract(GnosisSafeJson.abi, address)
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
  // Call this function from a WalletConnected Safe
  let safeContract = getSafeContract(web3, address)
  let from = await getDefaultAccount(web3)
  return safeContract.methods.enableModule(moduleAddress).send({from})
}

const disableModuleForSafe = async (web3: any, address: string, moduleAddress: string) => {
  // Call this function from a WalletConnected Safe
  let safeContract = getSafeContract(web3, address)
  let from = await getDefaultAccount(web3)
  return safeContract.methods.disableModule(moduleAddress).send({from})
}

// --------------------------------------------------
// Transfer Limit Module Logic
// --------------------------------------------------
const setTransferLimit = async (web3: any, limitAmount: number, resetTimeMin: number = 86400, token_address: string = ZERO_ADDRESS, module_address: string = rinkebyTransferLimitModuleAddress) => {
  // Call this function from a WalletConnected Safe
  // 86400 = 60 * 60 * 24 -> By default, 1 day
  let dailyLimitContract = getTransferLimitContract(web3, module_address)
  let from = await getDefaultAccount(web3)
  return dailyLimitContract.methods.setLimit(token_address, limitAmount, resetTimeMin).send({from})
}

const resetLimit = async (web3: any, token_address: string = ZERO_ADDRESS, module_address: string = rinkebyTransferLimitModuleAddress) => {
  // Call this function from a WalletConnected Safe
  let dailyLimitContract = getTransferLimitContract(web3, module_address)
  let from = await getDefaultAccount(web3)
  return dailyLimitContract.methods.resetLimit(token_address).send({from})
}

const executeLimitTransfer = async (web3: any, safe_address: string, to: string, amount:number, token_address: string = ZERO_ADDRESS, module_address: string = rinkebyTransferLimitModuleAddress) => {
  // Call this function from every owner of the Safe
  let dailyLimitContract = getTransferLimitContract(web3, module_address)
  let from = await getDefaultAccount(web3)
  return dailyLimitContract.methods.executeLimitTransfer(safe_address, token_address, to, amount, ZERO_ADDRESS, 0, "0x").send({from})
}

const getTransferLimitTokens = (web3: any, safe_address: string, module_address: string = rinkebyTransferLimitModuleAddress) => {
  // Return tokens with enabled Transfer Limit for Safe
  let dailyLimitContract = getTransferLimitContract(web3, module_address)
  return dailyLimitContract.methods.getTokens(safe_address).call()
}