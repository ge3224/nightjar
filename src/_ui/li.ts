import { HTMLElementAttributes } from "../_definitions/attributes";
import appendChildren from "../_lib/append_children";

export default function Li(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLLIElement {
  const li = document.createElement("li");
  appendChildren(li, children);

  Object.entries(attributes).map(([key, value]) => {
    li.setAttribute(key, value);
  });
  return li;
}
