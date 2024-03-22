import { HTMLElementAttributes } from "../_definitions/element_attributes";

export default function P(
  child: string | Node,
  attributes: HTMLElementAttributes
): HTMLParagraphElement {
  const p = document.createElement("p");

  if (typeof child === "string") {
    p.appendChild(document.createTextNode(child));
  } else {
    p.appendChild(child);
  }

  Object.entries(attributes).map(([key, value]) => {
    p.setAttribute(key, value);
  });

  return p;
}
