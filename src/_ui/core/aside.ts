import { GlobalAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";

/**
 * A constructor for the HTML <aside> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
 */
export default function NewAside(
  children: string | Node | Array<string | Node>,
  attributes: GlobalAttributes
): HTMLElement {
  const aside = document.createElement("aside");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        aside.autofocus = value;
        return;
      case "inert":
        aside.inert = value;
        return;
      default:
        aside.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      aside.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isFlowContent(child)) {
      aside.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return aside;
}
