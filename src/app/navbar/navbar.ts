import { domEffectFactory } from "@/core/drivers/dom";
import type { NiCatMessage } from "@/core/types";
import { template as navbarTemplate } from "./navbar.nicat";

export const NavBar = (message: NiCatMessage) => {
  if (message.id === "init") {
    return [
      domEffectFactory.mount("#app", navbarTemplate.data, [
        {
          templateQuerySelector: "#navbar-item",
          targetQuerySelector: "#navbar-content",
          configs: [],
        },
      ]),
    ];
  }

  return [];
};
