import type { NiCatEffect } from "../types.ts";
import { NiCatDriver } from "./_base.ts";

export type HistoryEffectPayloadType =
  | "pushState"
  | "replaceState"
  | "go"
  | "back";

export type HistoryEffectDriverType = "history";

export interface HistoryEffect extends NiCatEffect {
  driver: HistoryEffectDriverType;
  payload: {
    type: HistoryEffectPayloadType;
    data: any;
  };
}

export class HistoryDriver extends NiCatDriver {
  name = "history";

  constructor() {
    super();

    window.addEventListener("popstate", (event) => {
      alert(
        `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
      );
    });
  }

  _apply(effect: HistoryEffect) {
    console.log(effect);
  }
}
