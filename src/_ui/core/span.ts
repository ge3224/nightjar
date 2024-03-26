import { HTMLElementAttributes } from "@/_definitions/attributes";

export default function Span(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLSpanElement {
  const span = document.createElement("span");

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

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      span.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      span.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return span;
}
