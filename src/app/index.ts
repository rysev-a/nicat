import type { NiCatApp, NiCatEffect, NiCatMessage } from "@/core/types.ts";
import { WithTemplate } from "./with-template/with-template";

const app: NiCatApp = (message: NiCatMessage): NiCatEffect[] => {
  const effects = [];

  const withTemplateEffects = WithTemplate(message);

  effects.push(...withTemplateEffects);

  return effects;
};

export default app;
