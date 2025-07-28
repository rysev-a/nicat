import { type DefaultTreeAdapterTypes, html } from "parse5";
import type { NiCatNode } from "./engine-types";

import ChildNode = DefaultTreeAdapterTypes.ChildNode;

class ParseHtml5 {
  constructor(html: ChildNode) {
    console.log("init parse html5");
    console.log(html);
  }

  _parseNodeName(nodeName: string) {
    console.log(nodeName);

    if (["if", "for"].includes(nodeName)) {
      return "operator";
    }

    return "tag";
  }
}

export const parseHtml5 = (html: ChildNode) => {
  const niCatView = new ParseHtml5(html);
};
