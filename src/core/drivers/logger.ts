import type { NiCatEffect } from "../types.ts";
import { NiCatDriver } from "./_base.ts";

export type LoggerEffectPayloadType = "info" | "warning" | "error";
export type LoggerEffectDriverType = "logger";

export interface LoggerEffect extends NiCatEffect {
  driver: LoggerEffectDriverType;
  payload: {
    type: LoggerEffectPayloadType;
    data: any;
  };
}

export class LoggerDriver extends NiCatDriver {
  name = "logger";

  _apply(effect: LoggerEffect) {
    console.log(effect);
  }
}
