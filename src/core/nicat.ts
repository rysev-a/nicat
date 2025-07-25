import type { NiCatDriver } from "./drivers/_base.ts";
import type { NiCatApp, NiCatEffect, NiCatMessage } from "./types.ts";

export class NiCat {
  drivers: NiCatDriver[];
  app: NiCatApp;

  messages: NiCatMessage[];
  effects: NiCatEffect[];

  constructor(app: NiCatApp, drivers: NiCatDriver[]) {
    this.app = app;
    this.drivers = drivers;
    this.drivers.forEach((driver: NiCatDriver) => {
      driver.injectNext((message: NiCatMessage) => {
        this._send(message);
        this._next();
      });
    });

    this.messages = [];
    this.effects = [];
  }

  _send(message: NiCatMessage) {
    this.messages.push(message);
  }

  _next() {
    this.messages.forEach((message: NiCatMessage) => {
      this.effects.push(...this.app(message));
    });

    this.effects.forEach((effect: NiCatEffect) => {
      this.drivers.forEach((driver: NiCatDriver) => {
        driver.apply(effect);
      });
    });
  }

  run() {
    this._send({ id: "init" });
    this._next();
  }
}
