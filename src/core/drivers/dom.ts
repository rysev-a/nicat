export interface DomEffect {
  action: string;
  payload: any;
}

export class DomDriver {
  constructor() {
    this.eventListeners = {}
  }
  apply(effect: DomEffect) {

  }
}
