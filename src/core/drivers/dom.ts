export interface DomEffect {
  action: string;
  payload: any;
}

export class DomDriver {
  eventListeners: any;

  constructor() {
    this.eventListeners = {}
  }
  apply(effect: DomEffect) {

  }
}
