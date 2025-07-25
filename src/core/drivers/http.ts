import type { NiCatEffect, NiCatPayload } from "../types.ts";
import { NiCatDriver } from "./_base.ts";

export interface HttpEffect extends NiCatEffect {
  type: "http";
  payload: NiCatPayload;
}

export class HttpDriver extends NiCatDriver {
  name = "http";
  _apply(effect: HttpEffect) {
    console.log(effect);
  }
}
