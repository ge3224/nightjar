import { HTMLElementAttributes } from "@/_definitions/attributes";
import appendChildren from "@/_lib/append_children";

export default function Span(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLSpanElement {
  const span = document.createElement("span");
  appendChildren(span, children);

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        span.autofocus = value;
        return;
      case "inert":
        span.inert = value;
        return;
      default:
        span.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return span;
}
