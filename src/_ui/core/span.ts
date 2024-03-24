import { HTMLElementAttributes } from "../../_definitions/attributes";
import appendChildren from "../../_lib/append_children";

export default function Span(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLSpanElement {
  const span = document.createElement("span");
  appendChildren(span, children);

  Object.entries(attributes).map(([key, value]) => {
    span.setAttribute(key, value);
  });

  return span;
}
