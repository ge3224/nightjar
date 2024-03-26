import { HTMLElementAttributes } from "@/_definitions/attributes";

export default function H(
  level: number,
  children: string | Node | Node[],
  attributes: HTMLElementAttributes
): HTMLHeadingElement {
  if (level < 1 || level > 6) {
    throw new Error("Heading level must be between 1 and 6");
  }
  const h = document.createElement("h" + level);

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        h.autofocus = value;
        return;
      case "inert":
        h.inert = value;
        return;
      default:
        h.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      h.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      h.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return h as HTMLHeadingElement;
}
