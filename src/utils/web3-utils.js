import Moralis from "moralis";

export const ethers = Moralis.web3Library;

/**
 * A function for connecting a contract with a web3 provider
 * @param defaultState
 * @param web3Provider
 * @return new ethers.Contract;
 */

export const enableContract = async (defaultState, web3Provider) => {
  console.log(web3Provider);
  const Contract = new ethers.Contract(defaultState.deployedAddress, defaultState.abi, web3Provider);
  return Contract;
};
