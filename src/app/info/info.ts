import { domEffectFactory } from "@/core/drivers/dom";
import type { NiCatMessage } from "@/core/types";
import { template } from "./info.nicat";

export const Info = (message: NiCatMessage) => {
  if (message.id === "init") {
    return [domEffectFactory.mount("#app", template.data)];
  }

  return [];
};
