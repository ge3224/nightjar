import { HTMLElementGlobalAttributes } from "../_definitions/element_attributes";
import appendChildren from "../_lib/append_children";

export default function Li(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementGlobalAttributes
): HTMLLIElement {
  const li = document.createElement("li");
  appendChildren(li, children);

  Object.entries(attributes).map(([key, value]) => {
    li.setAttribute(key, value);
  });
  return li;
}
