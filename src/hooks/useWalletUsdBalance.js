import React from "react";
import { useMoralisWeb3Api } from "react-moralis";
import useWalletCryptoBalance from "./useWalletCryptoBalance";
import { calculateUsdValue } from "utils/web3-utils";

export default function useWalletUsdBalance() {
    const Web3Api = useMoralisWeb3Api();
    const { maticBalance, usdtBalance } = useWalletCryptoBalance();
    const fetchTokenPrice = async (tokenAddress) => {
        //Get token price on QuickSwap Polygon
        const options = {
            address: tokenAddress,
            chain: "polygon",
            exchange: "quickswap",
        };
        const price = await Web3Api.token.getTokenPrice(options);
        return price.usdPrice;
    };
    const [usdtUsd, setUsdtUsd] = React.useState(0);
    const [maticUsd, setMaticUsd] = React.useState(0);
    React.useEffect(() => {
        const fetchBalance = async () => {
            const maticUsdValue = await fetchTokenPrice("0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270");
            const usdtUsdValue = await fetchTokenPrice("0xc2132d05d31c914a87c6611c10748aeb04b58e8f");
            setMaticUsd(calculateUsdValue(maticUsdValue, maticBalance));
            setUsdtUsd(calculateUsdValue(usdtUsdValue, usdtBalance, 6));
        };
        fetchBalance();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { maticUsd, usdtUsd };
}