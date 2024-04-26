import {
    Address,
    BigDecimal,
    BigInt,
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
  
  export class UniswapV3ArbitrumConfigurations implements Configurations {
    getNetwork(): string {
      return Network.ARBITRUM_ONE;
    }
    getProtocolName(): string {
      return PROTOCOL_NAME;
    }
    getProtocolSlug(): string {
      return PROTOCOL_SLUG;
    }
    getFactoryAddress(): Bytes {
      return Bytes.fromHexString("0x740b1c1de25031c31ff4fc9a62f554a55cdc1bad");
    }
    getFactoryContract(): Factory {
      return Factory.bind(
        Address.fromString("0x740b1c1de25031c31ff4fc9a62f554a55cdc1bad")
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
      return Bytes.fromHexString("0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab");
    }
    getRewardToken(): Bytes {
      return Bytes.fromHexString("");
    }
    getWhitelistTokens(): Bytes[] {
      return stringToBytesList([
        "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab", // weth.e
        "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e", // usdc
        "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7", // usdt
      ]);
    }
    getStableCoins(): Bytes[] {
      return stringToBytesList([
        "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e", // USDC
        "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7", // USDT
      ]);
    }
    getStableOraclePools(): Bytes[] {
      return stringToBytesList([
        "0x260e34c78b27ece3fc6de8cd170e3ffb49fac35f", // wETH/USDC - 0.03
      ]);
    }
    getUntrackedPairs(): Bytes[] {
      return stringToBytesList([]);
    }
    getUntrackedTokens(): Bytes[] {
      return stringToBytesList([
        "0x916c1daf79236700eb67e593dc2456890ffba548",
        "0x73e7d8bad2677656c8cfbe6e18a9257c6be2b87f",
        "0x7a6717ceabe536bb9a6bb39182a4cd575d4e222e",
      ]);
    }
    getMinimumLiquidityThreshold(): BigDecimal {
      return BigDecimal.fromString("100000");
    }
    getBrokenERC20Tokens(): Bytes[] {
      return stringToBytesList([
        "0x000000000000b91b6956fead1dda24c66aa6b972",
        "0x0000000000e586517bccb5ec52e70119299d2c9c",
        "0x0000000000958ec6667eb97e2f64f6909073e6b7",
      ]);
    }
  }
  