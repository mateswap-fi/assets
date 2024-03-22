import { CoinType } from "@trustwallet/wallet-core";

export const getChainName = (id: CoinType): string =>  CoinType.id(id); // 60 => ethereum
// TODO - once trustwallet supports dogechain
// export const Dogechain = getChainName(CoinType.dogechain);

export const ethForkChains = [
//    Dogechain,
];
export const stakingChains = [
];
export const chainsWithDenylist = ethForkChains.concat(
);
