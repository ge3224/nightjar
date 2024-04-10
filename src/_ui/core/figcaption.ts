import { GlobalAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";

/**
 * A constructor for the HTML <figcaption> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
 */
export default function NewFigcaption(
  children: string | Node | Array<string | Node>,
  attributes: GlobalAttributes
): HTMLElement {
  const figcaption = document.createElement("figcaption");
  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        figcaption.autofocus = value;
        return;
      case "inert":
        figcaption.inert = value;
        return;
      default:
        figcaption.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      figcaption.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isFlowContent(child)) {
      figcaption.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return figcaption;
}
