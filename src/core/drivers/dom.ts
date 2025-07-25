import type { NiCatEffect } from "../types.ts";
import { NiCatDriver } from "./_base.ts";

export type DomEffectPayloadType = "mount" | "update" | "remove";
export type DomEffectDriverType = "dom";

export interface DomEffect extends NiCatEffect {
  driver: DomEffectDriverType;
  payload: {
    type: DomEffectPayloadType;
    data: {
      targetQuerySelector: string;
      htmlString: string;
    };
  };
}

export class DomDriver extends NiCatDriver {
  name = "dom";
  eventListeners: any;
  root: HTMLElement;

  constructor(querySelector: string) {
    super();
    this.eventListeners = {};
    this.root = document.querySelector(querySelector) as HTMLElement;
  }

  _apply(effect: DomEffect) {
    if (effect.payload.type === "mount") {
      const target = document.querySelector(
        effect.payload.data.targetQuerySelector,
      ) as HTMLElement;

      target.innerHTML = effect.payload.data.htmlString;
    }
  }
}
