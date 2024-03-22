import { HTMLElementGlobalAttributes } from "../_definitions/element_attributes";
import appendChildren from "../_lib/append_children";

export default function Div(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementGlobalAttributes
): HTMLDivElement {
  const div = document.createElement("div");
  appendChildren(div, children);

  Object.entries(attributes).map(([key, value]) => {
    div.setAttribute(key, value);
  });

  return div;
}
