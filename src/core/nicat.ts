import { DomDriver } from "./drivers/dom";
import { HttpDriver } from "./drivers/http";

export interface NicatMessage {
  id: string;
  payload: {
    type: string;
    data: any;
  };
}

export interface NicatEffect {
  driver: "dom" | "http" | "router" | "time" | "date" | "random";
}

export type App = (message: NicatMessage) => NicatEffect[];

export class NiCat {
  messages: NicatMessage[];
  effects: NicatEffect[];

  dom: DomDriver;
  http: HttpDriver;
  app: App;

  constructor(app: App) {
    this.messages = [];
    this.effects = [];
    this.app = app;

    this.dom = new DomDriver();
    this.http = new HttpDriver();
  }

  next() {
    if (this.messages.length > 0) {
      const message = this.messages.pop() as NicatMessage;
      this.effects.push(...this.app(message));
    }
  }

  run() {
    console.log("run nicat!");
  }
}
