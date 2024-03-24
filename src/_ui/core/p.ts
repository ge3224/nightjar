import { HTMLElementAttributes } from "@/_definitions/attributes";
import appendChildren from "@/_lib/append_children";

export default function P(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLParagraphElement {
  const p = document.createElement("p");

  appendChildren(p, children);

  Object.entries(attributes).map(([key, value]) => {
    p.setAttribute(key, value);
  });

  return p;
}
