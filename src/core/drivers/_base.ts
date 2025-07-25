import type { NiCatEffect, NiCatMessage } from "@/core/types.ts";

export abstract class NiCatDriver {
  abstract name: string;
  abstract _apply(effect: NiCatEffect): void;

  _callback(_message: NiCatMessage): void {}

  injectNext(callback: (message: NiCatMessage) => void) {
    this._callback = callback;
  }

  apply(effect: NiCatEffect): void {
    if (effect.driver === this.name) {
      this._apply(effect);
    }
  }
}
