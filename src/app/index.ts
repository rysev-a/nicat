import type { NiCatApp, NiCatEffect, NiCatMessage } from "@/core/types.ts";

import { Info } from "./info/info";
import { NavBar } from "./navbar/navbar";

const app: NiCatApp = (message: NiCatMessage): NiCatEffect[] => {
  const effects = [];

  const navbarEffects = NavBar(message);
  const infoEffects = Info(message);

  effects.push(...navbarEffects, ...infoEffects);

  return effects;
};

export default app;
