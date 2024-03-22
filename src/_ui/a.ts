import { HTMLAnchorElementAttributes } from "../_definitions/element_attributes";

/**
 * Constructs an HTMLAnchorElement, <a>.
 */
export default function A(
  child: string | Node,
  attributes: HTMLAnchorElementAttributes
): HTMLAnchorElement {
  const a = document.createElement("a");

  if (typeof child === "string") {
    a.appendChild(document.createTextNode(child));
  } else {
    a.appendChild(child);
  }

  Object.entries(attributes).map(([key, value]) => {
    a.setAttribute(key, value);
  });

  return a;
}
