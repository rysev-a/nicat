import { parseFragment } from "parse5";
import { domEffectFactory } from "@/core/drivers/dom";
import type { NiCatEffect, NiCatMessage } from "@/core/types";
import { parseHtml5 } from "@/template-engine/parse";
import { template } from "./example.nicat";

export const WithTemplate = (message: NiCatMessage): NiCatEffect[] => {
  const html = parseFragment(template.data).childNodes[0];
  parseHtml5(html);

  return [domEffectFactory.mount("#app", template.data)];
};
