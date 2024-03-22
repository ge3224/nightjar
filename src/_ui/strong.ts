import { HTMLElementAttributes } from "../_definitions/element_attributes";
import appendChildren from "../_lib/append_children";

export default function Strong(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLElement {
  const strong = document.createElement("strong");
  appendChildren(strong, children);

  Object.entries(attributes).map(([key, value]) => {
    strong.setAttribute(key, value);
  });

  return strong;
}
