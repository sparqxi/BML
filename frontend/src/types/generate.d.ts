import { Dayjs } from "dayjs";

export type GenerateParamType = {
  name: string;
  symbol: string;
  decimal?: number;
  supply?: number;
  maxBuy?: number;
  initialLP?: number;
  owner: string;
  mintable?: boolean;
  redistributionTax: number;
  liquidityFee: number;
  charityFee: number;
  marketingFee: number;
  burnFee: number;
  teamWalletAddress: string;
  teamDistributionPercentage: number;
  unlockTime: Dayjs;
  totalSupply: number;
  mode: "advance" | "basic";
};
