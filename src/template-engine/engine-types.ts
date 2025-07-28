export interface NiCatAttribute {
  name: string;
  value: string;
}

export interface NiCatNode {
  type: "tag" | "text" | "operator" | "fragment";
  tagName: string;
  attributes: NiCatAttribute[];
}
