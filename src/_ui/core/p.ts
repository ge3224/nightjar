import { HTMLElementAttributes } from "@/_definitions/attributes";
import appendChildren from "@/_lib/append_children";

export default function P(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLParagraphElement {
  const p = document.createElement("p");

  appendChildren(p, children);

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        p.autofocus = value;
        return;
      case "inert":
        p.inert = value;
        return;
      default:
        p.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return p;
}
