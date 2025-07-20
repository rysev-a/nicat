import { DomDriver } from "./drivers/dom";
import { HttpDriver } from "./drivers/http";

export interface NicatMessage {
  id: string;
  payload: {
    type: string;
    data: any;
  };
}

class NiCat {
  constructor() {
    this.messages = [];
    this.effects = []


    this.dom = new DomDriver();
    this.http = new HttpDriver();
  }
}
