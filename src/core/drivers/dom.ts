import type { NiCatEffect } from "../types.ts";
import { NiCatDriver } from "./_base.ts";

export type DomEffectPayloadType = "mount" | "update" | "remove";
export type DomEffectDriverType = "dom";

export interface DomEffectDriverTemplateConfig {
  attribute: string;
  value: string;
}

export interface DomEffectDriverTemplate {
  templateQuerySelector: string;
  targetQuerySelector: string;
  configs: DomEffectDriverTemplateConfig[];
}

export interface DomEffect extends NiCatEffect {
  driver: DomEffectDriverType;
  payload: {
    type: DomEffectPayloadType;
    data: {
      targetQuerySelector: string;
      htmlString: string;
      templates: DomEffectDriverTemplate[];
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

      const container = document.createElement("template");
      container.innerHTML = effect.payload.data.htmlString;

      target.appendChild(container.content);

      effect.payload.data.templates.forEach((templateConfig) => {
        const template = document.querySelector(
          templateConfig.templateQuerySelector,
        ) as HTMLTemplateElement;

        const clone = template.content.cloneNode(true);
        const templateTarget = document.querySelector(
          templateConfig.targetQuerySelector,
        ) as HTMLElement;

        templateTarget.appendChild(clone);
      });
    }
  }
}

export const domEffectFactory = {
  mount: (
    targetQuerySelector: string,
    htmlString: string,
    templates: DomEffectDriverTemplate[] = [],
  ): DomEffect => {
    return {
      driver: "dom",
      payload: {
        type: "mount",
        data: {
          targetQuerySelector,
          htmlString,
          templates,
        },
      },
    };
  },
};
