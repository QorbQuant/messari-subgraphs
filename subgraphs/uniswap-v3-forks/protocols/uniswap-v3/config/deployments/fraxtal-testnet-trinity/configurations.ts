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
  
  export class TrinityFraxtalConfigurations implements Configurations {
    getNetwork(): string {
      return Network.FRAXTAL_TESTNET;
    }
    getProtocolName(): string {
      return PROTOCOL_NAME;
    }
    getProtocolSlug(): string {
      return PROTOCOL_SLUG;
    }
    getFactoryAddress(): Bytes {
      return Bytes.fromHexString("0xdfaeedcf4056be588ea3574fb1a59c2cec8af84b");
    }
    getFactoryContract(): Factory {
      return Factory.bind(
        Address.fromString("0xdfaeedcf4056be588ea3574fb1a59c2cec8af84b")
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
      return Bytes.fromHexString("0xFC00000000000000000000000000000000000006");
    }
    getRewardToken(): Bytes {
      return Bytes.fromHexString("");
    }
    getWhitelistTokens(): Bytes[] {
      return stringToBytesList([
        "0xFC00000000000000000000000000000000000006", // wfrxETH
        "0x9e93f74cd6beb5de326e7e1d4d6165eac771cf79", // usdt
        "0x43a44f4f838ee4d83ffa541791a2c06d62d5ad5c", // usds
        "0x836aa28166bb9dc7511b5afb45bca403855084ef", // TRIN
      ]);
    }
    getStableCoins(): Bytes[] {
      return stringToBytesList([
        "0x43a44f4f838ee4d83ffa541791a2c06d62d5ad5c", // usds
        "0x9e93f74cd6beb5de326e7e1d4d6165eac771cf79", // usdt
      ]);
    }
    getStableOraclePools(): Bytes[] {
      return stringToBytesList([
        "0x305ad3bdb715133ef7056cd44c08a407e814a0af", // TRIN/USDS 0.03
      ]);
    }
    getUntrackedPairs(): Bytes[] {
      return stringToBytesList([]);
    }
    getUntrackedTokens(): Bytes[] {
      return stringToBytesList([
      ]);
    }
    getMinimumLiquidityThreshold(): BigDecimal {
      return BigDecimal.fromString("10000");
    }
    getBrokenERC20Tokens(): Bytes[] {
      return stringToBytesList([]);
    }
  }
  