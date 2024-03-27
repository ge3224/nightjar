import { HTMLElementAttributes } from "@/_definitions/attributes";
import { isPhrasingContent } from "@/_lib/content";

/**
 * A constructor for the HTML <abbr> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
 */
export default function Abbr(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementAttributes
): HTMLElement {
  const abbr = document.createElement("abbr");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        abbr.autofocus = value;
        return;
      case "inert":
        abbr.inert = value;
        return;
      default:
        abbr.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      abbr.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isPhrasingContent(child)) {
      abbr.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return abbr;
}
