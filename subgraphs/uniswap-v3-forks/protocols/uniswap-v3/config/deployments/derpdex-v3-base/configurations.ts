import {
    Address,
    BigInt,
    BigDecimal,
    Bytes,
    log,
  } from "@graphprotocol/graph-ts";
  import { Factory } from "../../../../../generated/Factory/Factory";
  import {
    BIGDECIMAL_ONE,
    BIGDECIMAL_ZERO,
    FeeSwitch,
    Network,
    RewardIntervalType,
  } from "../../../../../src/common/constants";
  import { Configurations } from "../../../../../configurations/configurations/interface";
  import { PROTOCOL_NAME, PROTOCOL_SLUG } from "../../../src/common/constants";
  import { stringToBytesList } from "../../../../../src/common/utils/utils";
  
  export class UniswapV3BaseConfigurations implements Configurations {
    getNetwork(): string {
      return Network.BASE;
    }
    getProtocolName(): string {
      return PROTOCOL_NAME;
    }
    getProtocolSlug(): string {
      return PROTOCOL_SLUG;
    }
    getFactoryAddress(): Bytes {
      return Bytes.fromHexString("0xeddef4273518b137cdbcb3a7fa1c6a688303dfe2");
    }
    getFactoryContract(): Factory {
      return Factory.bind(
        Address.fromString("0xeddef4273518b137cdbcb3a7fa1c6a688303dfe2")
      );
    }
    getProtocolFeeOnOff(): string {
      return FeeSwitch.OFF;
    }
    getInitialProtocolFeeProportion(fee: i64): BigDecimal {
      log.warning("getProtocolFeeRatio is not implemented: {}", [fee.toString()]);
      return BIGDECIMAL_ZERO;
    }
    getProtocolFeeProportion(protocolFee: BigInt): BigDecimal {
      return BIGDECIMAL_ONE.div(protocolFee.toBigDecimal());
    }
    getRewardIntervalType(): string {
      return RewardIntervalType.NONE;
    }
    getReferenceToken(): Bytes {
      return Bytes.fromHexString("0x4200000000000000000000000000000000000006");
    }
    getRewardToken(): Bytes {
      return Bytes.fromHexString("");
    }
    getWhitelistTokens(): Bytes[] {
      return stringToBytesList([
        "0x4200000000000000000000000000000000000006", // weth
        "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22", // coinbase wsETH
        "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca", // usdc
      ]);
    }
    getStableCoins(): Bytes[] {
      return stringToBytesList([
        "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca", // usdc
      ]);
    }
    getStableOraclePools(): Bytes[] {
      return stringToBytesList([
        "0x09b852108b6ed78adb2e776d901b8d54ba708080", // usdc-weth 
        "0x7138D05bE45207Ab40CcE8E50AB5C89207866429", // usdc-weth
        "0xb5dA4Ce320AC01f90b59837c8706406b7706587e", // usdc-weth
      ]);
    }
    getUntrackedPairs(): Bytes[] {
      return stringToBytesList([]);
    }
    getUntrackedTokens(): Bytes[] {
      return stringToBytesList([
        '0x391ef60db8e7677c32d2c547ea1a009159558419', // Penguin
        '0x6eeb5859e32225cb61434dca63bca84bb0e735a7', // Magic Internet Memes
        '0x0d3031225f4471eafdb1707db807cbb00eb561cc', // Floating Point
        '0x18f377990e7ccecd8956a30603c9c17f5de9580d', // Belphin
        '0x0e1b2c65508b1cd9939cf90337fcefa647936a98', // 1155f0
        '0x0a7df211de68b10e9a833a42d8d30b9f0358ab6d', // Base Trade
      ]);
    }
    getMinimumLiquidityThreshold(): BigDecimal {
      return BigDecimal.fromString("10000");
    }
    getBrokenERC20Tokens(): Bytes[] {
      return stringToBytesList([]);
    }
  }
  