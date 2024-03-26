import { HTMLAnchorElementAttributes } from "@/_definitions/attributes";

/**
 * Constructor for an HTML <a> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/a)
 */
export default function A(
  children: string | Node | Array<string | Node>,
  attributes: HTMLAnchorElementAttributes
): HTMLAnchorElement {
  const a = document.createElement("a");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        a.autofocus = value;
        return;
      case "inert":
        a.inert = value;
        return;
      default:
        a.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      a.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      a.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return a;
}
