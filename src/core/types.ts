export interface NiCatPayload {
  type: string;
  data: any;
}

export interface NiCatMessage {
  id: string;
  payload?: NiCatPayload;
}

export interface NiCatEffect {
  driver: string;
  payload: NiCatPayload;
}

export type NiCatApp = (message: NiCatMessage) => NiCatEffect[];
