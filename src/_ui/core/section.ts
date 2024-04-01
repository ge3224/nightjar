import { HTMLElementAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";

/**
 * A constructor for the HMTL <section> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
 */
export default function NewSection(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementAttributes
): HTMLElement {
  const section = document.createElement("section");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        section.autofocus = value;
        return;
      case "inert":
        section.inert = value;
        return;
      default:
        section.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      section.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isFlowContent(child)) {
      section.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return section;
}
