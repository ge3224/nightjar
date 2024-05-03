import { GlobalAttributes } from "@/_definitions/attributes";
import { isPhrasingContent } from "@/_lib/content";

/**
 * A constructor for the HTML <cite> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite)
 */
export default function NewCite(
  children: string | Node | Array<string | Node>,
  attributes: GlobalAttributes
): HTMLElement {
  const cite = document.createElement("cite");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        cite.autofocus = value;
        return;
      case "inert":
        cite.inert = value;
        return;
      default:
        cite.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      cite.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isPhrasingContent(child)) {
      cite.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return cite;
}
