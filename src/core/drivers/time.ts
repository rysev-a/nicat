import type { NiCatEffect } from "../types.ts";
import { NiCatDriver } from "./_base.ts";

export class TimeDriver extends NiCatDriver {
  name = "time";
  _apply(effect: NiCatEffect) {
    console.log("time effect", effect);
  }
}
