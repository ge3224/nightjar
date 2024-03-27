import { HTMLElementAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";

/**
 * A constructor for the HTML <footer> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
 */
export default function Footer(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementAttributes
): HTMLElement {
  const footer = document.createElement("footer");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        footer.autofocus = value;
        return;
      case "inert":
        footer.inert = value;
        return;
      default:
        footer.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      footer.appendChild(document.createTextNode(child));
    } else if (
      child instanceof Node &&
      isFlowContent(child) &&
      child.nodeName !== "FOOTER" &&
      child.nodeName !== "HEADER"
    ) {
      footer.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return footer;
}
