import { HTMLElementAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";
import { FOOTER, HEADER } from "@/_lib/node_names";

/**
 * A constructor for the HTML <header> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
 */
export default function NewHeader(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementAttributes
): HTMLElement {
  const header = document.createElement("header");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        header.autofocus = value;
        return;
      case "inert":
        header.inert = value;
        return;
      default:
        header.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      header.appendChild(document.createTextNode(child));
    } else if (
      child instanceof Node &&
      isFlowContent(child) &&
      child.nodeName !== HEADER &&
      child.nodeName !== FOOTER
    ) {
      header.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return header;
}
