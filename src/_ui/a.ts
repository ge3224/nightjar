import appendChildren from "../_lib/append_children";
import { HTMLAnchorElementAttributes } from "../_definitions/element_attributes";

/**
 * Constructs an HTMLAnchorElement, <a>.
 */
export default function A(
  children: string | Node | (string | Node)[],
  attributes: HTMLAnchorElementAttributes
): HTMLAnchorElement {
  const a = document.createElement("a");

  appendChildren(a, children);

  Object.entries(attributes).map(([key, value]) => {
    a.setAttribute(key, value);
  });

  return a;
}
