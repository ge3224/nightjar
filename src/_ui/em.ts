import { HTMLElementAttributes } from "../_definitions/element_attributes";
import appendChildren from "../_lib/append_children";

export default function Em(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLElement {
  const em = document.createElement("em");

  appendChildren(em, children);

  Object.entries(attributes).map(([key, value]) => {
    em.setAttribute(key, value);
  });

  return em;
}
