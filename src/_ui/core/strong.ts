import { HTMLElementAttributes } from "@/_definitions/attributes";

export default function NewStrong(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLElement {
  const strong = document.createElement("strong");

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        strong.autofocus = value;
        return;
      case "inert":
        strong.inert = value;
        return;
      default:
        strong.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      strong.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      strong.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return strong;
}
