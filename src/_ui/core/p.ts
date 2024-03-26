import { HTMLElementAttributes } from "@/_definitions/attributes";

export default function P(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLParagraphElement {
  const p = document.createElement("p");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        p.autofocus = value;
        return;
      case "inert":
        p.inert = value;
        return;
      default:
        p.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      p.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      p.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return p;
}
