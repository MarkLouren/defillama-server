import { getPairPrices } from "../adapters/lps/uniswap/uniswap";
import { getTokenPrices as curve } from "../adapters/lps/curve/curve";
import { getTokenPrices as yearn } from "../adapters/yield/yearn/yearnV2";
import { getTokenPrices as aave } from "../adapters/moneyMarkets/aave/aaveV2";
import { getTokenPrices as compound } from "../adapters/moneyMarkets/compound/compound";
async function main() {
  //   await getPairPrices(
  //     "bsc",
  //     "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
  //     "https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2"
  //   );

  await Promise.all([
    curve("ethereum")
    //aave("ethereum", "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413")
    //yearn("ethereum")
    //compound("ethereum", "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B")
  ]);
}
main();
// ts-node coins/src/cli/test.ts
